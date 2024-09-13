"use client";

import { JSX } from "react";
import Link from "next/link";
import Image from "next/image";
import LogoWhite from "@/assets/svg/logo-white.svg";

export default function FooterUI(): JSX.Element {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#262626] py-6 px-16 flex flex-col lg:flex-row items-center justify-between gap-y-7 lg:gap-y-0">
      <Link href="/">
        <Image
          src={LogoWhite}
          alt="Logo Perintis Timbangan Indonesia"
          className="w-full h-full"
        />
      </Link>
      <div className="text-center lg:text-right text-sm md:text-base whitespace-nowrap">
        <p className="text-white">
          {" "}
          Copyright © {currentYear} PT Perintis Timbangan Indonesia
        </p>
      </div>
    </footer>
  );
}
