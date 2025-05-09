"use client";
import React, { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import Link from "next/link";
import { Img } from "@/constant/banner";
import Image from "next/image";

// Register Swiper
register();

export default function BannerCarousel({ imgs, id }: { imgs: Img[], id:string }): JSX.Element {
    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);
    const swiperRef = useRef<any>(null);

    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current.params.navigation.prevEl = prevRef.current;
            swiperRef.current.params.navigation.nextEl = nextRef.current;
            swiperRef.current.navigation.init();
            swiperRef.current.navigation.update();
        }
    }, []);
    return (
        <div className="container-medium relative">
            <div className="medium-container w-full">
                <Swiper
                    modules={[Pagination, Autoplay, Navigation]}
                    slidesPerView={1.1}
                    centeredSlides={false}
                    spaceBetween={20}
                    speed={600}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    pagination={{ dynamicBullets: true, clickable: true }}
                    navigation={{ nextEl: ".arrow-right", prevEl: ".arrow-left" }}
                    className="mySwiper"
                >
                    {imgs.map((img, index: number) => (
                        <SwiperSlide
                            key={index}
                            className="w-full flex justify-center"
                        >
                            <Link href={img.link || ""} target="_blank" rel="noopener noreferrer">
                                <Image
                                    id={id}
                                    width={1920}
                                    height={1080}
                                    src={img.path}
                                    alt={"carousel-banner-" + index}
                                    className="w-full rounded-sm"
                                />
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <button ref={prevRef} className="arrow-left arrow absolute top-1/2 transform -translate-y-1/2 z-10">
                <FaChevronLeft className="w-10 h-10 text-[#007AFF]" />
            </button>

            <button ref={nextRef} className="arrow-right arrow absolute top-1/2 transform -translate-y-1/2 z-10">
                <FaChevronRight className="w-10 h-10 text-[#007AFF]" />
            </button>
        </div>
    );
}