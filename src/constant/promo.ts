import { StaticImageData } from "next/image";

export type ProductCard = {
  id: string;
  name: string;
  price: number;
  discount: number;
  image: StaticImageData;
};

const waNumber = 6282166165351;

export const linkPromo = {
  meiriah: `https://wa.me/${waNumber}?text=Halo%20Perintis%20Timbangan%20Medan,%20saya%20ingin%20mengetahui%20lebih%20banyak%20mengenai%20promo%20meiriah%20ini`,
  meinyala: `https://wa.me/${waNumber}?text=Halo%20Perintis%20Timbangan%20Medan,%20saya%20ingin%20mengetahui%20lebih%20banyak%20mengenai%20promo%20meinyala%20ini`,
  toko: `https://wa.me/${waNumber}?text=Halo%20Perintis%20Timbangan%20Medan,%20saya%20ingin%20mengetahui%20lebih%20banyak%20mengenai%20promo%20toko%20ini`,
};

// MEINYALA IMAGES
import MeinyalaAssetImage01 from "@/assets/webp/product-promo/meinyala/kinlee120.webp";
import MeinyalaAssetImage02 from "@/assets/webp/product-promo/meinyala/kinlee100.webp";
import MeinyalaAssetImage03 from "@/assets/webp/product-promo/meinyala/kinlee50.webp";
import MeinyalaAssetImage04 from "@/assets/webp/product-promo/meinyala/kinlee20.webp";
import MeinyalaAssetImage05 from "@/assets/webp/product-promo/meinyala/kinlee10.webp";
import MeinyalaAssetImage06 from "@/assets/webp/product-promo/meinyala/kinlee5.webp";
//
import MeinyalaAssetImage07 from "@/assets/webp/product-promo/meinyala/c200.webp";
import MeinyalaAssetImage08 from "@/assets/webp/product-promo/meinyala/c150b.webp";
import MeinyalaAssetImage09 from "@/assets/webp/product-promo/meinyala/c150k.webp";
import MeinyalaAssetImage10 from "@/assets/webp/product-promo/meinyala/c100.webp";
import MeinyalaAssetImage11 from "@/assets/webp/product-promo/meinyala/c60.webp";
import MeinyalaAssetImage12 from "@/assets/webp/product-promo/meinyala/c30.webp";
import MeinyalaAssetImage13 from "@/assets/webp/product-promo/meinyala/c20.webp";
import MeinyalaAssetImage14 from "@/assets/webp/product-promo/meinyala/c15.webp";
import MeinyalaAssetImage15 from "@/assets/webp/product-promo/meinyala/c10.webp";
import MeinyalaAssetImage16 from "@/assets/webp/product-promo/meinyala/c5b.webp";
import MeinyalaAssetImage17 from "@/assets/webp/product-promo/meinyala/c5k.webp";
import MeinyalaAssetImage18 from "@/assets/webp/product-promo/meinyala/c3.webp";
import MeinyalaAssetImage19 from "@/assets/webp/product-promo/meinyala/c2.webp";

let id = 1
export const productsMeinyala: ProductCard[] = [
  // COMANCHE
  {
    id: (id++).toString(),
    name: "Timbangan Pegas Kinlee Tipe KL - 120",
    price: 750000,
    discount: 638000,
    image: MeinyalaAssetImage01,
  },
  {
    id: (id++).toString(),
    name: "Timbangan Pegas Kinlee Tipe KL - 100",
    price: 655000,
    discount: 557000,
    image: MeinyalaAssetImage02,
  },
  {
    id: (id++).toString(),
    name: "Timbangan Pegas Kinlee Tipe KL - 50",
    price: 580000,
    discount: 493000,
    image: MeinyalaAssetImage03,
  },
  {
    id: (id++).toString(),
    name: "Timbangan Pegas Kinlee Tipe KL - 20",
    price: 310000,
    discount: 264000,
    image: MeinyalaAssetImage04,
  },
  {
    id: (id++).toString(),
    name: "Timbangan Pegas Kinlee Tipe KL - 10",
    price: 295000,
    discount: 251000,
    image: MeinyalaAssetImage05,
  },
  {
    id: (id++).toString(),
    name: "Timbangan Pegas Kinlee Tipe KL - 5",
    price: 270000,
    discount: 230000,
    image: MeinyalaAssetImage06,
  },

  // KINLEE
  {
    id: (id++).toString(),
    name: "Timbangan Pegas Made in Vietnam Kapasitas 200 Kg",
    price: 1575000,
    discount: 1339000,
    image: MeinyalaAssetImage07,
  },
  {
    id: (id++).toString(),
    name: "Timbangan Pegas Made in Vietnam Kapasitas 150 Kg Besar",
    price: 1525000,
    discount: 1297000,
    image: MeinyalaAssetImage08,
  },
  {
    id: (id++).toString(),
    name: "Timbangan Pegas Made in Vietnam Kapasitas 150 Kg Biasa",
    price: 1125000,
    discount: 957000,
    image: MeinyalaAssetImage09,
  },
  {
    id: (id++).toString(),
    name: "Timbangan Pegas Made in Vietnam Kapasitas 100 Kg",
    price: 975000,
    discount: 829000,
    image: MeinyalaAssetImage10,
  },
  {
    id: (id++).toString(),
    name: "Timbangan Pegas Made in Vietnam Kapasitas 60 Kg",
    price: 840000,
    discount: 714000,
    image: MeinyalaAssetImage11
  },
  {
    id: (id++).toString(),
    name: "Timbangan Pegas Made in Vietnam Kapasitas 30 Kg",
    price: 450000,
    discount: 383000,
    image: MeinyalaAssetImage12,
  },
  {
    id: (id++).toString(),
    name: "Timbangan Pegas Made in Vietnam Kapasitas 20 Kg",
    price: 410000,
    discount: 349000,
    image: MeinyalaAssetImage13,
  },
  {
    id: (id++).toString(),
    name: "Timbangan Pegas Made in Vietnam Kapasitas 15 Kg",
    price: 390000,
    discount: 332000,
    image: MeinyalaAssetImage14,
  },
  {
    id: (id++).toString(),
    name: "Timbangan Pegas Made in Vietnam Kapasitas 10 Kg",
    price: 375000,
    discount: 320000,
    image: MeinyalaAssetImage15,
  },
  {
    id: (id++).toString(),
    name: "Timbangan Pegas Made in Vietnam Kapasitas 5 Kg Bodi Besar",
    price: 360000,
    discount: 306000,
    image: MeinyalaAssetImage16,
  },
  {
    id: (id++).toString(),
    name: "Timbangan Pegas Made in Vietnam Kapasitas 5 Kg",
    price: 235000,
    discount: 200000,
    image: MeinyalaAssetImage17,
  },
  {
    id: (id++).toString(),
    name: "Timbangan Pegas Made in Vietnam Kapasitas 3 Kg",
    price: 230000,
    discount: 196000,
    image: MeinyalaAssetImage18,
  },
  {
    id: (id++).toString(),
    name: "Timbangan Pegas Made in Vietnam Kapasitas 2 Kg",
    price: 220000,
    discount: 187000,
    image: MeinyalaAssetImage19,
  },


];

