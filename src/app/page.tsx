import BrandsMarquee from '@/components/partials/Marquee/BrandMarquee';
import Image from 'next/image';
import Link from 'next/link';

import AssetTimbanganLab from '@/assets/webp/asset-timbangan.webp';
import AssetTimbanganSNI from '@/assets/webp/asset-timbangan-sni.webp';
import { AccordionDemo } from '@/components/partials/Accordion/Accordion';

export default function Home() {
  return (
    <main>
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
      <section className="py-2 ">
        <div className="my-8 flex gap-4 overflow-x-auto lg:my-10">
          <BrandsMarquee />
        </div>
      </section>

      {/* Timbangan */}
      <section className="flex flex-col container py-10 overflow-x-hidden">
        <div className="bg-tertiary rounded-xl flex flex-col lg:flex-row justify-between shadow-xl">
          <div className="flex flex-col gap-y-5 p-6 w-1/2 text-justify">
            <h1 className="font-bold text-xl">Timbangan Laboratorium Berkualitas untuk Akurasi Maksimal</h1>
            <p className="text-lg">
              Apakah Anda mencari timbangan laboratorium dengan presisi tinggi dan performa andal? PTI hadir untuk memenuhi kebutuhan Anda! Kami menyediakan timbangan laboratorium terbaik dengan teknologi terkini, memastikan hasil
              pengukuran yang akurat dan konsisten setiap saat.
            </p>
          </div>
          <div className="p-9 flex items-center justify-center bg-background rounded-xl w-[42%] drop-shadow-lg">
            <Image src={AssetTimbanganLab} alt="Asset Timbangan Lab" className="w-[300px]" />
          </div>
        </div>
      </section>

      {/* Pilih SNI */}
      <section className="flex flex-col container py-[190px] px-[3rem] overflow-x-hidden">
        <h1 className="font-bold text-center text-7xl mb-16">
          Pilihlah Produk <span className="text-secondary">Ber-SNI</span>
        </h1>
        <div className="flex flex-col lg:flex-row justify-between py-[100px] items-center">
          <Image src={AssetTimbanganSNI} alt="Asset Timbangan SNI" className="w-[540px]" />
          <div className="w-2/5 text-right">
            <AccordionDemo />
          </div>
        </div>
      </section>

      {/* Kenapa memilih pti */}
      
    </main>
  );
}
