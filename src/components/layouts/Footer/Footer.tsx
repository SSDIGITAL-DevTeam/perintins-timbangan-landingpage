"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/svg/logo.svg";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  <footer className="bg-[#262626] p-6 flex items-center justify-between">
    <Link href="/">
      <Image
        src={Logo}
        alt="Logo Perintis Timbangan Indonesia"
        className="w-full h-full"
      />
    </Link>
    <div className="text-right ">
      <p> Copyright &copy {currentYear} PT Perintis Timbangan Indonesia</p>
    </div>
  </footer>;
}
