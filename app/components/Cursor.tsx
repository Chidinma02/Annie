'use client';

import { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';

export const triggerProjectHover = (url: string | null, name: string | null) => {
  if (typeof window !== 'undefined') {
    const event = new CustomEvent('cursor-hover-project', { detail: { url, name } });
    window.dispatchEvent(event);
  }
};

export const triggerDragMode = (active: boolean) => {
  if (typeof window !== 'undefined') {
    const event = new CustomEvent('cursor-drag', { detail: active });
    window.dispatchEvent(event);
  }
};

export default function Cursor() {
  const pathname = usePathname();
  const isLandingPage = pathname === '/';

  const [isVisible, setIsVisible] = useState(false);
  const [dragMode, setDragMode] = useState(false);
  const [preview, setPreview] = useState<{ url: string | null; name: string | null }>({
    url: null,
    name: null,
  });

  const [activeUrl, setActiveUrl] = useState<string | null>(null);
  const [activeName, setActiveName] = useState<string | null>(null);

  const mouseCoords = useRef({ x: -100, y: -100 });
  const previewCoords = useRef({ x: -500, y: -500 });
  const isVisibleRef = useRef(false);
  
  const dotRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const hoverVideoRef = useRef<HTMLVideoElement>(null);

  // Toggle class on <html> to hide default cursor only on landing page
  useEffect(() => {
    if (isLandingPage) {
      document.documentElement.classList.add('cursor-none-page');
    } else {
      document.documentElement.classList.remove('cursor-none-page');
    }
    return () => {
      document.documentElement.classList.remove('cursor-none-page');
    };
  }, [isLandingPage]);

  // Maintain active hover content states to let exit transitions play out
  useEffect(() => {
    if (!isLandingPage) return;
    if (preview.url) {
      setActiveUrl(preview.url);
      setActiveName(preview.name);
    } else {
      const timer = setTimeout(() => {
        setActiveUrl(null);
        setActiveName(null);
      }, 800); // matches the 0.8s CSS transition duration
      return () => clearTimeout(timer);
    }
  }, [preview.url, preview.name, isLandingPage]);

  // Programmatic play trigger on activeUrl change to bypass browser autoplay blocks
  useEffect(() => {
    if (!isLandingPage) return;
    if (hoverVideoRef.current && activeUrl && activeUrl.includes('.mp4')) {
      hoverVideoRef.current.load();
      const playPromise = hoverVideoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log("Autoplay prevented:", error);
        });
      }
    }
  }, [activeUrl, isLandingPage]);

  useEffect(() => {
    if (!isLandingPage) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseCoords.current = { x: e.clientX, y: e.clientY };
      previewCoords.current = { x: e.clientX, y: e.clientY };
      
      // Update dot position instantly with GPU-accelerated translate3d
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
      
      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        setIsVisible(true);
      }
    };

    const handleMouseLeave = () => {
      isVisibleRef.current = false;
      setIsVisible(false);
    };

    const handleCustomHover = (e: Event) => {
      const customEvent = e as CustomEvent;
      setPreview(customEvent.detail || { url: null, name: null });
    };

    const handleCustomDrag = (e: Event) => {
      const customEvent = e as CustomEvent;
      setDragMode(!!customEvent.detail);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('cursor-hover-project', handleCustomHover);
    window.addEventListener('cursor-drag', handleCustomDrag);

    // Animation frame to render the preview block coordinates with smooth interpolation
    let frameId: number;
    let currentX = -500;
    let currentY = -500;
    
    const updatePreviewPosition = () => {
      const targetX = previewCoords.current.x;
      const targetY = previewCoords.current.y;
      
      if (currentX === -500) {
        currentX = targetX;
        currentY = targetY;
      } else {
        // Linear interpolation factor (0.15 for smooth drag)
        currentX += (targetX - currentX) * 0.15;
        currentY += (targetY - currentY) * 0.15;
      }
      
      if (previewRef.current) {
        previewRef.current.style.left = `${currentX + 220}px`;
        previewRef.current.style.top = `${currentY - 120}px`;
      }
      
      frameId = requestAnimationFrame(updatePreviewPosition);
    };
    
    frameId = requestAnimationFrame(updatePreviewPosition);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('cursor-hover-project', handleCustomHover);
      window.removeEventListener('cursor-drag', handleCustomDrag);
      cancelAnimationFrame(frameId);
    };
  }, [isLandingPage]);

  if (!isLandingPage) return null;
  if (!isVisible) return null;

  return (
    <>
      {/* Custom Pointer (Pixelated Hand or Drag Badge) */}
      <div
        ref={dotRef}
        className="fixed pointer-events-none z-[100] flex items-center justify-center"
        style={{
          left: 0,
          top: 0,
          width: dragMode ? '80px' : '24px',
          height: dragMode ? '80px' : '24px',
          transition: 'width 0.3s ease-out, height 0.3s ease-out',
          transform: `translate3d(${mouseCoords.current.x}px, ${mouseCoords.current.y}px, 0) translate(-50%, -50%)`,
        }}
      >
        {dragMode ? (
          <span 
            className="text-white font-medium text-[11px] uppercase tracking-wider select-none font-sans"
            style={{ pointerEvents: 'none' }}
          >
            DRAG
          </span>
        ) : (
          <img
            src="/monstera-cursor.png"
            alt="Monstera Cursor"
            style={{
              width: '32px',
              height: '32px',
              transform: 'translate(-4px, -4px)', // Align the pointer's hot spot precisely
              pointerEvents: 'none',
            }}
          />
        )}
      </div>

      <div
        ref={previewRef}
        className={`selected__image ${preview.url ? 'active' : ''}`}
        style={{
          left: `${previewCoords.current.x + 220}px`,
          top: `${previewCoords.current.y - 120}px`,
          pointerEvents: 'none',
        }}
      >
        {activeUrl && (
          <>
            {activeUrl.includes('.mp4') ? (
              <video
                ref={hoverVideoRef}
                src={activeUrl}
                autoPlay
                loop
                muted
                playsInline
                className="selected--image"
              />
            ) : (
              <img
                src={activeUrl}
                alt={activeName || ''}
                className="selected--image"
              />
            )}
            {activeName && (
              <div className="selected__image--name">
                {activeName}
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}
