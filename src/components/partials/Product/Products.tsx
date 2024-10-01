'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Product, products } from '@/constant/products';
import ProductPopup from './ProductPopup';

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
            <div key={`product-${index}`} className="flex flex-col rounded-xl overflow-hidden shadow-lg bg-white p-4 cursor-pointer items-center justify-center" onClick={() => openPopup(product)}>
              <Image src={product.image} alt={product.name} width={300} height={300} className="object-cover" />
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
