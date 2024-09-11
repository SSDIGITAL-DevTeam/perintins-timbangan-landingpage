'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/assets/svg/logo.svg';

const Navbar: React.FC = () => {
  const [showButton, setShowButton] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 500) {
        setShowButton(true);
        setIsScrolled(true);
      } else {
        setShowButton(false);
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="bg-background p-4 md:p-6 sticky top-0 z-50 shadow-sm">
      <div
        className={`
        flex items-center transition-all duration-300 ease-in-out
        ${isScrolled ? 'justify-between' : 'justify-center'}
      `}
      >
        <Link
          href="/"
          className={`
          transition-all duration-300 ease-in-out
          ${isScrolled ? 'mr-auto' : 'mx-auto'}
        `}
        >
          <Image src={Logo} alt="Logo Perintis Timbangan Indonesia" className="w-full h-full" />
        </Link>
        <div
          className={`
          block md:hidden 
          fixed right-4 top-4
          transition-all duration-300 ease-in-out
          ${showButton ? 'translate-y-4 opacity-100' : '-translate-y-full opacity-0'}
        `}
        >
          <Link href="/kunjungi-toko" className="px-6 py-3 bg-primary text-white font-semibold hover:bg-secondary transition-colors duration-300 rounded-full">
            Kunjungi Toko Kami
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
