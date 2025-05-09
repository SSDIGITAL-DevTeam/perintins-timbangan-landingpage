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
export const carouselBanner: Img[] = [
    {
      path: CarouselBanner1.src,
      link: `${baseUrl}/produk?page=1&category=Comanche%2CKinlee%2CBarokah`
    },
    {
      path: CarouselBanner2.src,
      link: `${baseUrl}/produk?page=1&category=Timbangan+Meja%2CTimbangan+Lab`
    },
    {
      path: CarouselBanner3.src,
      link: "https://wa.me/6282166165351?text=Halo%20Perintis%20Timbangan%20Medan,%20saya%20ingin%20mengetahui%20lebih%20banyak%20mengenai%20diskon%20toko%202025%20ini"
    },
    {
      path: CarouselBanner4.src,
      link: `${baseUrl}/produk?page=1&category=Comanche%2CKinlee%2CBarokah`
    },
    {
      path: CarouselBanner5.src,
      link: `${baseUrl}/produk?page=1&category=Timbangan+Meja%2CTimbangan+Lab`
    },
    {
      path: CarouselBanner6.src,
      link: "https://wa.me/6282166165351?text=Halo%20Perintis%20Timbangan%20Medan,%20saya%20ingin%20mengetahui%20lebih%20banyak%20mengenai%20diskon%20toko%202025%20ini"
    },
  ];