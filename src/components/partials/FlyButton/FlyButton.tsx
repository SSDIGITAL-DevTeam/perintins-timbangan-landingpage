'use client';

import { JSX, useState, useEffect } from 'react';
import Link from 'next/link';

export default function FlyButton(): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-2 left-0 right-0 flex justify-center items-center p-4 transition-transform duration-300 transform translate-y-0 animate-slide-up z-50">
          <div className="bg-white rounded-full shadow-lg overflow-hidden px-4 py-3">
            <Link href="https://www.perintistimbanganindonesia.co.id" className="block px-6 py-3 bg-primary text-white font-semibold hover:bg-secondary transition-colors duration-300 rounded-full">
              Kunjungi Toko Kami
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
