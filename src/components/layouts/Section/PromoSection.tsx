import Image from "next/image";
import PromoImage from "@/assets/webp/carousel-banner/asset-promo-toko.webp"
import PromoImageMobile from "@/assets/webp/carousel-banner/asset-promo-toko-mobile.webp";
import Link from "next/link";


export default function PromoSection({ id }: { id: string }) {
    const link = "https://www.perintistimbanganindonesia.co.id/promo#promo-jumbo";
    return (
        <div
            id={id}
            className="w-full px-4 md:px-10">
            <Link href={link} className="max-w-7xl mx-auto hidden md:block">
                <Image width={1920} height={1080} priority quality={100} src={PromoImage.src} alt="Promo" className="w-full" />
            </Link>
            <Link href={link} className="container md:hidden block">
                <Image width={1920} height={1080} priority quality={100} src={PromoImageMobile.src} alt="Promo" className="w-full" />
            </Link>
        </div>
    )
}