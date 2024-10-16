'use client';

import * as React from 'react';
import { usePathname } from 'next/navigation';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Star } from 'lucide-react';

const testimonialData = {
  palembang: {
    googleRating: 5.0,
    totalReviews: 116,
    testimonials: [
      {
        text: 'Toko timbangan terlengkap di kota palembang..Lengkap skl toko nya semua timbangan apa pun ada..hrg murah kwalitas bgs dan terjamin skl..yg jual rama dan baek..',
        name: 'Furie Jhantoe',
      },
      {
        text: 'Smua jenis timbangan lengkap fasilitas terjamin garansi staf2 ok ramah cepat pokoknya the best. Sukses terusss',
        name: 'Dedek Amellia',
      },
      {
        text: 'Pelayanan bagus,harga terjangkau😍😍😍',
        name: 'Diana Angelia',
      },
      {
        text: 'Sangat memuaskan produk nya, di samping itu terjamin dengan fasilitas garansi nya, pelayanan yang ramah tamah, cepat dan agresif',
        name: 'Jufri Kwok',
      },
      {
        text: 'Pelayanan the best. Barang ok. Garansi seumur hidup. Dapat diskon. Dapat bonus. Thank you seller. Sukses terus.',
        name: 'Galuh',
      },
      {
        text: 'Mantap sekali. Timbangan terlengkap di kota Palembang👍. Pelayanannya bagus dan ramah, penjual tidak sombong 🙏',
        name: 'Afrieda Gunawaty ',
      },
    ],
  },
  pekanbaru: {
    googleRating: 4.9,
    totalReviews: 81,
    testimonials: [
      {
        text: 'Kualitas timbangan duduk bagus. Harga murah. Saya beli banyak',
        name: 'fefrizal FERRY',
      },
      {
        text: 'Barang bagus dan pelayanan ramah, dapat discount juga 🤭👍👍👍',
        name: 'Yogi Pranata',
      },
      {
        text: 'Timbangan mantap dan pencarian mudah di pusat timbangan Pekanbaru Riau.',
        name: 'Sri Nuryani',
      },
      {
        text: 'Barang bagus, lengkap dan memuaskan. Pelayanan ramah, rekomendlah pokoknya',
        name: 'Daniel Tri Setiawan',
      },
      {
        text: 'Alhamdulillah sudah jadi langganan tetap di pusat timbangan indonesia, Barang Bergaransi dan Pelyanannya baik',
        name: 'admin saprodi',
      },
    ],
  },
  aceh: {
    googleRating: 5.0,
    totalReviews: 24,
    testimonials: [
      {
        text: 'Untuk kualitas barang oke, service bagus dan garansi terjamin. Banyak jenis segala timbangan yang di jual apalagi untuk harga sangat murah dan terjangkau. Cocok untuk di rekomendasikan 👍',
        name: 'Rheza Ananda',
      },
      {
        text: 'Waktu beli timbangan disitu harga murah2, tempat bersih dan karyawan nya super ramah mau menjelaskan sistem pengerjaan segala timbangan plus dikasih diskon harga. Besttt',
        name: 'Risky Cuek',
      },
      {
        text: 'tempat yang bagus untuk service dan beli timbangan, teknisi ramah dan enak utk diajak discuss soal ketidakpahaman consumer tentang timbangan. sukses trs ya🤜🤛',
        name: 'Indra Subrata',
      },
      {
        text: 'Tersedia berbagai jenis produk timbangan dan semua nya lengkap dari yg kecil hingga besar pun ada di toko ini',
        name: 'Irna Andriyana',
      },
      {
        text: 'Serviceny ok...lengkap segala timbangan disana....sangat rekomendasi banget👍👍👍👍',
        name: 'Janice _chelsy',
      },
    ],
  },
  'rantau-prapat': {
    googleRating: 4.9,
    totalReviews: 66,
    testimonials: [
      {
        text: 'Puas sekali dengan pelayanan , akurasi timbangan terbaik , siap antar untuk pembelian di daerah Ranto , saya sendiri senang di kenalkan bahwa di Ranto sudah ada pusat timbangan',
        name: 'Adinda mysha',
      },
      {
        text: 'Pelayanan sangat baik,  dan penjelasan marketing terhadap jenis produk timbangan sangat baik dan mudah di mengerti',
        name: 'Oppo Pon',
      },
      {
        text: 'Kualitas timbangannya oke, jadi lebih banyak untungya karena bisa beli dam memilih secara ofline, jadi kita bisa lihat kualitas barangnya',
        name: 'Henry Eko Putra Siregar',
      },
      {
        text: 'Pelayanan dari karyawan sangat baik dan penjelasan segala jenis bentuk timbangan sangat mudah untuk di mengerti',
        name: 'Nabila Syahnur hsb',
      },
      {
        text: 'Wahh ga sia sia beli timbangan di toko ini,udah harga terjangkau pakai garansi pula,sukses terus buat usahanya 😍😍',
        name: 'Asmi Dar',
      },
    ],
  },
};

