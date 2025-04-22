import DialogDiscount from "@/components/partials/Dialog/DialogDiscount";
import Whatsapp from "@/components/partials/Whatsapp/Whatsapp";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://perintistimbanganindonesia.co.id"),
  title: "Perintis Timbangan Medan | Landing Page",
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
  const message = "Halo Perintis Timbangan Medan, saya ingin mengetahui lebih banyak mengenai diskon ini";
  const waLink = `https://api.whatsapp.com/send/?phone=6282166165351&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;

  return (
    <>
      <Whatsapp
        id="whatsapp-medan"
        waLink="https://wa.me/6282166165351?text=Halo%20Perintis%20Timbangan%20Medan,%20saya%20ingin%20konsultasi%20produk"
      />
      <DialogDiscount id="discount-medan" waLink={waLink}/>
      {children}
    </>
  );
}
