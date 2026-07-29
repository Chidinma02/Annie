'use client';

import { useEffect, useState } from 'react';

export default function Preloader() {
  const [count, setCount] = useState(0);
  const [isLoaded, setIsLoaded] = useState(true); // Default to true for SSR, then set to false if needed

  useEffect(() => {
    // Check if the preloader has already run in the current browser session
    const hasLoaded = sessionStorage.getItem('fieldday_preloader_run');
    if (hasLoaded) {
      setIsLoaded(true);
      return;
    }

    setIsLoaded(false);

    let current = 0;
    const duration = 1200; // 1.2 seconds for a fast, responsive load
    const intervalTime = 20;
    const step = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      current += step;
      if (current >= 100) {
        current = 100;
        clearInterval(timer);
        setTimeout(() => {
          setIsLoaded(true);
          sessionStorage.setItem('fieldday_preloader_run', 'true');
        }, 300); // Small pause at 100%
      }
      setCount(Math.floor(current));
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  if (isLoaded) return null;

  return (
    <div
      className="fixed inset-0 w-full h-full bg-[#131313] z-[999] flex flex-col justify-between p-6 md:p-12 transition-transform duration-800 cubic-bezier(0.76, 0, 0.24, 1)"
      style={{
        transform: count === 100 ? 'translateY(-100%)' : 'translateY(0%)',
      }}
    >
      {/* Intro company tagline at top left on mobile, bottom left on desktop */}
      <h2 className="text-white font-tusker text-[30px] md:text-[50px] uppercase tracking-normal leading-[35px] md:leading-[55px] font-light max-w-[280px] md:max-w-[450px]">
        I am a multi disciplinary creative .
      </h2>

      {/* Percentage Count */}
      <div className="flex-1 flex items-end md:justify-center md:items-center">
        <p className="text-accent font-tusker text-[120px] md:text-[180px] leading-none select-none font-light tracking-tighter">
          {count}
        </p>
      </div>

      {/* Loading Label at bottom right */}
      <div className="flex justify-end items-end">
        <h2 className="text-white font-tusker text-[30px] md:text-[50px] uppercase tracking-normal font-light">
          Loading
        </h2>
      </div>
    </div>
  );
}
