'use client';

import { JSX } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function BannerCTA(): JSX.Element {
  const pathname = usePathname();
  const getWhatsappNumber = () => {
    switch (pathname) {
      case '/pekanbaru':
        return '6281263083880';
      case '/aceh':
        return '628116381298';
      case '/rantau-prapat':
        return '6281360612669';
      case '/palembang':
        return '6282132381920';
      default:
        return '6281234567890';
    }
  };

  const handleWhatsAppClick = () => {
    const whatsappNumber = getWhatsappNumber();
    const message = encodeURIComponent(`Halo Saya ingin membeli. Bisakah Anda memberi saya informasi lebih lanjut?`);
    if (typeof window !== 'undefined') {
      window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    }
  };

  return (
    <section className="bg-primary py-10">
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-y-4">
          <h1 className="text-2xl text-white font-bold text-center">Ingin Lebih Banyak Pilihan Timbangan?</h1>
          <p className="text-white text-center font-medium">Hubungi kami sekarang untuk mendapatkan penawaran terbaik dari kami</p>
          <button onClick={handleWhatsAppClick} className="bg-white text-primary font-bold py-4 px-8 rounded-full">
            Hubungi Kami Sekarang
          </button>
        </div>
      </div>
    </section>
  );
}
