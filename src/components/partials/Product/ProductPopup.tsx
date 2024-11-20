'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Product } from '@/constant/products';
import { X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useMediaQuery } from 'usehooks-ts';

interface ProductPopupProps {
  product: Product;
  onClose: () => void;
  id: string;
}

const ProductPopup: React.FC<ProductPopupProps> = ({ product, onClose, id }) => {
  const pathname = usePathname();
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
      document.body.style.overflow = 'hidden';
    }, 10);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, []);

  const getWhatsappNumber = () => {
    switch (pathname) {
      case '/pekanbaru':
        return '6281263083880';
      case '/aceh':
        return '628116381298';
      case '/rantau-prapat':
        return '6281360612669';
      case '/palembang':
        return '6282132381920';
      case '/lampung':
        return '628116023399';
      case '/jakarta-serang':
        return '6281362618899';
      default:
        return '6281234567890';
    }
  };

  const handleWhatsAppClick = () => {
    const whatsappNumber = getWhatsappNumber();
    const message = encodeURIComponent(`Halo, saya tertarik dengan produk ${product.name}. Bisakah Anda memberi saya informasi lebih lanjut?`);
    if (typeof window !== 'undefined') {
      window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
    setTimeout(onClose, 300);
  };

  if (isDesktop) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full overflow-hidden relative">
          <button onClick={handleClose} className="absolute top-4 right-4 text-gray-600 hover:text-gray-800" aria-label="Tutup">
            <X size={32} />
          </button>
          <div className="flex p-8">
            <div className="w-1/3 pr-8">
              <Image src={product.image} alt={product.name} width={300} height={300} className="object-cover rounded-lg" />
            </div>
            <div className="w-2/3">
              <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
              <p className="text-xl text-gray-600 mb-4">{product.category}</p>
              <div className="text-base mb-6 whitespace-pre-line">{product.description}</div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={product.pdfLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-secondary px-6 py-3 rounded-full border border-secondary hover:bg-secondary hover:text-white transition-colors text-center duration-300"
                >
                  Lihat PDF
                </a>
                <button id={id} onClick={handleWhatsAppClick} className="inline-block bg-secondary text-white px-6 py-3 rounded-full hover:bg-secondaryDark transition-colors">
                  Lanjutkan ke WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? 'visible' : 'invisible'}`}>
      <div className={`fixed inset-0 bg-black transition-opacity duration-300 ${isOpen ? 'bg-opacity-50 backdrop-blur-sm' : 'bg-opacity-0'}`} onClick={handleClose} />
      <div className={`fixed inset-x-0 bottom-0 bg-white rounded-t-3xl shadow-xl transition-transform duration-300 ease-out transform ${isOpen ? 'translate-y-0' : 'translate-y-full'}`} style={{ height: '80vh' }}>
        <button onClick={handleClose} className="absolute top-4 right-4 text-gray-600 hover:text-gray-800" aria-label="Tutup">
          <X size={24} />
        </button>
        <div className="h-full overflow-y-auto px-6 pt-8 pb-6">
          <Image src={product.image} alt={product.name} width={200} height={200} className="object-cover rounded-lg mx-auto mb-6" />
          <h2 className="text-2xl font-bold mb-3">{product.name}</h2>
          <p className="text-lg text-gray-600 mb-4">{product.category}</p>
          <div className="text-base mb-6 whitespace-pre-line">{product.description}</div>
          <div className="flex flex-col gap-4">
            <a
              href={product.pdfLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-secondary px-6 py-3 rounded-full border border-secondary hover:bg-secondary hover:text-white transition-colors text-center duration-300"
            >
              Lihat PDF
            </a>
            <button onClick={handleWhatsAppClick} className="bg-secondary text-white px-6 py-3 rounded-full hover:bg-secondaryDark transition-colors">
              Lanjutkan ke WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPopup;