interface AvatarProps {
  name: string;
}

const Avatar: React.FC<AvatarProps> = ({ name }) => {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 3)
    .toUpperCase();
  const colors = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500'];
  const colorIndex = initials.charCodeAt(0) % colors.length;

  return <div className={`w-12 h-12 rounded-full ${colors[colorIndex]} flex items-center justify-center text-white font-bold text-lg`}>{initials}</div>;
};

const GoogleReviewSummary = ({ rating, totalReviews }: { rating: number; totalReviews: number }) => {
  return (
    <div className="flex flex-col items-center justify-center mb-8">
      <div className="flex items-center gap-2">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={24} fill="#eab308" className="text-yellow-500" />
          ))}
        </div>
        <span className="text-2xl font-bold">{rating}</span>
      </div>
      <p className="text-gray-700 mt-1 font-medium">{totalReviews} ulasan dari Google Review</p>
    </div>
  );
};

interface TestimonialProps {
  text: string;
  name: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ text, name }) => {
  return (
    <div className="flex flex-col h-full justify-between p-5 bg-white rounded-2xl shadow-md gap-y-14">
      <p className="text-justify font-medium flex-grow">{text}</p>
      <div className="flex flex-col items-center justify-center lg:mt-4">
        <div className="flex gap-x-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={20} fill="#eab308" className="text-yellow-500" />
          ))}
        </div>
        <div className="flex flex-col items-center gap-y-1 mt-3">
          <Avatar name={name} />
          <p className="font-semibold text-sm mt-2 capitalize">{name}</p>
        </div>
      </div>
    </div>
  );
};

export function CarouselTesti() {
  const pathname = usePathname();
  const location = pathname.split('/').pop() || '';
  const locationTestimonials = testimonialData[location as keyof typeof testimonialData];

  const defaultTestimonials = [
    {
      text: 'Sudah membeli dua kali dengan jenis timbangan yang berbeda. Layanan pelanggan: oke. Timbangan: oke. Kesepakatan purna jual juga oke. Semoga sukses.',
      name: 'Johan Tobing',
    },
    {
      text: 'Respon cepat untuk semua pelanggan, staf ramah termasuk pemiliknya, berbagi penuh sebelum kita memilih & memutuskan untuk membeli, 3 jempol untuk toko ini 👍🏻👍🏻👍🏻.',
      name: 'Schnickschnack MAFAN LEBEN',
    },
    {
      text: 'Pelayanan dari karyawan baik, mereka menjelaskan secara detail, harga juga lebih murah dibandingkan yang lain.',
      name: 'Deska Arleta Ramadani',
    },
    {
      text: 'Pelayanannya sangat baik di toko dan juga dalam layanan, Kualitas barang juga sangat bagus, Belanja yang luar biasa di Pusat Timbangan Digital Indonesia.',
      name: 'Nurul Safitri',
    },
    {
      text: 'Pelayanan memuaskan, staf & pemilik ramah, penjelasan yang diberikan juga jelas. Direkomendasikan untuk yang mencari timbangan 👍🏼.',
      name: 'Jeny Winata',
    },
    {
      text: 'Kualitas bagus, banyak hadiah, beli banyak. Harga terjangkau dan garansi bagus. Akan pesan lagi.',
      name: 'Frlix Medan',
    },
  ];

  const testimonials = locationTestimonials?.testimonials || defaultTestimonials;

  return (
    <div className="w-full">
      {locationTestimonials && <GoogleReviewSummary rating={locationTestimonials.googleRating} totalReviews={locationTestimonials.totalReviews} />}

      <Carousel opts={{ align: 'start' }} className="w-full">
        <CarouselContent className="py-4">
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 lg:pl-4">
              <div className="h-full">
                <Testimonial {...testimonial} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
