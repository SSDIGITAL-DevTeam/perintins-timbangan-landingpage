import Whatsapp from "@/components/partials/Whatsapp/Whatsapp";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://perintistimbanganindonesia.co.id"),
  title: "Perintis Timbangan Palembang | Landing Page",
  description: "perintis timbangan indonesia",
  keywords: ["timbangan, timbangan indonesia"],
  alternates: {
    canonical: "/",
  },
  //   openGraph: {
  //     images: "/webp/logo.webp",
  //   },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Whatsapp waLink="https://wa.me/6282132381920?text=Halo%20Perintis%20Timbangan%20Palembang,%20saya%20ingin%20konsultasi%20produk" />
      {children}
    </>
  );
}
