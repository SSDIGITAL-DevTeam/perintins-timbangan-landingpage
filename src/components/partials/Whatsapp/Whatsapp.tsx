import { JSX } from "react";
import Link from "next/link";
import Image from "next/image";
import WhatsappIcon from "@/assets/svg/asset-whatsapp.svg";

export default function Whatsapp({
  waLink,
  id,
}: {
  waLink: string;
  id: string;
}): JSX.Element {
  return (
    <div className="fixed bottom-6 right-4 md:bottom-8 md:right-8 z-50">
      <Link
        id={id}
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-green-500 rounded-full py-2 px-4"
      >
        <Image src={WhatsappIcon} alt="Whatsapp Icon" width={20} height={20} />
        <span className="text-white font-semibold text-sm">Hubungi Kami</span>
      </Link>
    </div>
  );
}
