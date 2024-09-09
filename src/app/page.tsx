import BrandsMarquee from '@/components/partials/Marquee/BrandMarquee';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="">
      {/* Header */}
      <header className='relative flex flex-col bg-[url("/webp/asset-bg-hero.webp")] bg-cover bg-center bg-no-repeat min-h-[60vh] lg:min-h-screen justify-center items-center overflow-x-hidden'>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/90 to-transparent opacity-90"></div>
        <div className="relative z-2 container flex flex-col justify-center items-center px-20 gap-y-9">
          <div className="flex flex-col text-center gap-y-7">
            <h1 className="text-white font-bold text-7xl">Pusat Timbangan Industri Terpercaya di Indonesia</h1>
            <p className="text-white text-2xl px-24">PT. Perintis Timbangan Indonesia menyediakan timbangan berkualitas tinggi dengan akurasi terjamin untuk mendukung kelancaran bisnis Anda</p>
          </div>
          <Link href="https://www.perintistimbanganindonesia.co.id" className="flex px-10 py-4 bg-primary text-white rounded-full hover:bg-secondary transition-colors duration-300">
            Kunjungi Toko Kami
          </Link>
        </div>
      </header>

      {/* Brand Partners */}
      <section className="py-2">
        <div className="my-8 flex gap-4 overflow-x-auto lg:my-10">
          <BrandsMarquee />
        </div>
      </section>
    </main>
  );
}
