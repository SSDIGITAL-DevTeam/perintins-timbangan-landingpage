'use client';

import { usePathname } from 'next/navigation';
import Image from 'next/image';

// Data galeri untuk setiap lokasi
const galleryData = {
  palembang: {
    title: 'Galeri Dealer Palembang',
    images: [
      {
        src: '/webp/dealer/palembang/image1.jpeg',
        alt: 'Toko Palembang',
        caption: 'Dealer Palembang',
      },
      {
        src: '/webp/dealer/palembang/image2.jpeg',
        alt: 'Toko Palembang',
        caption: 'Dealer Palembang',
      },
      {
        src: '/webp/dealer/palembang/image3.jpeg',
        alt: 'Toko Palembang',
        caption: 'Dealer Palembang',
      },
      {
        src: '/webp/dealer/palembang/image4.jpeg',
        alt: 'Toko Palembang',
        caption: 'Dealer Palembang',
      },
      {
        src: '/webp/dealer/palembang/image5.jpeg',
        alt: 'Toko Palembang',
        caption: 'Dealer Palembang',
      },
      {
        src: '/webp/dealer/palembang/image6.jpeg',
        alt: 'Toko Palembang',
        caption: 'Dealer Palembang',
      },
    ],
  },
  pekanbaru: {
    title: 'Galeri Dealer Pekanbaru',
    images: [
      {
        src: '/webp/dealer/pekanbaru/image1.jpg',
        alt: 'Toko Pekanbaru',
        caption: 'Dealer Pekanbaru',
      },
      {
        src: '/webp/dealer/pekanbaru/image2.jpg',
        alt: 'Toko Pekanbaru',
        caption: 'Dealer Pekanbaru',
      },
      {
        src: '/webp/dealer/pekanbaru/image3.jpg',
        alt: 'Toko Pekanbaru',
        caption: 'Dealer Pekanbaru',
      },
      {
        src: '/webp/dealer/pekanbaru/image4.jpeg',
        alt: 'Toko Pekanbaru',
        caption: 'Dealer Pekanbaru',
      },
      {
        src: '/webp/dealer/pekanbaru/image5.jpg',
        alt: 'Toko Pekanbaru',
        caption: 'Dealer Pekanbaru',
      },
      {
        src: '/webp/dealer/pekanbaru/image6.jpg',
        alt: 'Toko Pekanbaru',
        caption: 'Dealer Pekanbaru',
      },
    ],
  },
  aceh: {
    title: 'Galeri Dealer Aceh',
    images: [
      {
        src: '/webp/dealer/aceh/image1.jpeg',
        alt: 'Toko Aceh',
        caption: 'Dealer Aceh',
      },
      {
        src: '/webp/dealer/aceh/image2.jpeg',
        alt: 'Toko Aceh',
        caption: 'Dealer Aceh',
      },
      {
        src: '/webp/dealer/aceh/image3.jpeg',
        alt: 'Toko Aceh',
        caption: 'Dealer Aceh',
      },
      {
        src: '/webp/dealer/aceh/image4.jpeg',
        alt: 'Toko Aceh',
        caption: 'Dealer Aceh',
      },
      {
        src: '/webp/dealer/aceh/image5.jpeg',
        alt: 'Toko Aceh',
        caption: 'Dealer Aceh',
      },
      {
        src: '/webp/dealer/aceh/image6.jpeg',
        alt: 'Toko Aceh',
        caption: 'Dealer Aceh',
      },
    ],
  },
  'rantau-prapat': {
    title: 'Galeri Dealer Rantau Prapat',
    images: [
      {
        src: '/webp/dealer/rantau-prapat/image1.jpeg',
        alt: 'Toko Rantau',
        caption: 'Dealer Rantau',
      },
      {
        src: '/webp/dealer/rantau-prapat/image2.jpeg',
        alt: 'Toko Rantau',
        caption: 'Dealer Rantau',
      },
      {
        src: '/webp/dealer/rantau-prapat/image3.jpeg',
        alt: 'Toko Rantau',
        caption: 'Dealer Rantau',
      },
      {
        src: '/webp/dealer/rantau-prapat/image4.jpeg',
        alt: 'Toko Rantau',
        caption: 'Dealer Rantau',
      },
      {
        src: '/webp/dealer/aceh/image3.jpeg',
        alt: 'Toko Aceh',
        caption: 'Dealer Aceh',
      },
      {
        src: '/webp/dealer/palembang/image2.jpeg',
        alt: 'Toko Palembang',
        caption: 'Dealer Palembang',
      },
    ],
  },
};

// Data default jika lokasi tidak ditemukan
const defaultGallery = {
  title: 'Galeri Pelanggan',
  images: [
    {
      src: '/webp/dealer/medan/image1.webp',
      alt: 'Toko medan',
      caption: 'Dealer Default',
    },
    {
      src: '/webp/dealer/medan/image2.webp',
      alt: 'Toko medan',
      caption: 'Dealer Default',
    },
    {
      src: '/webp/dealer/medan/image3.webp',
      alt: 'Toko medan',
      caption: 'Dealer Default',
    },
    {
      src: '/webp/dealer/medan/image4.webp',
      alt: 'Toko medan',
      caption: 'Dealer Default',
    },
    {
      src: '/webp/dealer/medan/image5.webp',
      alt: 'Toko medan',
      caption: 'Dealer Default',
    },
    {
      src: '/webp/dealer/medan/image6.webp',
      alt: 'Toko medan',
      caption: 'Dealer Default',
    },
  ],
};

export function DealerGallery() {
  const pathname = usePathname();
  const location = pathname.split('/').pop() || '';
  const galleryContent = galleryData[location as keyof typeof galleryData] || defaultGallery;

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {galleryContent.images.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-[5px] md:rounded-[8px] group">
            <Image src={image.src} alt={image.alt} width={800} height={600} className="w-full md:w-[800px] h-auto md:h-[300px] object-cover transition-transform duration-300 group-hover:scale-105 rounded-[5px] md:rounded-[8px]" />
          </div>
        ))}
      </div>
    </div>
  );
}
