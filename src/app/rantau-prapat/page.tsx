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
import AssetSertifikat1 from '@/assets/webp/asset-sertifikat-1.webp';
import AssetSertifikat2 from '@/assets/webp/asset-sertifikat-2.webp';
import AssetSertifikat3 from '@/assets/webp/asset-sertifikat-3.webp';
import AssetShopee from '@/assets/svg/asset-shopee.svg';
import AssetWhatsapp from '@/assets/svg/asset-whatsapp.svg';
import { AccordionDemo } from '@/components/partials/Accordion/Accordion';
import { CarouselTesti } from '@/components/partials/CarouselTesti/CarouselTesti';
import Products from '@/components/partials/Product/Products';
import PelayananSection from '@/components/partials/PelayananSection/PelayananSection';
import FeatureList from '@/components/partials/FeatureList/FeatureList';
import { DealerGallery } from '@/components/Gallery/DealerGallery';

export default function Home() {
  return (
    <main>
      {/* Header */}
      <header className='relative flex flex-col bg-[url("/webp/asset-bg-hero.webp")] bg-cover bg-center bg-no-repeat min-h-[60vh] lg:min-h-screen justify-center items-center overflow-x-hidden'>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/90 to-transparent opacity-90"></div>
        <div className="relative z-2 container flex flex-col justify-center items-center lg:px-14 xl:px-20 gap-y-9">
          <div className="flex flex-col text-center gap-y-7">
            <h1 className="text-white font-bold text-3xl lg:text-5xl xl:text-7xl">Pusat Timbangan Industri Terpercaya di Indonesia</h1>
            <p className="text-white text-lg lg:xl xl:text-2xl lg:px-24">PT. Perintis Timbangan Indonesia menyediakan timbangan berkualitas tinggi dengan akurasi terjamin untuk mendukung kelancaran bisnis Anda</p>
          </div>
          <Link href="https://www.perintistimbanganindonesia.co.id" className="flex px-8 py-3 lg:px-10 lg:py-4 bg-primary text-white rounded-full hover:bg-secondary transition-colors duration-300">
            Kunjungi Website Kami
          </Link>
        </div>
      </header>

      {/* Brand Partners */}
      <section className="py-2 flex flex-col gap-y-6">
        <h1 className="text-xl xl:text-3xl font-bold text-center mt-9 capitalize">merk ternama kualitas terjamin</h1>
        <div className="my-8 flex gap-4 overflow-x-auto lg:my-10">
          <BrandsMarquee />
        </div>
      </section>

      {/* Product */}
      <Products />

      {/* Pilih SNI */}
      <section className="flex flex-col container py-[50px] lg:py-[100px] px-[3rem] overflow-x-hidden">
        <h1 className="font-bold text-center text-3xl lg:text-4xl xl:text-6xl mb-16">
          Pilihlah Produk <span className="text-secondary">Ber-SNI</span>
        </h1>
        <div className="flex flex-col lg:flex-row justify-between py-[100px] items-center">
          <Image src={AssetTimbanganSNI} alt="Asset Timbangan SNI" className="w-[540px]" />
          <div className="w-full lg:w-2/5 md:text-right">
            <FeatureList />
          </div>
        </div>
      </section>

      {/* Kenapa memilih pti */}
      <section className="flex flex-col py-[50px] overflow-x-hidden">
        <h1 className="font-bold text-center text-3xl lg:text-4xl xl:text-6xl mb-20">Kenapa Memilih Perintis Timbangan Indonesia</h1>
        <div className="flex flex-col lg:flex-row justify-between gap-x-11 pr-8">
          <div className="flex flex-col gap-y-12 w-full lg:w-2/3">
            <div className="flex gap-x-8 justify-center items-center w-full bg-secondary rounded-r-full p-8 md:p-11">
              <Image src={AssetGearKey} alt="Asset Gear Key" className="w-[50px] lg:w-[70px]" />
              <div className="flex flex-col gap-y-5 w-2/3">
                <h1 className="text-xl md:text-2xl text-white font-semibold">Perbaikan & Service</h1>
                <p className="text-base md:text-lg text-white">Kami menyediakan layanan perbaikan dan pengecekan rutin untuk memastikan timbangan Anda selalu dalam kondisi optimal.</p>
              </div>
            </div>
            <div className="flex gap-x-8 justify-center items-center w-full bg-secondary rounded-r-full p-8 md:p-11">
              <Image src={AssetGear} alt="Asset Gear Key" className="w-[50px] lg:w-[70px]" />
              <div className="flex flex-col gap-y-5 w-2/3">
                <h1 className="text-xl md:text-2xl text-white font-semibold">Kalibrasi</h1>
                <p className="text-base md:text-lg text-white">Kami menyediakan layanan kalibrasi ulang untuk memastikan timbangan Anda selalu beroperasi dengan akurasi yang optimal. </p>
              </div>
            </div>
            <div className="flex gap-x-8 justify-center items-center w-full bg-secondary rounded-r-full p-8 md:p-11">
              <Image src={AssetComputer} alt="Asset Gear Key" className="w-[50px] lg:w-[70px]" />
              <div className="flex flex-col gap-y-5 w-2/3">
                <h1 className="text-xl md:text-2xl text-white font-semibold">Program</h1>
                <p className="text-base md:text-lg text-white">Kami menawarkan software yang dirancang untuk mempercepat proses data dengan bantuan peralatan timbangan. </p>
              </div>
            </div>
            <div className="flex gap-x-8 justify-center items-center w-full bg-secondary rounded-r-full p-8 md:p-11">
              <Image src={AssetShield} alt="Asset Gear Key" className="w-[50px] lg:w-[70px]" />
              <div className="flex flex-col gap-y-5 w-2/3">
                <h1 className="text-xl md:text-2xl text-white font-semibold">Garansi</h1>
                <p className="text-base md:text-lg text-white">Gunakan suku cadang asli untuk menjaga performa dan usia produk Anda. Kami menjamin ketersediaan suku cadang produk.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pelayanan Kami */}
      <PelayananSection />

      {/* sertifikat */}
      <section className="flex flex-col py-[80px] lg:py-[120px] px-[2rem] overflow-x-hidden">
        <div className="flex flex-col lg:flex-row gap-x-0 gap-y-9 lg:gap-y-0 lg:gap-x-10 bg-tertiary rounded-xl p-8 md:p-11 container shadow-md">
          <div className="flex flex-col gap-y-6 w-full lg:w-[40%]">
            <h1 className="text-2xl font-bold">Sertifikasi Timbangan PTI</h1>
            <div className="flex flex-col gap-y-4 text-justify lg:text-left">
              <p className="text-lg">
                PTI menyediakan timbangan berkualitas tinggi yang telah teruji dan tersertifikasi sesuai standar. Dengan keakuratan yang tak tertandingi, setiap produk PTI dirancang untuk memenuhi kebutuhan industri Anda, mulai dari skala
                kecil hingga besar.
              </p>
              <p className="text-lg">Sertifikasi resmi yang kami miliki menjamin setiap timbangan lulus uji kualitas dan keandalan, memberikan Anda hasil yang konsisten dan presisi.</p>
            </div>
          </div>
          <Image src={AssetSertifikat} alt="Asset Sertifikat" className="w-full lg:w-[60%] hidden lg:block" />
          <div className="lg:hidden flex flex-col gap-y-4">
            <Image src={AssetSertifikat1} alt="Asset Sertifikat" className="w-full" />
            <Image src={AssetSertifikat2} alt="Asset Sertifikat" className="w-full" />
            <Image src={AssetSertifikat3} alt="Asset Sertifikat" className="w-full" />
          </div>
        </div>
      </section>

      {/* Galeri */}
      <section className="flex flex-col py-[50px] px-[2rem] overflow-x-hidden">
        <div className="flex flex-col gap-x-10 bg-tertiary rounded-xl p-5 lg:p-10 container text-center shadow-md">
          <h1 className="text-xl lg:text-3xl font-bold">Galeri</h1>
          <div className="flex flex-col items-center justify-center">
            <DealerGallery />
          </div>
        </div>
      </section>

      {/* Carousel Testi */}
      <section className="flex flex-col py-[50px] px-[2rem] overflow-x-hidden">
        <div className="flex flex-col gap-x-10 bg-tertiary rounded-xl p-10 container text-center shadow-md">
          <h1 className="text-xl lg:text-3xl font-bold">Apa yang Dikatakan para Pembeli ?</h1>
          <div className="flex items-center justify-center md:p-11">
            <CarouselTesti />
          </div>
        </div>
      </section>

      {/* cta */}
      <section className="flex flex-col py-[50px] px-[2rem] overflow-x-hidden">
        <h1 className="text-xl lg:text-3xl font-bold text-center mb-8">Hubungi Kami dan Dapatkan Penawaran Terbaik</h1>
        <div className="flex flex-col md:flex-row gap-y-10 gap-x-0 lg:gap-y-0 md:gap-x-10 lg:gap-x-20 container justify-center items-center">
          <Link href="tel:6281360612669" target="_blank" className="bg-primary px-12 py-5 text-white rounded-full hover:bg-secondary transition-colors duration-300">
            +6281360612669
          </Link>
          <Link id="whatsapp-rantau-prapat" href="https://wa.me/6281360612669?text=Halo%20Perintis%20Timbangan%20Rantau%20Prapat,%20saya%20ingin%20konsultasi%20produk" target="_blank">
            <Image src={AssetWhatsapp} alt="Asset Whatsapp" className="w-[50px] md:w-[70px]" />
          </Link>
          <Link href="https://shopee.co.id/dtud88r47h?uls_trackid=50i2ifqn01pi&utm_content=2i2iBrshTGi31Uw3KbZzpUPWBo1h" target="_blank">
            <Image src={AssetShopee} alt="Asset Shopee" className="w-[50px] md:w-[70px]" />
          </Link>
          {/* <Link
            href="https://www.tokopedia.com/pusattimbanganpekanbaru?source=universe&st=product"
            target="_blank"
          >
            <Image
              src={AssetTokopedia}
              alt="Asset Tokopedia"
              className="w-[128px] lg:w-[228.75px] h-[50px]"
            />
          </Link> */}
        </div>
      </section>

      {/* Gmaps */}
      <section className="flex flex-col py-10 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
        <div className="w-full max-w-7xl mx-auto">
          <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.137018114282!2d99.82609267567736!3d2.1006721587011556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x302da1f2702dec83%3A0x58f810df80bb7c15!2sPUSAT%20TIMBANGAN%20RANTAU%20PRAPAT!5e0!3m2!1sid!2sid!4v1727851390457!5m2!1sid!2sid"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
