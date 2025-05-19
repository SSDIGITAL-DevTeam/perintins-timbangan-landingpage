import Image from "next/image";
import PromoImage from "@/assets/webp/main-page/asset-promo.webp"
import PromoImageMobile from "@/assets/webp/main-page/asset-promo-mobile.webp"
import Link from "next/link";


export default function PromoSection({ id }: { id: string }) {
    const link = "https://www.perintistimbanganindonesia.co.id/promo"
    return (
        <div
            id={id}
            className="w-full">
            <Link href={link} className="max-w-7xl mx-auto p-8 hidden md:block">
                <Image width={1920} height={1080} priority quality={100} src={PromoImage.src} alt="Promo" className="w-full" />
            </Link>
            <Link href={link} className="container p-4 md:hidden block">
                <Image width={1920} height={1080} priority quality={100} src={PromoImageMobile.src} alt="Promo" className="w-full" />
            </Link>
        </div>
    )
}