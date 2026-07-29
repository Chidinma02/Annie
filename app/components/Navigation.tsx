'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Route-based menu visibility guidelines
  const isWorkDefaultVisible = pathname === '/' || pathname.startsWith('/work') || pathname.startsWith('/project');
  const isAboutDefaultVisible = pathname === '/' || pathname.startsWith('/about');

  return (
    <div className={`l__menu ${scrolled ? 'scrolled' : ''}`}>
      {/* Logo */}
      <Link
        href="/"
        className="menu__logo text-[2.5rem] lg:text-[3.5rem] tracking-normal lowercase no-underline flex items-center normal-case hover:opacity-85 transition-opacity"
        style={{
          fontFamily: "'Bello-Pro', cursive",
        }}
      >
        aniedoabasi
      </Link>

      {/* Navigation Links */}
      <div className="menu__links">

        {/* Work Link */}
        <div className="menu__links--item menu--work flex flex-col group">
          <Link href="/work" className="menu__link--label menu-link-active">
            Work
          </Link>
          <div
            className={`menu__links--sub hidden lg:flex lg:flex-col gap-2 transition-opacity duration-300 ${isWorkDefaultVisible
              ? 'opacity-100 pointer-events-auto'
              : 'opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto'
              }`}
          >
            {/* <Link href="/work?category=sound-design" className="sublinks--item menu-link-active">
              Sound Design
            </Link>
            <Link href="/work?category=music" className="sublinks--item menu-link-active">
              Music
            </Link>
            <Link href="/work?category=mix" className="sublinks--item menu-link-active">
              Mix
            </Link> */}
          </div>
        </div>

        {/* About Link */}
        <div className="menu__links--item menu--about flex flex-col group">
          <Link href="/about" className="menu__link--label menu-link-active">
            Info
          </Link>
          {/* <p
            className={`menu__links--sub hidden lg:block transition-opacity duration-300 select-none ${isAboutDefaultVisible
              ? 'opacity-100 pointer-events-auto'
              : 'opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto'
              }`}
          >
            We are a creative sound and music company
          </p> */}
        </div>

      </div>
    </div>
  );
}
