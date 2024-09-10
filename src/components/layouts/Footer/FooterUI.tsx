'use client';

import { JSX } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LogoWhite from '@/assets/svg/logo-white.svg';

export default function FooterUI(): JSX.Element {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#262626] py-6 px-16 flex items-center justify-between">
      <Link href="/">
        <Image src={LogoWhite} alt="Logo Perintis Timbangan Indonesia" className="w-full h-full" />
      </Link>
      <div className="text-right w-[20%]">
        <p className="text-white"> Copyright © {currentYear} PT Perintis Timbangan Indonesia Developed by OCTOBEES</p>
      </div>
    </footer>
  );
}
