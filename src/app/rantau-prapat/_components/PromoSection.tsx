"use client";

import React from "react";
import DiscountProductCard from "./DiscountProductCard";
import WarrantyImage from "@/assets/png/warranty.png"
import MeinyalaAssetImage from "@/assets/png/comanche-kinlee.png"
import MeiriahAssetImage from "@/assets/png/meiriah-asset.png"
import TokoMerkImage01 from "@/assets/png/toko-merk-asset-01.png"
import TokoMerkImage02 from "@/assets/png/toko-merk-asset-02.png"
import TokoProductImage01 from "@/assets/png/toko-asset-01.png"
import TokoProductImage02 from "@/assets/png/toko-asset-02.png"
import TokoProductImage03 from "@/assets/png/toko-asset-03.png"
import Image, { StaticImageData } from "next/image";
import { linkPromo, productsMeinyala, productsMeiriah } from "@/constant/promo";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

type PropsTitle = {
    images: StaticImageData[];
    title: string;
    desc: string;
    link: string;
}

const StickyTitleComponent = ({ images, title, desc, link }: PropsTitle) => {
    return (
        <div className="w-full">
            <div className="w-full md:max-w-7xl md:mx-auto space-y-5 bg-white px-10 shadow-md py-8 rounded-xl">
                <div className="md:space-y-5 space-y-2">
                    <h2 className="text-primary text-lg font-semibold md:text-3xl">{title}</h2>
                    <p className="max-w-xl text-gray-700 !leading-[150%] text-xs sm:text-sm md:text-base">{desc}</p>
                </div>
                <div className="flex flex-col md:flex-row justify-center gap-y-3 items-center md:justify-between w-full">
                    <div className="flex md:flex-row flex-grow gap-2 items-center">
                        {
                            images.map((image, index) => (
                                <Image key={index} src={image} alt="Comanche" className="h-6 md:h-12 w-fit" />
                            ))
                        }
                    </div>
                    <Link href={link} target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-700 duration-300 transition-all text-white rounded-3xl px-6 py-2 md:py-3 font-semibold text-sm md:text-base flex items-center gap-2 shadow-md">
                        <FaWhatsapp /><span>Klaim Promonya Sekarang disini</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

const PromoToko = [
    {
        title: "Discount Merk Pegas Comache & Kinlee",
        discount: "15%",
        image: TokoProductImage01
    },
    {
        title: "Discount Merk Fixscale, Smart & Kinlee",
        discount: "10%",
        image: TokoProductImage02
    },
    {
        title: "Discount Merk Barokah",
        discount: "25%",
        image: TokoProductImage03
    },
]



export default function PromoSection(): JSX.Element {

    const { meinyala, meiriah, toko } = linkPromo

    return (
        <main className="">
            {/* produk section */}
            <section className="py-8">
                <StickyTitleComponent title="PROMO MEI-NYALA" desc="Jangan lewatkan kesempatan menarik ini! Dapatkan potongan harga menarik untuk produk dari merk Comanche dan Kinlee" images={[MeinyalaAssetImage, WarrantyImage]} link={meinyala} />
                <div id="promo-meinyala" className="scroll-mt-80 container p-4 md:p-8 space-y-20">
                    <div className="flex flex-col gap-14 w-full md:max-w-7xl md:mx-auto">
                        <div className="w-full">

                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
                                {productsMeinyala?.map((product, index: number) => {
                                    return <DiscountProductCard key={index} product={product} label={"Meinyala"} />
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-8">
                <StickyTitleComponent title="PROMO MEIRIAH" desc="Dapatkan potongan harga menarik untuk produk dari merk Kinlee, Metrics Weigher, Fix Scale, Barokah, dan Smart" images={[MeiriahAssetImage, WarrantyImage]} link={meiriah} />
                <div id="promo-meiriah" className="scroll-mt-80 container p-4 md:p-8 space-y-20">
                    <div className="flex flex-col gap-14 w-full md:max-w-7xl md:mx-auto">
                        <div className="w-full">

                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
                                {productsMeiriah?.map((product, index: number) => {
                                    return <DiscountProductCard key={index} product={product} label={"Meiriah"} />
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-8">
                <StickyTitleComponent title="PROMO TOKO 2025" desc="Jangan lewatkan kesempatan emas ini! Hanya sampai Desember 2025" images={[TokoMerkImage01, TokoMerkImage02, WarrantyImage]} link={toko} />
                <div id="promo-toko" className="scroll-mt-80 container p-4 md:p-8 space-y-20">
                    <div className="flex flex-col gap-14 w-full md:max-w-7xl md:mx-auto">
                        <div className="w-full">
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
                                {PromoToko?.map((product, index: number) => {
                                    return (
                                        <section
                                            className="border w-full px-4 py-7 md:px-10 md:py-8 flex flex-col h-full hover:shadow-xl transition-all duration-300 shadow-md rounded-xl bg-white"
                                        >
                                            <div className="flex justify-center h-40 lg:h-60">
                                                <div className="w-full h-full relative">
                                                    <Image
                                                        src={product?.image}
                                                        alt={product?.title}
                                                        className="h-full w-full mx-auto object-contain"
                                                    />
                                                    <label htmlFor="" className="text-base absolute top-2 right-2 bg-primary text-white px-3 py-1 rounded-md">{product?.discount}</label>
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="text-sm md:text-lg font-semibold text-center">
                                                    {product?.title}
                                                </h4>
                                            </div>
                                        </section>)
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
