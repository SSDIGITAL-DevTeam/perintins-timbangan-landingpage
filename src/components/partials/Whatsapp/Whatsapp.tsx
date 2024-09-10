import { JSX } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import WhatsappIcon from '@/assets/svg/asset-whatsapp.svg';

export default function Whatsapp(): JSX.Element {
  return (
    <div className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-50">
      <Link href="https://wa.me/6281212345678" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-green-500 rounded-full w-16 h-16">
        <Image src={WhatsappIcon} alt="Whatsapp Icon" width={30} height={30} />
      </Link>
    </div>
  );
}
