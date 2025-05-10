import CarouselBanner1 from "@/assets/webp/carousel-banner/asset-promo-meinyala.webp"
import CarouselBanner2 from "@/assets/webp/carousel-banner/asset-promo-meiriah.webp"
import CarouselBanner3 from "@/assets/webp/carousel-banner/asset-promo-toko.webp"
import CarouselBanner4 from "@/assets/webp/carousel-banner/asset-promo-meinyala-mobile.webp"
import CarouselBanner5 from "@/assets/webp/carousel-banner/asset-promo-meiriah-mobile.webp"
import CarouselBanner6 from "@/assets/webp/carousel-banner/asset-promo-toko-mobile.webp"
import { Url } from "next/dist/shared/lib/router/router";
const baseUrl = "https://www.perintistimbanganindonesia.co.id"

export type Img = {
  path: string;
  link?: Url;
};

export const generateBanner = (waLink: string) : Img[] => {
  return  [
    {
      path: CarouselBanner1.src,
      link: `${baseUrl}/produk?category=promo-mei-nyala&page=1`
    },
    {
      path: CarouselBanner2.src,
      link: `${baseUrl}/produk?category=promo-meiriah&page=1`
    },
    {
      path: CarouselBanner3.src,
      link: waLink
    },
    {
      path: CarouselBanner4.src,
      link: `${baseUrl}/produk?category=promo-mei-nyala&page=1`
    },
    {
      path: CarouselBanner5.src,
      link: `${baseUrl}/produk?category=promo-meiriah&page=1`
    },
    {
      path: CarouselBanner6.src,
      link: waLink
    },
  ];
}