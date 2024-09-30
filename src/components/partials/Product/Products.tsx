'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Product, products } from '@/constant/products';
import { X } from 'lucide-react';

interface ProductPopupProps {
  product: Product;
  onClose: () => void;
}

const ProductPopup: React.FC<ProductPopupProps> = ({ product, onClose }) => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(`Halo, saya tertarik dengan produk ${product.name}. Bisakah Anda memberi saya informasi lebih lanjut?`);
    window.open(`https://wa.me/6281234567890?text=${message}`, '_blank');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full overflow-hidden relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-600 hover:text-gray-800" aria-label="Tutup">
          <X size={32} />
        </button>
        <div className="flex p-8">
          <div className="w-1/3 pr-8">
            <Image src={product.image} alt={product.name} width={300} height={300} layout="responsive" className="object-cover rounded-lg" />
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
              <button onClick={handleWhatsAppClick} className="inline-block bg-secondary text-white px-6 py-3 rounded-full hover:bg-secondaryDark transition-colors">
                Lanjutkan ke WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Products: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const openPopup = (product: Product) => {
    setSelectedProduct(product);
  };

  const closePopup = () => {
    setSelectedProduct(null);
  };

  return (
    <section className="flex flex-col py-[50px] px-[2rem] overflow-x-hidden">
      <div className="container flex flex-col gap-y-9">
        <h1 className="text-3xl font-bold text-center">Product yang kami tawarkan</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-6">
          {products.map((product: Product, index: number) => (
            <div key={`product-${index}`} className="flex flex-col rounded-xl overflow-hidden shadow-lg bg-white p-4 cursor-pointer" onClick={() => openPopup(product)}>
              <Image src={product.image} alt={product.name} width={300} height={300} layout="responsive" className="object-cover" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-center">{product.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedProduct && <ProductPopup product={selectedProduct} onClose={closePopup} />}
    </section>
  );
};

export default Products;
