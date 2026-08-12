'use client';

import { use, useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '../../data/db';
import { homepageProjects } from '../../data/homepage_projects';
import { triggerProjectHover } from '../../components/Cursor';

const allProjects = [...projects, ...homepageProjects.filter(hp => !projects.some(p => p.uid === hp.uid))];

const isImageUrl = (url: string | null): boolean => {
  if (!url) return false;
  return /\.(jpeg|jpg|gif|png|webp|svg)($|\?)/i.test(url);
};

const isYouTubeUrl = (url: string | null): boolean => {
  if (!url) return false;
  return /youtube\.com|youtu\.be/i.test(url);
};

const getYouTubeEmbedUrl = (url: string | null, muted = true): string | null => {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  if (match && match[2].length === 11) {
    const videoId = match[2];
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=${muted ? 1 : 0}&loop=1&playlist=${videoId}&controls=1&vq=hd1080&vq=highres&hd=1`;
  }
  return null;
};

const chunkImagesIntoRows = (images: { imageUrl?: string | null; secondImageUrl?: string | null }[]) => {
  const flatAssets: string[] = [];
  images.forEach(img => {
    if (img.imageUrl) flatAssets.push(img.imageUrl);
    if (img.secondImageUrl) flatAssets.push(img.secondImageUrl);
  });

  const rowSizes = [3, 1, 2, 3, 4];
  const result: string[][] = [];
  let imgIndex = 0;
  let sizeIndex = 0;

  while (imgIndex < flatAssets.length) {
    const size = rowSizes[sizeIndex % rowSizes.length];
    const chunk = flatAssets.slice(imgIndex, imgIndex + size);
    result.push(chunk);
    imgIndex += size;
    sizeIndex++;
  }
  return result;
};

export default function ProjectDetailPage(props: { params: Promise<{ uid: string }> }) {
  const { uid } = use(props.params);

  // Find the current project
  const project = allProjects.find(p => p.uid === uid);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [hasStartedPlaying, setHasStartedPlaying] = useState(false);
  const [overlayText, setOverlayText] = useState('Play');

  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);
  const [hoveredUid, setHoveredUid] = useState<string | null>(null);

  const [activePlayer, setActivePlayer] = useState<'player1' | 'player2' | null>(null);
  const [player1Url, setPlayer1Url] = useState<string | null>(null);
  const [player2Url, setPlayer2Url] = useState<string | null>(null);
  const [player1Img, setPlayer1Img] = useState<string | null>(null);
  const [player2Img, setPlayer2Img] = useState<string | null>(null);

  const [isMobile, setIsMobile] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const player1Ref = useRef<HTMLVideoElement>(null);
  const player2Ref = useRef<HTMLVideoElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Trigger dynamic crossfade transition when activeVideoUrl updates
  useEffect(() => {
    if (!activeVideoUrl) {
      setActivePlayer(null);
      return;
    }

    const activeProj = allProjects.find(p => p.visualUrl === activeVideoUrl);
    const activeImg = activeProj?.thumbnailUrl || null;

    if (activePlayer === null || activePlayer === 'player2') {
      setPlayer1Url(activeVideoUrl);
      setPlayer1Img(activeImg);
      setActivePlayer('player1');
      setTimeout(() => {
        if (player1Ref.current && !isImageUrl(activeVideoUrl)) {
          player1Ref.current.load();
          player1Ref.current.play().catch(() => { });
        }
      }, 0);
    } else {
      setPlayer2Url(activeVideoUrl);
      setPlayer2Img(activeImg);
      setActivePlayer('player2');
      setTimeout(() => {
        if (player2Ref.current && !isImageUrl(activeVideoUrl)) {
          player2Ref.current.load();
          player2Ref.current.play().catch(() => { });
        }
      }, 0);
    }
  }, [activeVideoUrl]);

  // Check window size on load and resize to detect mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Mouse drag refs and states
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    isDraggingRef.current = true;
    setIsDragging(true);
    startXRef.current = e.clientX - scrollRef.current.offsetLeft;
    scrollLeftRef.current = scrollRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.clientX - scrollRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    isDraggingRef.current = false;
    setIsDragging(false);
  };

  // Get next projects for footer recommendations (exclude current, take 3 items)
  const nextProjects = allProjects
    .filter(p => p.uid !== uid)
    .slice(0, 3);

  // Initialize the first recommended project's active state
  useEffect(() => {
    if (nextProjects.length > 0) {
      const firstProj = nextProjects[0];
      setHoveredUid(firstProj.uid);
      if (firstProj.visualUrl) {
        setActiveVideoUrl(firstProj.visualUrl);
      }
    }
  }, [nextProjects]);

  // Track scroll position to dynamically highlight/play the centered recommended project
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;

    const links = container.getElementsByTagName('a');
    let closestUid: string | null = null;
    let closestDist = Infinity;
    const viewportCenter = window.innerWidth / 2;

    for (let i = 0; i < links.length; i++) {
      const link = links[i];
      const rect = link.getBoundingClientRect();
      const linkCenter = rect.left + rect.width / 2;
      const dist = Math.abs(viewportCenter - linkCenter);

      if (rect.right > 0 && rect.left < window.innerWidth) {
        if (dist < closestDist) {
          closestDist = dist;
          const href = link.getAttribute('href') || '';
          closestUid = href.split('/').pop() || null;
        }
      }
    }

    if (closestUid && closestUid !== hoveredUid) {
      const proj = allProjects.find(p => p.uid === closestUid);
      if (proj) {
        setHoveredUid(proj.uid);
        if (proj.visualUrl) {
          setActiveVideoUrl(proj.visualUrl);
        }
      }
    }
  };

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-[#e7e4e3] select-none text-[#131313]">
        <h1 className="font-tusker text-[8rem] uppercase">Not Found</h1>
        <Link href="/work" className="font-sans text-[1.8rem] underline mt-4 hover:text-accent">
          Back to Work
        </Link>
      </div>
    );
  }

  const flatImages: { url: string; text?: string | null }[] = [];
  if (project.images) {
    project.images.forEach(img => {
      if (img.imageUrl) {
        flatImages.push({ url: img.imageUrl, text: img.imageText });
      }
      if (img.secondImageUrl) {
        flatImages.push({ url: img.secondImageUrl, text: img.secondImageText });
      }
    });
  }

  const heroVideoUrl = project.mainVideoUrl || (!isImageUrl(project.visualUrl) ? project.visualUrl : null);
  const isLandscape = project.aspectRatio === 'landscape';
  const containerClass = isLandscape
    ? "w-full aspect-[16/10] lg:aspect-[2.2/1] overflow-hidden bg-[#dbdad7] relative cursor-pointer group"
    : "w-full relative cursor-pointer group";
  const childMediaClass = isLandscape
    ? "absolute inset-0 w-full h-full object-cover"
    : "w-full h-auto block";
  const galleryAspectClass = project.galleryAspect === 'portrait'
    ? 'aspect-[3/4]'
    : project.galleryAspect === 'square'
    ? 'aspect-[1/1]'
    : project.galleryAspect === 'landscape'
    ? 'aspect-[16/10]'
    : project.galleryAspect === 'auto'
    ? ''
    : 'aspect-[16/10]'; // Default to landscape for a consistent grid layout

  const getMediaClasses = (isPairedOrGrid: boolean) => {
    const useAspect = isPairedOrGrid && galleryAspectClass;
    return {
      containerClass: `relative overflow-hidden rounded-[2rem] bg-[#dbdad7] border border-black/5 ${useAspect ? galleryAspectClass : ''}`,
      mediaClass: useAspect
        ? "absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
        : "w-full h-auto block select-none pointer-events-none",
      videoClass: useAspect
        ? "absolute inset-0 w-full h-full object-cover"
        : "w-full h-auto block"
    };
  };
  // Handle Play/Mute toggle
  const handleVideoClick = () => {
    if (heroVideoUrl && isYouTubeUrl(heroVideoUrl)) {
      setHasStartedPlaying(true);
      setIsPlaying(true);
      return;
    }

    if (!videoRef.current) return;

    if (!hasStartedPlaying) {
      // First click: hide still image overlay, play video unmuted
      videoRef.current.muted = false;
      videoRef.current.play().catch(() => {});
      setIsMuted(false);
      setHasStartedPlaying(true);
      setIsPlaying(true);
      setOverlayText('Mute');
    }
  };

  return (
    <div className="l__project min-h-screen bg-[#e7e4e3] pb-[10rem] select-none text-[#131313] w-full relative">



      {/* ----------------- HERO PROJECT VISUAL ----------------- */}
      <div
        className="w-full relative bg-[#e7e4e3] z-10"
        style={{
          paddingTop: isMobile ? '10rem' : '14rem',
          paddingBottom: '2rem',
          paddingLeft: 0,
          paddingRight: 0
        }}
      >
        <div 
          className={containerClass}
          onClick={handleVideoClick}
        >
          {heroVideoUrl && (
            isYouTubeUrl(heroVideoUrl) ? (
              <iframe
                src={getYouTubeEmbedUrl(heroVideoUrl, false) || ''}
                className={isLandscape ? "absolute inset-0 w-full h-full" : "w-full h-auto block"}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ border: 0, width: '100%', aspectRatio: '16/9' }}
              />
            ) : (
              <video
                ref={videoRef}
                src={heroVideoUrl}
                className={childMediaClass}
                loop
                muted={isMuted}
                playsInline
                controls={hasStartedPlaying}
              />
            )
          )}

          {!hasStartedPlaying && (
            <>
              {project.thumbnailUrl ? (
                <Image
                  src={decodeURI(project.thumbnailUrl)}
                  alt={project.name}
                  fill={!!heroVideoUrl || isLandscape}
                  width={(!heroVideoUrl && !isLandscape) ? 1920 : undefined}
                  height={(!heroVideoUrl && !isLandscape) ? 1080 : undefined}
                  sizes="100vw"
                  priority
                  unoptimized={process.env.NODE_ENV === 'development'}
                  className={heroVideoUrl ? "absolute inset-0 w-full h-full object-cover select-none pointer-events-none transition-opacity duration-500 z-10" : `${childMediaClass} select-none pointer-events-none transition-opacity duration-500`}
                />
              ) : project.visualUrl && isImageUrl(project.visualUrl) ? (
                <Image
                  src={decodeURI(project.visualUrl)}
                  alt={project.name}
                  fill={!!heroVideoUrl || isLandscape}
                  width={(!heroVideoUrl && !isLandscape) ? 1920 : undefined}
                  height={(!heroVideoUrl && !isLandscape) ? 1080 : undefined}
                  sizes="100vw"
                  priority
                  unoptimized={process.env.NODE_ENV === 'development'}
                  className={heroVideoUrl ? "absolute inset-0 w-full h-full object-cover select-none pointer-events-none z-10" : `${childMediaClass} select-none pointer-events-none`}
                />
              ) : null}

              {/* Big Play button overlay in the center */}
              {heroVideoUrl && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/35 transition-colors duration-300 z-20">
                  <div className="w-20 h-20 lg:w-28 lg:h-28 rounded-full bg-white/90 flex items-center justify-center shadow-lg transition-transform duration-300">
                    {/* Play Triangle SVG */}
                    <svg className="w-8 h-8 lg:w-12 lg:h-12 text-black translate-x-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* ----------------- INTRO TITLE BLOCK ----------------- */}
      <div
        className="w-full bg-[#e7e4e3] z-10 relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        style={{
          paddingTop: '11rem',
          paddingBottom: '1.5rem',
          paddingLeft: isMobile ? '2rem' : '4rem',
          paddingRight: isMobile ? '2rem' : '4rem'
        }}
      >
        <div className="lg:col-span-1">
          <p className="font-franklin font-black text-[1.2rem] leading-none tracking-[-0.01em] text-black">2024</p>
        </div>
        <div className="lg:col-span-11">
          <h3 className="font-franklin font-black text-[3.2rem] lg:text-[5.5rem] leading-[0.9] tracking-[-0.06em] text-black" style={{ letterSpacing: '0.01rem' }}>
            {project.client.toUpperCase()} <span className="mx-2">•</span> {project.name}
          </h3>
        </div>
      </div>

      {/* ----------------- METADATA & DESCRIPTION GRID ----------------- */}
      <div
        className="w-full bg-[#e7e4e3] z-10 relative grid grid-cols-1 lg:grid-cols-12 gap-y-8 gap-x-4 items-start"
        style={{
          paddingTop: '1.5rem',
          paddingBottom: '12rem',
          paddingLeft: isMobile ? '2rem' : '4rem',
          paddingRight: isMobile ? '2rem' : '4rem'
        }}
      >
        {/* Spacer Column (Under Year) */}
        <div className="lg:col-span-1 hidden lg:block" />

        {/* Credits Column */}
        <div className="lg:col-span-2 flex flex-col gap-1">
          <h4 className="font-franklin font-black text-[2.1rem] uppercase text-black mb-1.5" style={{ letterSpacing: '0.01rem' }}>CREDITS</h4>
          <div className="flex flex-col gap-1">
            {project.credits.map((cred, idx) => (
              <p key={idx} className="font-franklin font-bold text-[1.45rem] lg:text-[1.2rem] leading-[1.1] tracking-[-0.03em] text-black">
                {cred.trim()}
              </p>
            ))}
          </div>
        </div>

        {/* Role Column */}
        <div className="lg:col-span-2 flex flex-col gap-1">
          <h4 className="font-franklin font-black text-[2.1rem] uppercase tracking-[-0.04em] text-black mb-1.5" style={{ letterSpacing: '0.01rem' }}>ROLE</h4>
          <p className="font-franklin font-bold text-[1.45rem] lg:text-[1.2rem] leading-[1.1] tracking-[-0.03em] text-black">
            {project.categories.map(c => c.charAt(0).toUpperCase() + c.slice(1)).join(', ')}
          </p>
        </div>

        {/* Description Column */}
        <div className="lg:col-span-7">
          <p className="font-franklin font-black text-[2.2rem] lg:text-[2.2rem] leading-[0.95] tracking-[-0.05em] text-black" style={{ letterSpacing: '0.01rem' }} >
            {project.description || `${project.client} presents ${project.name}. Sound design, custom music supervisions and mixing by Aniedoabasi.`}
          </p>
        </div>
      </div>

      {/* ----------------- DYNAMIC GALLERY GRID ----------------- */}
      {flatImages.length > 0 && (
        <div
          className="w-full bg-[#e7e4e3] z-10 relative"
          style={{
            paddingBottom: '10rem',
            paddingLeft: isMobile ? '2rem' : '4rem',
            paddingRight: isMobile ? '2rem' : '4rem'
          }}
        >
          <div
            className="grid grid-cols-1 gap-6 lg:gap-8 w-full items-start"
            style={{
              gridTemplateColumns: isMobile ? '1fr' : `repeat(${project.galleryColumns || 2}, 1fr)`
            }}
          >
            {flatImages.map((img, idx) => {
              const { containerClass, mediaClass, videoClass } = getMediaClasses(true);
              const useAspect = !!galleryAspectClass;
              return (
                <div key={idx} className={containerClass}>
                  {isImageUrl(img.url) ? (
                    <Image
                      src={decodeURI(img.url)}
                      alt="Project detail asset"
                      fill={useAspect}
                      width={!useAspect ? 1920 : undefined}
                      height={!useAspect ? 1080 : undefined}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className={mediaClass}
                      priority={idx < 2}
                      unoptimized={process.env.NODE_ENV === 'development'}
                    />
                  ) : (
                    isYouTubeUrl(img.url) ? (
                      <iframe
                        src={getYouTubeEmbedUrl(img.url) || ''}
                        className={videoClass.replace('object-cover', '')}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{ border: 0, width: '100%', height: '100%', aspectRatio: '16/9' }}
                      />
                    ) : (
                      <video
                        src={img.url}
                        autoPlay
                        loop
                        muted
                        playsInline
                        controls
                        className={videoClass}
                      />
                    )
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}


    </div>
  );
}
