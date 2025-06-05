import React from "react";

import { formatRupiah } from "@/utils/currencyFormat";
import Image from "next/image";
import { ProductCard } from "@/constant/promo";

type Props = {
  product: ProductCard;
  label: string;
  key?: number;
};

export default function DiscountProductCard({ product, label, key }: Props): JSX.Element {
  const productDiscount = formatRupiah(product.discount)
  const productPrice = formatRupiah(product.price)
  return (
      <section
        key={key}
        className="border px-4 py-7 md:px-10 md:py-8 flex flex-col h-full shadow-md duration-300 transition-all hover:shadow-xl rounded-xl bg-white justify-between"
      >
        <div className="flex justify-center h-40 lg:h-60">
          <div className="w-full h-full relative">
            <Image
              priority
              quality={100}
              src={product.image}
              alt={product?.name}
              className="h-[94%] max-w-full mx-auto object-contain"
            />
            <label htmlFor="" className="text-xs md:text-sm absolute bottom-0 lg:bottom-12 right-2 bg-orange-500 text-white px-2 py-1 rounded-md">{label}</label>
          </div>
        </div>
          <h4 className="text-sm md:text-lg font-semibold text-gray-800 text-center">
            {product?.name}
          </h4>
          <div className="flex items-center justify-between mt-2">
            <div className="flex flex-col lg:flex-row items-center gap-2 justify-between md:justify-center md:gap-5  w-full">
              <span className="text-xs md:text-sm line-through text-gray-500">{productPrice}</span>
              <span className="text-xs md:text-sm font-semibold p-2 bg-primary text-white rounded-md">{productDiscount}</span>
            </div>
          </div>
      </section>
  );
}
