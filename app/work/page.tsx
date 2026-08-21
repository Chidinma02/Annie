'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense, useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '../data/db';

const CATEGORIES = [
  { id: 'sound-design', label: 'sound design' },
  { id: 'music', label: 'music' },
  { id: 'mix', label: 'mix' }
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
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0`;
  }
  return null;
};

interface WorkItemVideoProps {
  src: string | null;
  isActive: boolean;
}

function WorkItemVideo({ src, isActive }: WorkItemVideoProps) {
  if (!isActive || !src) return null;

  if (isImageUrl(src)) {
    return (
      <Image
        src={decodeURI(src)}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="absolute inset-0 w-full h-full object-cover z-10"
        alt="Project preview"
        unoptimized={process.env.NODE_ENV === 'development'}
      />
    );
  }

  if (isYouTubeUrl(src)) {
    return (
      <iframe
        src={`${getYouTubeEmbedUrl(src)}&background=1&controls=0`}
        className="absolute inset-0 w-full h-full object-cover z-10"
        style={{ border: 0, pointerEvents: 'none' }}
        allow="autoplay; encrypted-media"
      />
    );
  }

  return (
    <video
      src={src}
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 w-full h-full object-cover z-10"
    />
  );
}

const isProjectVideoGridItem = (project: typeof projects[0]) => {
  return !project.thumbnailUrl && project.visualUrl && !isImageUrl(project.visualUrl);
};

const getLayoutConfig = (project: typeof projects[0]) => {
  const isVideo = isProjectVideoGridItem(project);
  return {
    span: isVideo ? 'md:col-span-2' : 'md:col-span-1',
    aspect: isVideo ? 'aspect-[16/9]' : 'aspect-[3/4]'
  };
};

function WorkList() {
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get('category') || 'all';
  const [hoveredUid, setHoveredUid] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const horizontalRowRef = useRef<HTMLDivElement>(null);

  // Mouse drag refs and states
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!isMobile || !horizontalRowRef.current) return;
    isDraggingRef.current = true;
    setIsDragging(true);
    startXRef.current = e.clientX - horizontalRowRef.current.offsetLeft;
    scrollLeftRef.current = horizontalRowRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMobile || !isDraggingRef.current || !horizontalRowRef.current) return;
    e.preventDefault();
    const x = e.clientX - horizontalRowRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.5;
    horizontalRowRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    isDraggingRef.current = false;
    setIsDragging(false);
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Compute project counts for each category
  const getCount = (catId: string) => {
    if (catId === 'all') return projects.length;
    return projects.filter(p => p.categories.includes(catId)).length;
  };

  // Filter projects based on selected category
  const filteredProjects = projects.filter(project => {
    if (activeCategory === 'all') return true;
    return project.categories.includes(activeCategory);
  });

  // Alternating row chunking: One row of videos (up to 2), then one row of images (up to 3)
  const videoPool = filteredProjects.filter(p => isProjectVideoGridItem(p));
  const imagePool = filteredProjects.filter(p => !isProjectVideoGridItem(p));

  const displayProjects: typeof projects = [];
  const layoutConfigs: { span: string; aspect: string }[] = [];

  let videoIndex = 0;
  let imageIndex = 0;
  let isVideoRow = true;

  while (videoIndex < videoPool.length || imageIndex < imagePool.length) {
    if (isVideoRow && videoIndex < videoPool.length) {
      // Chunk up to 2 videos for the video row
      const remainingVideosCount = videoPool.length - videoIndex;
      const rowVideosCount = Math.min(2, remainingVideosCount);
      const rowVideos = videoPool.slice(videoIndex, videoIndex + rowVideosCount);
      videoIndex += rowVideosCount;

      rowVideos.forEach((project) => {
        displayProjects.push(project);
        layoutConfigs.push({
          span: rowVideosCount === 1 ? 'md:col-span-12' : 'md:col-span-6',
          aspect: 'aspect-[16/9]'
        });
      });
      isVideoRow = false;
    } else if (!isVideoRow && imageIndex < imagePool.length) {
      // Chunk up to 3 images for the image row
      const remainingImagesCount = imagePool.length - imageIndex;
      const rowImagesCount = Math.min(3, remainingImagesCount);
      const rowImages = imagePool.slice(imageIndex, imageIndex + rowImagesCount);
      imageIndex += rowImagesCount;

      rowImages.forEach((project) => {
        displayProjects.push(project);
        layoutConfigs.push({
          span: rowImagesCount === 3 ? 'md:col-span-4' : rowImagesCount === 2 ? 'md:col-span-6' : 'md:col-span-12',
          aspect: 'aspect-[3/4]'
        });
      });
      isVideoRow = true;
    } else {
      // Toggle if one pool is exhausted
      isVideoRow = !isVideoRow;
    }
  }

  // Initialize the first project's active state on mobile load
  useEffect(() => {
    if (isMobile && displayProjects.length > 0) {
      setHoveredUid(displayProjects[0].uid);
    }
  }, [isMobile, displayProjects]);

  // Track horizontal scroll of the row on mobile to highlight and play centered project video preview
  const handleScroll = () => {
    if (!isMobile || !horizontalRowRef.current) return;
    const container = horizontalRowRef.current;

    const items = container.querySelectorAll('.work__item');
    let closestUid: string | null = null;
    let closestDist = Infinity;
    const viewportCenter = window.innerWidth / 2;

    items.forEach((item) => {
      const rect = item.getBoundingClientRect();
      const itemCenter = rect.left + rect.width / 2;
      const dist = Math.abs(viewportCenter - itemCenter);

      if (dist < closestDist) {
        closestDist = dist;
        const href = item.getAttribute('href') || '';
        closestUid = href.split('/').pop() || null;
      }
    });

    if (closestUid && closestUid !== hoveredUid) {
      setHoveredUid(closestUid);
    }
  };

  // Run scroll checks initially and when category changes
  useEffect(() => {
    if (isMobile) {
      const timer = setTimeout(handleScroll, 200);
      return () => clearTimeout(timer);
    }
  }, [isMobile, displayProjects]);

  return (
    <div 
      className="l__work w-full relative bg-[#edece8] select-none"
      style={{ 
        height: 'auto', 
        overflow: 'visible', 
        paddingBottom: '12rem' 
      }}
    >
      <div
        className="work__list grid grid-cols-1 md:grid-cols-12 gap-x-[1.2rem] gap-y-[2.2rem] items-start w-full pb-[4rem] lg:pb-[12rem] z-0"
        style={{
          marginTop: isMobile ? '10rem' : '18rem',
          paddingLeft: '1.2rem',
          paddingRight: '1.2rem',
          gridAutoFlow: 'dense'
        }}
      >
        {displayProjects.map((project, index) => {
          const { span, aspect } = layoutConfigs[index];

          return (
            <Link
              key={project.uid}
              href={`/project/${project.uid}`}
              className={`work__item block w-full group mb-[3rem] transition-all duration-500 ${span}`}
            >
              {/* Thumbnail container */}
              <div 
                className={`work__image--container relative overflow-hidden rounded-[2rem] bg-[#dbdad7] ${aspect}`}
              >
                {/* Image */}
                {project.thumbnailUrl ? (
                  <Image
                    src={decodeURI(project.thumbnailUrl)}
                    alt={`${project.client} - ${project.name}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="work__image work__image--image absolute inset-0 w-full h-full object-cover"
                    unoptimized={process.env.NODE_ENV === 'development'}
                  />
                ) : (
                  project.visualUrl && !isImageUrl(project.visualUrl) && (
                    <video
                      src={project.visualUrl}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  )
                )}
              </div>

              {/* Title & Metadata */}
              <div className="work__title relative mt-6 px-2 overflow-hidden text-ellipsis whitespace-nowrap">
                <h3 className="font-sans font-black text-[1.8rem] uppercase tracking-tight text-[#131313]">
                  {project.client}
                </h3>
                <p className="font-sans font-bold text-[1.2rem] uppercase tracking-wider text-[#858281] mt-2">
                  {project.categories.join(' / ')}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default function WorkPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-[#edece8]">
        <div className="font-tusker text-[3rem] uppercase animate-pulse text-accent">Loading Work...</div>
      </div>
    }>
      <WorkList />
    </Suspense>
  );
}
