'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function TransitionWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [animating, setAnimating] = useState(false);

  // Intercept all local anchor link clicks to play the slide-up cover animation
  // BEFORE the page navigates.
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      // Find if the clicked element is an anchor tag or inside one
      let target = e.target as HTMLElement | null;
      while (target && target.tagName !== 'A') {
        target = target.parentElement;
      }

      if (target && target.tagName === 'A') {
        const href = target.getAttribute('href');
        
        // Check if it's a local link and not an external one or a hash link
        if (href && href.startsWith('/') && !href.startsWith('//') && !target.getAttribute('target')) {
          // Don't intercept if it's a command/control click (open in new tab)
          if (e.metaKey || e.ctrlKey || e.shiftKey) return;

          e.preventDefault();
          e.stopPropagation();

          // Start the slide-up transition animation
          setAnimating(true);

          // Wait for the cover to slide up (500ms) before navigating
          setTimeout(() => {
            router.push(href);
          }, 500);
        }
      }
    };

    window.addEventListener('click', handleLinkClick, { capture: true });
    return () => window.removeEventListener('click', handleLinkClick, { capture: true });
  }, [router]);

  // When the route pathname updates (navigation completes), slide the cover down
  useEffect(() => {
    // Pause for a moment to let the new page hydrate/render under the cover
    const timer = setTimeout(() => {
      setAnimating(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      <div className="flex-1 flex flex-col">
        {children}
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
