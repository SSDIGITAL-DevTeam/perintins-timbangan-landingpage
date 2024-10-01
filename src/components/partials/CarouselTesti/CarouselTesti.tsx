'use client';

import * as React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Star1 } from 'iconsax-react';

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
            <Star1 key={i} size={20} variant="Bold" className="text-yellow-500" />
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
  const testimonials = [
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

  return (
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
  );
}
