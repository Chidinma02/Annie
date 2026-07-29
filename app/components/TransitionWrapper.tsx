'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';

export default function TransitionWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [animating, setAnimating] = useState(false);
  const prevPathnameRef = useRef(pathname);

  useEffect(() => {
    if (pathname !== prevPathnameRef.current) {
      setAnimating(true);

      // Delay changing the visible children until the screen is covered by the slide-up transition
      const switchTimer = setTimeout(() => {
        setDisplayChildren(children);
        prevPathnameRef.current = pathname;
      }, 500);

      // Slide down and finish animating
      const endTimer = setTimeout(() => {
        setAnimating(false);
      }, 1000);

      return () => {
        clearTimeout(switchTimer);
        clearTimeout(endTimer);
      };
    } else {
      setDisplayChildren(children);
    }
  }, [pathname, children]);

  return (
    <>
      <div className="flex-1 flex flex-col">
        {displayChildren}
      </div>

      {/* Main black transition cover */}
      <div
        className="fixed inset-0 w-full h-full bg-[#131313] z-[998] flex items-center justify-center pointer-events-none transition-transform"
        style={{
          transform: animating ? 'translateY(0%)' : 'translateY(100%)',
          transitionDuration: '500ms',
          transitionTimingFunction: 'cubic-bezier(0.76, 0, 0.24, 1)',
        }}
      >
        <span
          className="text-white text-[5rem] lg:text-[7.5rem] tracking-normal lowercase normal-case transition-transform inline-flex items-baseline"
          style={{
            fontFamily: "'Bello-Pro', cursive",
            transform: animating ? 'scale(1)' : 'scale(0.8)',
            transition: 'transform 500ms ease',
          }}
        >
          <span className="text-accent">a</span>
          <span className="inline-block loading-wave-text">niedoabasi</span>
        </span>
      </div>
    </>
  );
}
