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

interface GridRowItem {
  url: string;
  text?: string | null;
  aspect?: 'portrait' | 'landscape' | 'square' | null;
  spanClass: string;
  sizes: string;
}

function packGridItems(
  items: { url: string; text?: string | null; aspect?: 'portrait' | 'landscape' | 'square' | null }[],
  targetCols: number
): GridRowItem[][] {
  const rows: GridRowItem[][] = [];
  const N = items.length;
  if (N === 0) return rows;

  let i = 0;
  if (targetCols === 3) {
    const rem = N % 3;
    if (rem === 0) {
      // All rows of 3
      while (i < N) {
        rows.push(items.slice(i, i + 3).map(img => ({
          ...img,
          spanClass: "md:col-span-4",
          sizes: "(max-width: 768px) 100vw, 33vw"
        })));
        i += 3;
      }
    } else if (rem === 2) {
      // N-2 items in rows of 3, last row of 2
      while (i < N - 2) {
        rows.push(items.slice(i, i + 3).map(img => ({
          ...img,
          spanClass: "md:col-span-4",
          sizes: "(max-width: 768px) 100vw, 33vw"
        })));
        i += 3;
      }
      rows.push(items.slice(N - 2, N).map(img => ({
        ...img,
        spanClass: "md:col-span-6",
        sizes: "(max-width: 768px) 100vw, 50vw"
      })));
    } else { // rem === 1
      if (N >= 4) {
        // N-4 items in rows of 3, last two rows of 2
        while (i < N - 4) {
          rows.push(items.slice(i, i + 3).map(img => ({
            ...img,
            spanClass: "md:col-span-4",
            sizes: "(max-width: 768px) 100vw, 33vw"
          })));
          i += 3;
        }
        rows.push(items.slice(N - 4, N - 2).map(img => ({
          ...img,
          spanClass: "md:col-span-6",
          sizes: "(max-width: 768px) 100vw, 50vw"
        })));
        rows.push(items.slice(N - 2, N).map(img => ({
          ...img,
          spanClass: "md:col-span-6",
          sizes: "(max-width: 768px) 100vw, 50vw"
        })));
      } else { // N === 1
        rows.push(items.slice(0, 1).map(img => ({
          ...img,
          spanClass: "md:col-span-12",
          sizes: "(max-width: 768px) 100vw, 100vw"
        })));
      }
    }
  } else { // targetCols === 2
    const rem = N % 2;
    if (rem === 0) {
      // All rows of 2
      while (i < N) {
        rows.push(items.slice(i, i + 2).map(img => ({
          ...img,
          spanClass: "md:col-span-6",
          sizes: "(max-width: 768px) 100vw, 50vw"
        })));
        i += 2;
      }
    } else { // rem === 1
      // N-1 items in rows of 2, last row of 1 (full-width)
      while (i < N - 1) {
        rows.push(items.slice(i, i + 2).map(img => ({
          ...img,
          spanClass: "md:col-span-6",
          sizes: "(max-width: 768px) 100vw, 50vw"
        })));
        i += 2;
      }
      rows.push(items.slice(N - 1, N).map(img => ({
        ...img,
        spanClass: "md:col-span-12",
        sizes: "(max-width: 768px) 100vw, 100vw"
      })));
    }
  }
  return rows;
}

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
  const [hasStartedPlaying, setHasStartedPlaying] = useState(true);
  const [overlayText, setOverlayText] = useState('Unmute');
  const [imageAspects, setImageAspects] = useState<{ [url: string]: 'landscape' | 'portrait' | 'square' }>({});



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

  const flatImages: { url: string; text?: string | null; aspect?: 'portrait' | 'landscape' | 'square' | null }[] = [];
  if (project.images) {
    const videos: { url: string; text?: string | null; aspect?: 'portrait' | 'landscape' | 'square' | null }[] = [];
    const images: { url: string; text?: string | null; aspect?: 'portrait' | 'landscape' | 'square' | null }[] = [];

    project.images.forEach(img => {
      if (img.imageUrl) {
        const item = { url: img.imageUrl, text: img.imageText, aspect: img.aspect };
        if (isYouTubeUrl(img.imageUrl) || !isImageUrl(img.imageUrl)) {
          videos.push(item);
        } else {
          images.push(item);
        }
      }
      if (img.secondImageUrl) {
        const item = { url: img.secondImageUrl, text: img.secondImageText, aspect: img.secondAspect };
        if (isYouTubeUrl(img.secondImageUrl) || !isImageUrl(img.secondImageUrl)) {
          videos.push(item);
        } else {
          images.push(item);
        }
      }
    });

    flatImages.push(...videos, ...images);
  }

  const flatImagesSerialized = flatImages.map(img => img.url).join(',');

  useEffect(() => {
    flatImages.forEach((img) => {
      if (isImageUrl(img.url)) {
        const tempImg = new window.Image();
        tempImg.src = img.url;
        tempImg.onload = () => {
          let aspect: 'landscape' | 'portrait' | 'square' = 'portrait';
          const ratio = tempImg.naturalWidth / tempImg.naturalHeight;
          if (ratio > 1.05) {
            aspect = 'landscape';
          } else if (ratio < 0.95) {
            aspect = 'portrait';
          } else {
            aspect = 'square';
          }
          setImageAspects((prev) => {
            if (prev[img.url] === aspect) return prev;
            return {
              ...prev,
              [img.url]: aspect
            };
          });
        };
      }
    });
  }, [flatImagesSerialized]);

  const heroVideoUrl = project.mainVideoUrl || (!isImageUrl(project.visualUrl) ? project.visualUrl : null);
  const isLandscape = project.aspectRatio ? project.aspectRatio === 'landscape' : !heroVideoUrl;
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
    } else {
      // Toggle mute/unmute
      const nextMuted = !isMuted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
      setOverlayText(nextMuted ? 'Unmute' : 'Mute');
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
          {heroVideoUrl ? (
            <>
              {isYouTubeUrl(heroVideoUrl) ? (
                <iframe
                  src={getYouTubeEmbedUrl(heroVideoUrl, isMuted) || ''}
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
                  autoPlay
                  controls={hasStartedPlaying}
                />
              )}

              {hasStartedPlaying && !isYouTubeUrl(heroVideoUrl) && (
                <div className="absolute bottom-[2rem] right-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white font-franklin font-black text-[1.4rem] uppercase tracking-wider bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm z-20 pointer-events-none">
                  {isMuted ? 'Tap to Unmute' : 'Mute'}
                </div>
              )}

              {!hasStartedPlaying && (
                <>
                  {project.thumbnailUrl ? (
                    <Image
                      src={decodeURI(project.thumbnailUrl)}
                      alt={project.name}
                      fill={true}
                      sizes="100vw"
                      priority
                      unoptimized={process.env.NODE_ENV === 'development'}
                      className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none transition-opacity duration-500 z-10"
                    />
                  ) : project.visualUrl && isImageUrl(project.visualUrl) ? (
                    <Image
                      src={decodeURI(project.visualUrl)}
                      alt={project.name}
                      fill={true}
                      sizes="100vw"
                      priority
                      unoptimized={process.env.NODE_ENV === 'development'}
                      className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none z-10"
                    />
                  ) : null}

                  {/* Big Play button overlay in the center */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/35 transition-colors duration-300 z-20">
                    <div className="w-20 h-20 lg:w-28 lg:h-28 rounded-full bg-white/90 flex items-center justify-center shadow-lg transition-transform duration-300">
                      <svg className="w-8 h-8 lg:w-12 lg:h-12 text-black translate-x-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </>
              )}
            </>
          ) : (
            // No video project: always render the static image
            (project.visualUrl || project.thumbnailUrl) && (
              <Image
                src={decodeURI(project.visualUrl || project.thumbnailUrl || '')}
                alt={project.name}
                fill={true}
                sizes="100vw"
                priority
                unoptimized={process.env.NODE_ENV === 'development'}
                className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
              />
            )
          )}
        </div>
      </div>

      {/* ----------------- INTRO TITLE BLOCK ----------------- */}
      <div
        className="w-full bg-[#e7e4e3] z-10 relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        style={{
          paddingTop: '11rem',
          paddingBottom: '1.5rem',
          paddingLeft: '1.2rem',
          paddingRight: '1.2rem'
        }}
      >
        <div className="lg:col-span-1">
          <p className="font-franklin font-black text-[1.2rem] leading-none tracking-[-0.01em] text-black">
            {project.year || '2024'}
          </p>
        </div>
        <div className="lg:col-span-11">
          <h3 className="font-franklin font-black text-[3.2rem] lg:text-[5.5rem] leading-[0.9] tracking-[-0.06em] text-black" style={{ letterSpacing: '0.01rem' }}>
            {project.client.toUpperCase()}
          </h3>
        </div>
      </div>

      {/* ----------------- METADATA & DESCRIPTION GRID ----------------- */}
      <div
        className="w-full bg-[#e7e4e3] z-10 relative grid grid-cols-1 lg:grid-cols-12 gap-y-8 gap-x-4 items-start"
        style={{
          paddingTop: '1.5rem',
          paddingBottom: '12rem',
          paddingLeft: '1.2rem',
          paddingRight: '1.2rem'
        }}
      >
        {/* Spacer Column (Under Year) */}
        <div className="lg:col-span-1 hidden lg:block" />

        {/* Role Column */}
        <div className="lg:col-span-3 flex flex-col gap-1">
          <h4 className="font-franklin font-black text-[2.1rem] uppercase tracking-[-0.04em] text-black mb-1.5" style={{ letterSpacing: '0.01rem' }}>ROLE</h4>
          <p className="font-franklin font-bold text-[1.45rem] lg:text-[1.2rem] leading-[1.1] tracking-[-0.03em] text-black">
            {project.categories.map(c => c.charAt(0).toUpperCase() + c.slice(1)).join(', ')}
          </p>
        </div>

        {/* Description Column */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          {project.description === "" ? null : (project.description || `${project.client} presents ${project.name}. Sound design, custom music supervisions and mixing by Aniedoabasi.`)
            .split('\n')
            .map((p) => p.trim())
            .filter((p) => p !== '')
            .map((para, i) => (
              <p 
                key={i} 
                className="font-franklin font-black text-[2.2rem] lg:text-[2.2rem] leading-[1.8] tracking-[-0.05em] text-black" 
                style={{ letterSpacing: '0.01rem' }} 
              >
                {para}
              </p>
            ))}
        </div>
      </div>

      {/* ----------------- DYNAMIC GALLERY GRID ----------------- */}
      {flatImages.length > 0 && (() => {
        const isSingleVideo = flatImages.length === 1 && !isImageUrl(flatImages[0].url);

        // Filter videos and images
        const getAspect = (img: typeof flatImages[0]) => {
          return img.aspect || imageAspects[img.url] || 'portrait';
        };

        const getImageClass = (url: string) => {
          if (url.includes('20.png')) {
            return "w-full aspect-[3/4] object-cover object-top block select-none pointer-events-none rounded-[2rem] border border-black/5";
          }
          return "w-full h-auto block select-none pointer-events-none rounded-[2rem] border border-black/5";
        };

        const videos = flatImages.filter(img => !isImageUrl(img.url));
        const portraitImages = flatImages.filter(img => isImageUrl(img.url) && getAspect(img) === 'portrait');
        const squareImages = flatImages.filter(img => isImageUrl(img.url) && getAspect(img) === 'square');
        const landscapeImages = flatImages.filter(img => isImageUrl(img.url) && getAspect(img) === 'landscape');

        // Pack images into rows that fill columns perfectly
        const landscapeCols = project.landscapeColumns || 2;
        const portraitRows = packGridItems(portraitImages, 3);
        const squareRows = packGridItems(squareImages, 3);
        const landscapeRows = packGridItems(landscapeImages, landscapeCols);

        return (
          <div
            className="w-full bg-[#e7e4e3] z-10 relative flex flex-col gap-y-[2.2rem]"
            style={{
              paddingBottom: isSingleVideo ? '0' : '10rem',
              paddingLeft: isSingleVideo ? 0 : '1.2rem',
              paddingRight: isSingleVideo ? 0 : '1.2rem'
            }}
          >
            {/* Render Videos */}
            {videos.map((vid, idx) => {
              const isYT = isYouTubeUrl(vid.url);
              let finalContainerClass = `relative overflow-hidden rounded-[2rem] bg-[#dbdad7] border border-black/5 aspect-[16/9] w-full`;
              if (isSingleVideo) {
                finalContainerClass = finalContainerClass.replace('rounded-[2rem]', 'rounded-none');
              }
              const finalVideoClass = "absolute inset-0 w-full h-full object-cover";

              return (
                <div key={`vid-${idx}`} className={finalContainerClass}>
                  {isYT ? (
                    <iframe
                      src={getYouTubeEmbedUrl(vid.url) || ''}
                      className={finalVideoClass}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{ border: 0, width: '100%', height: '100%' }}
                    />
                  ) : (
                    <video
                      src={vid.url}
                      autoPlay
                      loop
                      muted
                      playsInline
                      controls
                      className={finalVideoClass}
                    />
                  )}
                </div>
              );
            })}

            {/* Render Landscape Image Rows (Landscape-First) */}
            {project.galleryLayoutOrder === 'landscape-first' && landscapeRows.map((row, rIdx) => (
              <div key={`land-row-${rIdx}`} className="grid grid-cols-1 md:grid-cols-12 gap-x-[1.2rem] gap-y-[2.2rem] w-full items-start">
                {row.map((img, idx) => {
                  return (
                    <div key={`land-img-${idx}`} className={img.spanClass}>
                      <Image
                        src={decodeURI(img.url)}
                        alt="Project detail asset"
                        width={1920}
                        height={1080}
                        sizes={img.sizes}
                        className={getImageClass(img.url)}
                        priority={idx < 2}
                        unoptimized={process.env.NODE_ENV === 'development'}
                      />
                    </div>
                  );
                })}
              </div>
            ))}

            {/* Render Square Image Rows (Landscape-First) */}
            {project.galleryLayoutOrder === 'landscape-first' && squareRows.map((row, rIdx) => (
              <div key={`sq-row-${rIdx}`} className="grid grid-cols-1 md:grid-cols-12 gap-x-[1.2rem] gap-y-[2.2rem] w-full items-start">
                {row.map((img, idx) => {
                  return (
                    <div key={`sq-img-${idx}`} className={img.spanClass}>
                      <Image
                        src={decodeURI(img.url)}
                        alt="Project detail asset"
                        width={1920}
                        height={1080}
                        sizes={img.sizes}
                        className={getImageClass(img.url)}
                        priority={idx < 2}
                        unoptimized={process.env.NODE_ENV === 'development'}
                      />
                    </div>
                  );
                })}
              </div>
            ))}

            {/* Render Portrait Image Rows (Landscape-First) */}
            {project.galleryLayoutOrder === 'landscape-first' && portraitRows.map((row, rIdx) => (
              <div key={`port-row-${rIdx}`} className="grid grid-cols-1 md:grid-cols-12 gap-x-[1.2rem] gap-y-[2.2rem] w-full items-start">
                {row.map((img, idx) => {
                  return (
                    <div key={`port-img-${idx}`} className={img.spanClass}>
                      <Image
                        src={decodeURI(img.url)}
                        alt="Project detail asset"
                        width={1920}
                        height={1080}
                        sizes={img.sizes}
                        className={getImageClass(img.url)}
                        priority={idx < 2}
                        unoptimized={process.env.NODE_ENV === 'development'}
                      />
                    </div>
                  );
                })}
              </div>
            ))}

            {/* Render Portrait Image Rows (Portrait-First - Default) */}
            {project.galleryLayoutOrder !== 'landscape-first' && portraitRows.map((row, rIdx) => (
              <div key={`port-row-def-${rIdx}`} className="grid grid-cols-1 md:grid-cols-12 gap-x-[1.2rem] gap-y-[2.2rem] w-full items-start">
                {row.map((img, idx) => {
                  return (
                    <div key={`port-img-def-${idx}`} className={img.spanClass}>
                      <Image
                        src={decodeURI(img.url)}
                        alt="Project detail asset"
                        width={1920}
                        height={1080}
                        sizes={img.sizes}
                        className={getImageClass(img.url)}
                        priority={idx < 2}
                        unoptimized={process.env.NODE_ENV === 'development'}
                      />
                    </div>
                  );
                })}
              </div>
            ))}

            {/* Render Square Image Rows (Portrait-First - Default) */}
            {project.galleryLayoutOrder !== 'landscape-first' && squareRows.map((row, rIdx) => (
              <div key={`sq-row-def-${rIdx}`} className="grid grid-cols-1 md:grid-cols-12 gap-x-[1.2rem] gap-y-[2.2rem] w-full items-start">
                {row.map((img, idx) => {
                  return (
                    <div key={`sq-img-def-${idx}`} className={img.spanClass}>
                      <Image
                        src={decodeURI(img.url)}
                        alt="Project detail asset"
                        width={1920}
                        height={1080}
                        sizes={img.sizes}
                        className={getImageClass(img.url)}
                        priority={idx < 2}
                        unoptimized={process.env.NODE_ENV === 'development'}
                      />
                    </div>
                  );
                })}
              </div>
            ))}

            {/* Render Landscape Image Rows (Portrait-First - Default) */}
            {project.galleryLayoutOrder !== 'landscape-first' && landscapeRows.map((row, rIdx) => (
              <div key={`land-row-def-${rIdx}`} className="grid grid-cols-1 md:grid-cols-12 gap-x-[1.2rem] gap-y-[2.2rem] w-full items-start">
                {row.map((img, idx) => {
                  return (
                    <div key={`land-img-def-${idx}`} className={img.spanClass}>
                      <Image
                        src={decodeURI(img.url)}
                        alt="Project detail asset"
                        width={1920}
                        height={1080}
                        sizes={img.sizes}
                        className={getImageClass(img.url)}
                        priority={idx < 2}
                        unoptimized={process.env.NODE_ENV === 'development'}
                      />
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        );
      })()}


    </div>
  );
}
