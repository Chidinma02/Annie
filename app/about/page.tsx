'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AboutPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="min-h-screen bg-[#edece8] text-[#131313] select-none w-full relative flex flex-col justify-start">

      {/* 3-Column Info Page Content */}
      <div
        className="w-full grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start"
        style={{
          paddingTop: isMobile ? '12rem' : '20rem',
          paddingBottom: '8rem',
          paddingLeft: isMobile ? '2.5rem' : '8rem',
          paddingRight: isMobile ? '2.5rem' : '8rem'
        }}
      >

        {/* Left Column - Biography */}
        <div className="flex flex-col gap-6 font-sans text-[1.45rem] leading-[1.6] text-[#131313]">
          <p className="font-bold">Hi, I'm Aniedoabasi.</p>

          <p>
            Born and raised in Nigeria, I moved to pursue my passion in creative sound arts, foley, and custom music production. My artistic journey began with deep listening, recording organic sounds, and designing immersive soundscapes.
          </p>

          <p>
            Over time, this passion expanded, drawing me into adjacent creative fields like original music supervisions, commercial sound design, stereo mixing, and voice ADR. What started as an exploration of raw sonic storytelling grew into a holistic practice of creating across multiple disciplines, each enriching the other.
          </p>

          <p>
            Over the past nine years, my studio practice has been a catalyst for my creative output, shaping me into the multidisciplinary artist and sound engineer today.
          </p>
        </div>

        {/* Center Column - Services & Notable Clients */}
        <div className="flex flex-col gap-10 font-sans text-[1.45rem] leading-[1.6] text-[#131313]">

          {/* Services */}
          <div className="flex flex-col gap-3">
            <h4 className="font-bold">Services:</h4>
            <ul className="flex flex-col gap-1.5 list-none pl-0">
              <li>• Creative Sound Design & Foley</li>
              <li>• Original Music & Sonic Branding</li>
              <li>• Stereo & Surround Mixing for TV & Film</li>
              <li>• Voice Casting & ADR Recording</li>
              <li>• Music Supervision & Licensing</li>
            </ul>
          </div>

          {/* Notable Clients */}
          <div className="flex flex-col gap-3">
            <h4 className="font-bold">Notable Clients:</h4>
            <p className="leading-[1.7] tracking-tight">
              Voss Water // GTFW // Hingees // Tomi Juice // Juicyway // Kronicles // Peperminkk // ELC // Dixtrict 26 // Caveat Emptor // Seabreeze
            </p>
            {/* <p className="leading-[1.7] tracking-tight">
              Nike // TaylorMade // YETI // Voss Water // GTFW // Hingees // Tomi Juice // Juicyway // Kronicles // Peperminkk // ELC // Dixtrict 26 // Caveat Emptor // Seabreeze // Apple Music // Geico // Guess USA // Netflix // Arista Records // RCA Records
            </p> */}
          </div>

        </div>

        {/* Right Column - B&W Portrait & Bookings */}
        <div className="flex flex-col items-center gap-6">
          <div className="w-full max-w-[340px] border border-black overflow-hidden bg-white shadow-sm">
            <img
              src="/Images/info_portrait.png"
              alt="Aniedoabasi Portrait"
              className="w-full h-auto block grayscale"
            />
          </div>
          <div className="text-center font-sans text-[1.45rem] leading-[1.6] text-[#131313]">
            <p className="font-bold">Bookings and Inquiries:</p>
            <a
              href="mailto:hello@aniedoabasi.com"
              className="hover:opacity-75 transition-opacity underline decoration-black/20"
            >
              hello@aniedoabasi.com
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
