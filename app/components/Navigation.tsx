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
        </div>

        {/* About Link */}
        <div className="menu__links--item menu--about flex flex-col group">
          <Link href="/about" className="menu__link--label menu-link-active">
            Info
          </Link>
        </div>

      </div>
    </div>
  );
}
