import DialogDiscount from '@/components/partials/Dialog/DialogPromoToko';
import Whatsapp from "@/components/partials/Whatsapp/Whatsapp";
import { generateWaLink } from "@/constant/popup";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://perintistimbanganindonesia.co.id"),
  title: "Perintis Timbangan Rantau Prapat | Landing Page",
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
  const message = "Halo Perintis Timbangan Rantau Prapat, saya ingin mengetahui lebih banyak mengenai diskon ini";
  // const waLink = `https://api.whatsapp.com/send/?phone=6281360612669&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;
const waLink = generateWaLink("Rantau Prapat", 6281360612669);
  return (
    <>
      <Whatsapp
        id="whatsapp-rantau-prapat"
        waLink="https://wa.me/6281360612669?text=Halo%20Perintis%20Timbangan%20Rantau%20Prapat,%20saya%20ingin%20konsultasi%20produk"
      />
      <DialogDiscount id="discount-rantau-prapat" waLink={waLink}/>
      {children}
    </>
  );
}
