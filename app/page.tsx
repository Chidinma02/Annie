'use client';

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { projects } from './data/db';
import { homepageProjects } from './data/homepage_projects';
import { triggerProjectHover, triggerDragMode } from './components/Cursor';

const EXCLUDED_HOMEPAGE_UIDS = ['cedal-wood', 'world-smile-day'];
const allHomepageProjects = [
  ...projects.filter(p => !EXCLUDED_HOMEPAGE_UIDS.includes(p.uid)),
  ...homepageProjects.filter(hp => !projects.some(p => p.uid === hp.uid) && !EXCLUDED_HOMEPAGE_UIDS.includes(hp.uid))
];

const isImageUrl = (url: string | null): boolean => {
  if (!url) return false;
  return /\.(jpeg|jpg|gif|png|webp|svg)($|\?)/i.test(url);
};

const isYouTubeUrl = (url: string | null): boolean => {
  if (!url) return false;
  return /youtube\.com|youtu\.be/i.test(url);
};

const getYouTubeEmbedUrl = (url: string | null): string | null => {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  if (match && match[2].length === 11) {
    const videoId = match[2];
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&vq=hd1080&vq=highres&hd=1`;
  }
  return null;
};

const getVideoForProject = (p: typeof allHomepageProjects[0]) => {
  if (p.visualUrl && !isImageUrl(p.visualUrl)) return p.visualUrl;
  if (p.mainVideoUrl && !isImageUrl(p.mainVideoUrl)) return p.mainVideoUrl;
  return p.visualUrl;
};

// Get only the projects that have video media for the homepage marquee
const featuredProjects = allHomepageProjects.filter(p => {
  const visualIsVideo = p.visualUrl ? !isImageUrl(p.visualUrl) : false;
  const mainIsVideo = p.mainVideoUrl ? !isImageUrl(p.mainVideoUrl) : false;
  return visualIsVideo || mainIsVideo;
});

// Duplicate items array to make the infinite loop completely seamless
const duplicatedProjects = [...featuredProjects, ...featuredProjects];

// ==========================================
// DESKTOP LANDING PAGE
// ==========================================
function DesktopLanding() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const player1Ref = useRef<HTMLVideoElement>(null);
  const player2Ref = useRef<HTMLVideoElement>(null);

  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  const [isDragging, setIsDragging] = useState(false);
  const [dragDistance, setDragDistance] = useState(0);
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);
  const [hoveredUid, setHoveredUid] = useState<string | null>(null);

  const [activePlayer, setActivePlayer] = useState<'player1' | 'player2' | null>(null);
  const [player1Url, setPlayer1Url] = useState<string | null>(null);
  const [player2Url, setPlayer2Url] = useState<string | null>(null);
  const [player1Img, setPlayer1Img] = useState<string | null>(null);
  const [player2Img, setPlayer2Img] = useState<string | null>(null);

  // Trigger dynamic crossfade transition when activeVideoUrl updates
  useEffect(() => {
    if (!activeVideoUrl) {
      setActivePlayer(null);
      return;
    }

    const activeProj = allHomepageProjects.find(p => p.visualUrl === activeVideoUrl);
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

  // Update body class when background video plays
  useEffect(() => {
    const isVideoPlaying = activeVideoUrl ? !isImageUrl(activeVideoUrl) : false;
    if (isVideoPlaying) {
      document.body.classList.add('video-playing');
    } else {
      document.body.classList.remove('video-playing');
    }
    return () => {
      document.body.classList.remove('video-playing');
    };
  }, [activeVideoUrl]);

  // Dragging event handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    isDraggingRef.current = true;
    setIsDragging(true);
    startXRef.current = e.clientX - scrollRef.current.offsetLeft;
    scrollLeftRef.current = scrollRef.current.scrollLeft;
    setDragDistance(0);
    triggerDragMode(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.clientX - scrollRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.5; // Drag speed multiplier
    scrollRef.current.scrollLeft = scrollLeftRef.current - walk;
    setDragDistance(Math.abs(x - startXRef.current));
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
    setIsDragging(false);
    triggerDragMode(false);
  };

  const handleMouseLeave = () => {
    isDraggingRef.current = false;
    setIsDragging(false);
    triggerDragMode(false);
    triggerProjectHover(null, null);
    setActiveVideoUrl(null);
    setHoveredUid(null);
  };

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    if (dragDistance > 25) {
      e.preventDefault(); // Prevent navigating if they were dragging
    } else {
      triggerProjectHover(null, null);
    }
    setDragDistance(0);
  };

  // Infinite auto-scroll animation frame loop - pauses when dragging or hovering
  useEffect(() => {
    let frameId: number;

    const animateScroll = () => {
      if (!isDragging && hoveredUid === null && scrollRef.current) {
        const container = scrollRef.current;
        container.scrollLeft += 0.7; // 0.7px per frame speed

        // Infinite loop wrap-around logic
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
      frameId = requestAnimationFrame(animateScroll);
    };

    frameId = requestAnimationFrame(animateScroll);
    return () => cancelAnimationFrame(frameId);
  }, [isDragging, hoveredUid]);

  return (
    <div className="flex-1 flex flex-col h-screen w-screen overflow-hidden select-none bg-[#edece8] relative">

      {/* Fullscreen background video on hover with dual-video crossfade */}
      <div
        className={`absolute inset-0 w-full h-full z-0 overflow-hidden bg-black transition-opacity duration-700 ${activePlayer ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        {player1Url && (
          <div
            className="absolute inset-0 w-full h-full transition-opacity duration-700"
            style={{ opacity: activePlayer === 'player1' ? (isImageUrl(player1Url) ? 1.0 : 0.8) : 0 }}
          >
            {isImageUrl(player1Url) ? (
              <img
                src={decodeURI(player1Url)}
                className="absolute inset-0 w-full h-full object-cover"
                alt="Background project"
              />
            ) : isYouTubeUrl(player1Url) ? (
              <iframe
                src={`${getYouTubeEmbedUrl(player1Url)}&background=1&controls=0`}
                className="absolute inset-0 w-full h-full"
                style={{ border: 0, pointerEvents: 'none' }}
                allow="autoplay; encrypted-media"
              />
            ) : (
              <>
                {player1Img && (
                  <img
                    src={decodeURI(player1Img)}
                    className="absolute inset-0 w-full h-full object-cover"
                    alt="Background project loading placeholder"
                  />
                )}
                <video
                  ref={player1Ref}
                  src={player1Url}
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </>
            )}
          </div>
        )}
        {player2Url && (
          <div
            className="absolute inset-0 w-full h-full transition-opacity duration-700"
            style={{ opacity: activePlayer === 'player2' ? (isImageUrl(player2Url) ? 1.0 : 0.8) : 0 }}
          >
            {isImageUrl(player2Url) ? (
              <img
                src={decodeURI(player2Url)}
                className="absolute inset-0 w-full h-full object-cover"
                alt="Background project"
              />
            ) : isYouTubeUrl(player2Url) ? (
              <iframe
                src={`${getYouTubeEmbedUrl(player2Url)}&background=1&controls=0`}
                className="absolute inset-0 w-full h-full"
                style={{ border: 0, pointerEvents: 'none' }}
                allow="autoplay; encrypted-media"
              />
            ) : (
              <>
                {player2Img && (
                  <img
                    src={decodeURI(player2Img)}
                    className="absolute inset-0 w-full h-full object-cover"
                    alt="Background project loading placeholder"
                  />
                )}
                <video
                  ref={player2Ref}
                  src={player2Url}
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </>
            )}
          </div>
        )}
        <div className={`absolute inset-0 pointer-events-none transition-opacity duration-700 ${isImageUrl(activeVideoUrl) ? 'bg-transparent' : 'bg-black/15'}`} />
      </div>

      {/* ----------------- BOTTOM SCROLLING MARQUEE ----------------- */}
      <div className="absolute bottom-0 left-0 w-full z-20 pb-0">
        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          className="w-full overflow-x-auto whitespace-nowrap scrollbar-none select-none active:cursor-grabbing py-4 relative"
          style={{ scrollbarWidth: 'none' }}
        >
          {/* Draggable items flex row */}
          <div className="inline-flex items-end h-[25rem] pl-[5rem] pr-[8rem] pb-0">
            {duplicatedProjects.map((project, idx) => {
              const isHovered = hoveredUid === project.uid;
              const hasSomeHover = hoveredUid !== null;

              return (
                <Link
                  key={`${project.uid}-${idx}`}
                  href={`/project/${project.uid}`}
                  onClick={(e) => handleLinkClick(e, `/project/${project.uid}`)}
                  onMouseEnter={() => {
                    setHoveredUid(project.uid);
                    const videoUrl = getVideoForProject(project);
                    if (videoUrl) setActiveVideoUrl(videoUrl);
                  }}
                  className="inline-block mx-16 flex-shrink-0"
                  style={{ marginLeft: '5.5rem', marginRight: '5.5rem' }}
                  draggable="false"
                >
                  <div className="flex flex-col items-start select-none pointer-events-none">
                    <h1
                      className={`font-tusker text-[19rem] uppercase leading-none select-none flex font-light marquee-title ${isHovered ? 'is-hovered' : hasSomeHover ? 'is-dimmed' : ''}`}
                      style={{ letterSpacing: '-0.09em' }}
                    >
                      {project.client.split('').map((char, charIdx) => (
                        <span
                          key={charIdx}
                          style={{ '--char-index': charIdx } as React.CSSProperties}
                          className="marquee-title-char"
                        >
                          {char === ' ' ? '\u00A0' : char}
                        </span>
                      ))}
                    </h1>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

    </div>
  );
}

// ==========================================
// MOBILE LANDING PAGE
// ==========================================
function MobileLanding() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const player1Ref = useRef<HTMLVideoElement>(null);
  const player2Ref = useRef<HTMLVideoElement>(null);

  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  const [isDragging, setIsDragging] = useState(false);
  const [dragDistance, setDragDistance] = useState(0);
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);
  const [hoveredUid, setHoveredUid] = useState<string | null>(null);

  const [activePlayer, setActivePlayer] = useState<'player1' | 'player2' | null>(null);
  const [player1Url, setPlayer1Url] = useState<string | null>(null);
  const [player2Url, setPlayer2Url] = useState<string | null>(null);
  const [player1Img, setPlayer1Img] = useState<string | null>(null);
  const [player2Img, setPlayer2Img] = useState<string | null>(null);

  // Trigger dynamic crossfade transition when activeVideoUrl updates
  useEffect(() => {
    if (!activeVideoUrl) {
      setActivePlayer(null);
      return;
    }

    const activeProj = allHomepageProjects.find(p => p.visualUrl === activeVideoUrl);
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

  // Update body class when background video plays
  useEffect(() => {
    const isVideoPlaying = activeVideoUrl ? !isImageUrl(activeVideoUrl) : false;
    if (isVideoPlaying) {
      document.body.classList.add('video-playing');
    } else {
      document.body.classList.remove('video-playing');
    }
    return () => {
      document.body.classList.remove('video-playing');
    };
  }, [activeVideoUrl]);

  // Helper to update active project based on scroll/center position
  const updateActiveProject = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;

    const links = container.getElementsByTagName('a');
    let closestUid: string | null = null;
    let closestDist = Infinity;
    const centerPoint = container.scrollLeft + container.offsetWidth / 2;

    for (let i = 0; i < links.length; i++) {
      const link = links[i];
      const linkCenter = link.offsetLeft + link.offsetWidth / 2;
      const dist = Math.abs(centerPoint - linkCenter);
      if (dist < closestDist) {
        closestDist = dist;
        const href = link.getAttribute('href') || '';
        closestUid = href.split('/').pop() || null;
      }
    }

    if (closestUid) {
      const proj = featuredProjects.find(p => p.uid === closestUid);
      if (proj && proj.uid !== hoveredUid) {
        setHoveredUid(proj.uid);
        const videoUrl = getVideoForProject(proj);
        if (videoUrl) {
          setActiveVideoUrl(videoUrl);
        }
      }
    }
  };

  // Track horizontal scroll position on mobile to dynamically highlight/play the centered project
  const handleScroll = () => {
    updateActiveProject();
  };

  // Dragging event handlers for touch/swipe
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    isDraggingRef.current = true;
    setIsDragging(true);
    startXRef.current = e.clientX - scrollRef.current.offsetLeft;
    scrollLeftRef.current = scrollRef.current.scrollLeft;
    setDragDistance(0);
    updateActiveProject();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.clientX - scrollRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeftRef.current - walk;
    setDragDistance(Math.abs(x - startXRef.current));
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!scrollRef.current) return;
    isDraggingRef.current = true;
    setIsDragging(true);
    startXRef.current = e.touches[0].clientX - scrollRef.current.offsetLeft;
    scrollLeftRef.current = scrollRef.current.scrollLeft;
    setDragDistance(0);
    updateActiveProject();
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDraggingRef.current || !scrollRef.current) return;
    const x = e.touches[0].clientX - scrollRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeftRef.current - walk;
    setDragDistance(Math.abs(x - startXRef.current));
  };

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    if (dragDistance > 25) {
      e.preventDefault();
    }
    setDragDistance(0);
  };

  return (
    <div
      onTouchStart={(e) => {
        if (scrollRef.current && !scrollRef.current.contains(e.target as Node)) {
          setHoveredUid(null);
          setActiveVideoUrl(null);
        }
      }}
      onMouseDown={(e) => {
        if (scrollRef.current && !scrollRef.current.contains(e.target as Node)) {
          setHoveredUid(null);
          setActiveVideoUrl(null);
        }
      }}
      className="flex-1 flex flex-col h-screen w-screen overflow-hidden select-none bg-[#edece8] relative"
    >

      {/* Fullscreen background video with dual-video crossfade */}
      <div
        className={`absolute inset-0 w-full h-full z-0 overflow-hidden bg-black transition-opacity duration-700 ${activePlayer ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        {player1Url && (
          <div
            className="absolute inset-0 w-full h-full transition-opacity duration-700"
            style={{ opacity: activePlayer === 'player1' ? (isImageUrl(player1Url) ? 1.0 : 0.8) : 0 }}
          >
            {isImageUrl(player1Url) ? (
              <img
                src={decodeURI(player1Url)}
                className="absolute inset-0 w-full h-full object-cover"
                alt="Background project"
              />
            ) : isYouTubeUrl(player1Url) ? (
              <iframe
                src={`${getYouTubeEmbedUrl(player1Url)}&background=1&controls=0`}
                className="iframe-cover"
                style={{ border: 0, pointerEvents: 'none' }}
                allow="autoplay; encrypted-media"
              />
            ) : (
              <>
                {player1Img && (
                  <img
                     src={decodeURI(player1Img)}
                     className="absolute inset-0 w-full h-full object-cover"
                     alt="Background project loading placeholder"
                  />
                )}
                <video
                  ref={player1Ref}
                  src={player1Url}
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </>
            )}
          </div>
        )}
        {player2Url && (
          <div
            className="absolute inset-0 w-full h-full transition-opacity duration-700"
            style={{ opacity: activePlayer === 'player2' ? (isImageUrl(player2Url) ? 1.0 : 0.8) : 0 }}
          >
            {isImageUrl(player2Url) ? (
              <img
                src={decodeURI(player2Url)}
                className="absolute inset-0 w-full h-full object-cover"
                alt="Background project"
              />
            ) : isYouTubeUrl(player2Url) ? (
              <iframe
                src={`${getYouTubeEmbedUrl(player2Url)}&background=1&controls=0`}
                className="iframe-cover"
                style={{ border: 0, pointerEvents: 'none' }}
                allow="autoplay; encrypted-media"
              />
            ) : (
              <>
                {player2Img && (
                  <img
                    src={decodeURI(player2Img)}
                    className="absolute inset-0 w-full h-full object-cover"
                    alt="Background project loading placeholder"
                  />
                )}
                <video
                  ref={player2Ref}
                  src={player2Url}
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </>
            )}
          </div>
        )}
        <div className={`absolute inset-0 pointer-events-none transition-opacity duration-700 ${isImageUrl(activeVideoUrl) ? 'bg-transparent' : 'bg-black/15'}`} />
      </div>

      {/* ----------------- MOBILE SCROLLING MARQUEE ----------------- */}
      <div className="absolute bottom-0 left-0 w-full z-20 pb-8">
        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleMouseUp}
          onScroll={handleScroll}
          className="w-full overflow-x-auto whitespace-nowrap scrollbar-none select-none active:cursor-grabbing py-4 relative"
          style={{ scrollbarWidth: 'none' }}
        >
          {/* Draggable items flex row */}
          <div className="inline-flex items-end h-[14rem] pl-[5rem] pr-[8rem] pb-0">
            {duplicatedProjects.map((project, idx) => {
              const isHovered = hoveredUid === project.uid;
              const hasSomeHover = hoveredUid !== null;

              return (
                <Link
                  key={`${project.uid}-${idx}`}
                  href={`/project/${project.uid}`}
                  onClick={(e) => handleLinkClick(e, `/project/${project.uid}`)}
                  className="inline-block mx-8 flex-shrink-0"
                  style={{ marginLeft: '5.5rem', marginRight: '5.5rem' }}
                  draggable="false"
                >
                  <div className="flex flex-col items-start select-none pointer-events-none">
                    <h1
                      className={`font-tusker text-[10rem] uppercase leading-none select-none flex font-light marquee-title ${isHovered ? 'is-hovered' : hasSomeHover ? 'is-dimmed' : ''}`}
                      style={{ letterSpacing: '-0.09em' }}
                    >
                      {project.client.split('').map((char, charIdx) => (
                        <span
                          key={charIdx}
                          style={{ '--char-index': charIdx } as React.CSSProperties}
                          className="marquee-title-char"
                        >
                          {char === ' ' ? '\u00A0' : char}
                        </span>
                      ))}
                    </h1>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

    </div>
  );
}

// ==========================================
// MAIN HOME ROUTER
// ==========================================
export default function Home() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile === null) {
    // Return simple layout during initial hydration to prevent mismatch
    return (
      <div className="flex-1 flex flex-col h-screen w-screen overflow-hidden bg-[#edece8]" />
    );
  }

  return isMobile ? <MobileLanding /> : <DesktopLanding />;
}
