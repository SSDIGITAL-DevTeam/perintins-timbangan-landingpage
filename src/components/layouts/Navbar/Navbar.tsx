'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/assets/svg/logo.svg';
import { useMediaQuery } from 'usehooks-ts';

const Navbar: React.FC = () => {
  const [showButton, setShowButton] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const isMobile = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (currentScrollPos > 500) {
        setShowButton(true);
        setIsScrolled(true);
      } else {
        setShowButton(false);
        setIsScrolled(false);
      }

      setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <nav className={`bg-background p-4 md:p-4 sticky top-0 z-50 shadow-sm transition-transform duration-300 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className={`flex items-center transition-all duration-300 ease-in-out ${isScrolled && isMobile ? 'justify-between' : 'justify-center'}`}>
        <Link href="/" className={`transition-all duration-300 ease-in-out ${isScrolled && isMobile ? 'mr-auto' : 'mx-auto'}`}>
          <Image src={Logo} alt="Logo Perintis Timbangan Indonesia" className="w-28 md:w-32 object-cover" />
        </Link>
        {isMobile && (
          <div className={`flex md:hidden fixed right-4 top-4 transition-all duration-300 ease-in-out items-center ${showButton ? 'translate-y-4 opacity-100' : '-translate-y-full opacity-0'}`}>
            <Link href="https://www.perintistimbanganindonesia.co.id/" className="px-6 py-3 bg-primary text-white font-semibold hover:bg-secondary transition-colors duration-300 rounded-full">
              Kunjungi Website Kami
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
