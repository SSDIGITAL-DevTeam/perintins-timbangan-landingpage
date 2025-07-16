import DialogDiscount from '@/components/partials/Dialog/DialogToko';
import Whatsapp from '@/components/partials/Whatsapp/Whatsapp';
import { generateWaLink } from '@/constant/popup';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://perintistimbanganindonesia.co.id'),
  title: 'Perintis Timbangan Lampung | Landing Page',
  description: 'perintis timbangan indonesia',
  keywords: ['timbangan, timbangan indonesia'],
  alternates: {
    canonical: '/',
  },
  //   openGraph: {
  //     images: "/webp/logo.webp",
  //   },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const message = "Halo Perintis Timbangan Palembang, saya ingin mengetahui lebih banyak mengenai diskon ini";
  // const waLink = `https://api.whatsapp.com/send/?phone=6282132381920&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;
const waLink = generateWaLink("Palembang", 6282132381920);
  return (
    <>
      <Whatsapp id="whatsapp-palembang" waLink="https://wa.me/6282132381920?text=Halo%20Perintis%20Timbangan%20Palembang,%20saya%20ingin%20konsultasi%20produk" />
      <DialogDiscount id="discount-palembang" waLink={waLink} />
      {children}
    </>
  );
}
