'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/assets/svg/logo.svg';

export default function Navbar() {
  return (
    <nav className="bg-background flex items-center justify-center p-6 sticky top-0 z-50">
      <Link href="/">
        <Image src={Logo} alt="Logo Perintis Timbangan Indonesia" className="w-full h-full" />
      </Link>
    </nav>
  );
}