// MEIRIAH IMAGES
import MeiriahAssetImage01 from "@/assets/webp/product-promo/meiriah/110a.webp";
import MeiriahAssetImage03 from "@/assets/webp/product-promo/meiriah/FA2204Na.webp";
import MeiriahAssetImage04 from "@/assets/webp/product-promo/meiriah/JA600A.webp";
import MeiriahAssetImage02 from "@/assets/webp/product-promo/meiriah/JA603.webp";
import MeiriahAssetImage05 from "@/assets/webp/product-promo/meiriah/fx1100a.webp";
import MeiriahAssetImage07 from "@/assets/webp/product-promo/meiriah/kdbn1.webp";
import MeiriahAssetImage06 from "@/assets/webp/product-promo/meiriah/kdtn1.webp";
import MeiriahAssetImage08 from "@/assets/webp/product-promo/meiriah/plastik20g.webp";
import MeiriahAssetImage09 from "@/assets/webp/product-promo/meiriah/TM30F.webp";
import MeiriahAssetImage10 from "@/assets/webp/product-promo/meiriah/ACSKL.webp";

export const productsMeiriah: ProductCard[] = [
  {
    id: "1",
    name: "Timbangan laboratorium Moisture Analyzer Type XY 110 ME",
    price: 8200000,
    discount: 7380000,
    image: MeiriahAssetImage01,
  },
  {
    id: "2",
    name: "Timbangan Laboratorium Digital Type JA 603",
    price: 10500000,
    discount: 9450000,
    image: MeiriahAssetImage02,
  },
  {
    id: "3",
    name: "Timbangan laboratorium Digital Merk FA2204E",
    price:  12500000,
    discount: 11250000,
    image: MeiriahAssetImage03,
  },
  {
    id: "4",
    name: "Timbangan laboratorium Digital Merk JA600CM",
    price: 15850000,
    discount: 14265000,
    image: MeiriahAssetImage04,
  },
  {
    id: "5",
    name: "Timbangan laboratoriumDigital Merk FX 1100- 1BF",
    price: 1900000,
    discount: 1710000,
    image: MeiriahAssetImage05,
  },
  {
    id: "6",
    name: "Timbangan laboratorium Digital Merk KD-TN",
    price: 19100000,
    discount: 17190000,
    image: MeiriahAssetImage06,
  },
  {
    id: "7",
    name: "Timbangan laboratorium Digital Merk KD-BN",
    price: 3250000,
    discount: 2925000,
    image: MeiriahAssetImage07,
  },
  {
    id: "8",
    name: "Pegas Plastik Merk Barokah Kapasitas 2Kg/10gr",
    price: 40000,
    discount: 30000,
    image: MeiriahAssetImage08,
  },
  {
    id: "9",
    name: "[Promo]Timbangan Digital Tipe TM 30F",
    price: 15500000,
    discount: 13950000,
    image: MeiriahAssetImage09,
  },
  {
    id: "10",
    name: "[Promo]Timbangan MejaDigital Tipe ACS-KL",
    price: 900000,
    discount: 810000,
    image: MeiriahAssetImage10,
  },
];

