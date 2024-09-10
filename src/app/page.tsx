import BrandsMarquee from '@/components/partials/Marquee/BrandMarquee';
import Image from 'next/image';
import Link from 'next/link';

import AssetTimbanganLab from '@/assets/webp/asset-timbangan.webp';
import AssetTimbanganSNI from '@/assets/webp/asset-timbangan-sni.webp';
import AssetGearKey from '@/assets/svg/asset-gear-key.svg';
import AssetGear from '@/assets/svg/asset-gear.svg';
import AssetComputer from '@/assets/svg/asset-computer.svg';
import AssetShield from '@/assets/svg/asset-shield.svg';
import AssetTimbanganPegas from '@/assets/webp/asset-timbangan-pegas.webp';
import AssetSertifikat from '@/assets/webp/asset-sertifikat.webp';
import AssetTokopedia from '@/assets/svg/asset-tokopedia.svg';
import AssetShopee from '@/assets/svg/asset-shopee.svg';
import AssetWhatsapp from '@/assets/svg/asset-whatsapp.svg';
import { AccordionDemo } from '@/components/partials/Accordion/Accordion';
import { CarouselTesti } from '@/components/partials/CarouselTesti/CarouselTesti';

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
      <section className="flex flex-col container py-[100px] px-[3rem] overflow-x-hidden">
        <h1 className="font-bold text-center text-6xl mb-16">
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
      <section className="flex flex-col py-[50px] overflow-x-hidden">
        <h1 className="font-bold text-center text-6xl mb-20">Kenapa Memilih Perintis Timbangan Indonesia</h1>
        <div className="flex justify-between gap-x-11">
          <div className="flex flex-col gap-y-12 w-1/2">
            <div className="flex gap-x-8 justify-center items-center w-full bg-secondary rounded-r-full p-11">
              <Image src={AssetGearKey} alt="Asset Gear Key" className="w-[70px]" />
              <div className="flex flex-col gap-y-5 w-2/3">
                <h1 className="text-2xl text-white font-semibold">Perbaikan & Service</h1>
                <p className="text-lg text-white">Kami menyediakan layanan perbaikan dan pengecekan rutin untuk memastikan timbangan Anda selalu dalam kondisi optimal.</p>
              </div>
            </div>
            <div className="flex gap-x-8 justify-center items-center w-full bg-secondary rounded-r-full p-12">
              <Image src={AssetGear} alt="Asset Gear Key" className="w-[70px]" />
              <div className="flex flex-col gap-y-5 w-2/3">
                <h1 className="text-2xl text-white font-semibold">Kalibrasi</h1>
                <p className="text-lg text-white">Kami menyediakan layanan kalibrasi ulang untuk memastikan timbangan Anda selalu beroperasi dengan akurasi yang optimal. </p>
              </div>
            </div>
            <div className="flex gap-x-8 justify-center items-center w-full bg-secondary rounded-r-full p-12">
              <Image src={AssetComputer} alt="Asset Gear Key" className="w-[70px]" />
              <div className="flex flex-col gap-y-5 w-2/3">
                <h1 className="text-2xl text-white font-semibold">Program</h1>
                <p className="text-lg text-white">Kami menawarkan software yang dirancang untuk mempercepat proses data dengan bantuan peralatan timbangan. </p>
              </div>
            </div>
            <div className="flex gap-x-8 justify-center items-center w-full bg-secondary rounded-r-full p-12">
              <Image src={AssetShield} alt="Asset Gear Key" className="w-[70px]" />
              <div className="flex flex-col gap-y-5 w-2/3">
                <h1 className="text-2xl text-white font-semibold">Garansi</h1>
                <p className="text-lg text-white">Gunakan suku cadang asli untuk menjaga performa dan usia produk Anda. Kami menjamin ketersediaan suku cadang produk.</p>
              </div>
            </div>
          </div>
          <div className="pr-[18rem] items-center justify-center">
            <Image src={AssetTimbanganPegas} alt="Asset Timbangan Pegas" className="w-[470px] h-full" />
          </div>
        </div>
      </section>

      {/* sertifikat */}
      <section className="flex flex-col py-[120px] px-[2rem] overflow-x-hidden">
        <div className="flex flex-row gap-x-10 bg-tertiary rounded-xl p-12 container shadow-md">
          <div className="flex flex-col gap-y-6 w-[40%]">
            <h1 className="text-2xl font-bold">Sertifikat</h1>
            <div className="flex flex-col gap-y-4">
              <p className="text-lg">
                PTI menyediakan timbangan berkualitas tinggi yang telah teruji dan tersertifikasi sesuai standar. Dengan keakuratan yang tak tertandingi, setiap produk PTI dirancang untuk memenuhi kebutuhan industri Anda, mulai dari skala
                kecil hingga besar.
              </p>
              <p className="text-lg">Sertifikasi resmi yang kami miliki menjamin setiap timbangan lulus uji kualitas dan keandalan, memberikan Anda hasil yang konsisten dan presisi.</p>
            </div>
          </div>
          <Image src={AssetSertifikat} alt="Asset Sertifikat" className="w-[60%]" />
        </div>
      </section>

      {/* Carousel Testi */}
      <section className="flex flex-col py-[50px] px-[2rem] overflow-x-hidden">
        <div className="flex flex-col gap-x-10 bg-tertiary rounded-xl p-10 container text-center shadow-md">
          <h1 className="text-3xl font-bold">Apa yang Dikatakan para Pembeli ?</h1>
          <div className="flex items-center justify-center p-12">
            <CarouselTesti />
          </div>
        </div>
      </section>

      {/* cta */}
      <section className="flex flex-col py-[50px] px-[2rem] overflow-x-hidden">
        <div className="flex flex-row gap-x-20 container justify-center items-center">
          <Link href="https://www.perintistimbanganindonesia.co.id/" className="bg-primary px-12 py-5 text-white rounded-full hover:bg-secondary transition-colors duration-300">
            Kunjungi Toko Kami
          </Link>
          <Link href="https://wa.me/6281211111111">
            <Image src={AssetWhatsapp} alt="Asset Whatsapp" className="w-[70px]" />
          </Link>
          <Link href="https://shopee.co.id/perintistimbanganindonesia">
            <Image src={AssetShopee} alt="Asset Shopee" className="w-[70px]" />
          </Link>
          <Link href="https://www.tokopedia.com/perintistimbanganindonesia">
            <Image src={AssetTokopedia} alt="Asset Tokopedia" className="w-[228.75px] h-[50px]" />
          </Link>
        </div>
      </section>

      {/* Gmaps */}
      <section className="flex flex-col py-[50px] px-[2rem] overflow-x-hidden">
        <div className="flex flex-col rounded-xl p-10 container justify-center items-center w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3981.930176217754!2d98.6725369!3d3.603463!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303131ebd98c1b81%3A0x6fb6535e7bfde585!2sPUSAT%20TIMBANGAN%20DIGITAL%20%26%20MANUAL%20-%20Eceran%20%26%20Grosir%20-%20SCALEINDO%20(PT.PERINTIS%20TIMBANGAN%20INDONESIA)!5e0!3m2!1sid!2sid!4v1725911386981!5m2!1sid!2sid"
            width="1284"
            height="658"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </main>
  );
}
