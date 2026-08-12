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

const getLayoutConfig = (index: number) => {
  const configs = [
    { span: 'lg:col-span-3', aspect: 'aspect-[1.3/1]' }, // Row 1 Left: Wide
    { span: 'lg:col-span-3', aspect: 'aspect-[1.3/1]' }, // Row 1 Right: Wide
    
    { span: 'lg:col-span-2', aspect: 'aspect-[3/4]' },   // Row 2 Left: Tall
    { span: 'lg:col-span-2', aspect: 'aspect-[3/4]' },   // Row 2 Middle: Tall
    { span: 'lg:col-span-2', aspect: 'aspect-[3/4]' },   // Row 2 Right: Tall
    
    { span: 'lg:col-span-2', aspect: 'aspect-[3/4]' },   // Row 3 Left: Tall
    { span: 'lg:col-span-4', aspect: 'aspect-[1.6/1]' },  // Row 3 Right: Wide
    
    { span: 'lg:col-span-4', aspect: 'aspect-[1.6/1]' },  // Row 4 Left: Wide
    { span: 'lg:col-span-2', aspect: 'aspect-[3/4]' },   // Row 4 Right: Tall
  ];
  return configs[index % configs.length];
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

  // Initialize the first project's active state on mobile load
  useEffect(() => {
    if (isMobile && filteredProjects.length > 0) {
      setHoveredUid(filteredProjects[0].uid);
    }
  }, [isMobile, filteredProjects]);

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
  }, [isMobile, filteredProjects]);

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
        className="work__list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-x-[2.2rem] gap-y-[3.5rem] lg:gap-y-[5.5rem] items-start w-full pb-[4rem] lg:pb-[12rem] z-0"
        style={{
          marginTop: isMobile ? '10rem' : '18rem',
          paddingLeft: isMobile ? '2.5rem' : '8rem',
          paddingRight: isMobile ? '2.5rem' : '8rem',
        }}
      >
        {filteredProjects.map((project, index) => {
          const { span, aspect } = getLayoutConfig(index);

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
                  {project.client} <span className="text-[#858281] font-black mx-1">•</span> {project.name}
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
