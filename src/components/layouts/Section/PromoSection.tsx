import Image from "next/image";
import BannerPromo from '@/assets/webp/asset-discount-2025-banner.webp';
import BannerPromoMobile from '@/assets/webp/asset-discount-2025-banner-mobile.webp';
import { Button } from '@/components/ui/button';
import WhatsappStroke from '@/assets/svg/asset-whatsapp-stroke.svg'
import Link from "next/link";

const WaRedStroke = (
    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.5498 2.91005C16.6329 1.98416 15.5408 1.25002 14.3373 0.750416C13.1338 0.250812 11.8429 -0.00426317 10.5398 5.38951e-05C5.0798 5.38951e-05 0.629805 4.45005 0.629805 9.91005C0.629805 11.6601 1.0898 13.3601 1.9498 14.8601L0.549805 20.0001L5.7998 18.6201C7.2498 19.4101 8.8798 19.8301 10.5398 19.8301C15.9998 19.8301 20.4498 15.3801 20.4498 9.92005C20.4498 7.27005 19.4198 4.78005 17.5498 2.91005ZM10.5398 18.1501C9.0598 18.1501 7.6098 17.7501 6.3398 17.0001L6.0398 16.8201L2.9198 17.6401L3.7498 14.6001L3.5498 14.2901C2.72735 12.9771 2.29073 11.4593 2.2898 9.91005C2.2898 5.37005 5.9898 1.67005 10.5298 1.67005C12.7298 1.67005 14.7998 2.53005 16.3498 4.09005C17.1174 4.85392 17.7257 5.7626 18.1394 6.76338C18.5531 7.76417 18.764 8.83714 18.7598 9.92005C18.7798 14.4601 15.0798 18.1501 10.5398 18.1501ZM15.0598 11.9901C14.8098 11.8701 13.5898 11.2701 13.3698 11.1801C13.1398 11.1001 12.9798 11.0601 12.8098 11.3001C12.6398 11.5501 12.1698 12.1101 12.0298 12.2701C11.8898 12.4401 11.7398 12.4601 11.4898 12.3301C11.2398 12.2101 10.4398 11.9401 9.4998 11.1001C8.7598 10.4401 8.2698 9.63005 8.1198 9.38005C7.9798 9.13005 8.0998 9.00005 8.2298 8.87005C8.3398 8.76005 8.4798 8.58005 8.5998 8.44005C8.7198 8.30005 8.7698 8.19005 8.8498 8.03005C8.9298 7.86005 8.8898 7.72005 8.8298 7.60005C8.7698 7.48005 8.2698 6.26005 8.0698 5.76005C7.8698 5.28005 7.6598 5.34005 7.5098 5.33005H7.0298C6.8598 5.33005 6.5998 5.39005 6.3698 5.64005C6.1498 5.89005 5.5098 6.49005 5.5098 7.71005C5.5098 8.93005 6.39981 10.1101 6.5198 10.2701C6.6398 10.4401 8.2698 12.9401 10.7498 14.0101C11.3398 14.2701 11.7998 14.4201 12.1598 14.5301C12.7498 14.7201 13.2898 14.6901 13.7198 14.6301C14.1998 14.5601 15.1898 14.0301 15.3898 13.4501C15.5998 12.8701 15.5998 12.3801 15.5298 12.2701C15.4598 12.1601 15.3098 12.1101 15.0598 11.9901Z" fill="#E02B20" />
    </svg>

)


export default function PromoSection({ id, waLink }: { id: string, waLink: string }) {
    return (
        <div className='container p-4 md:p-8 relative'>
            <Link
                id={id}
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full">
                <Image
                    src={BannerPromo.src}
                    height={1080}
                    width={1920}
                    alt="Promo Banner"
                    className="w-full items-center justify-center md:flex hidden rounded-md"
                />
                <Image
                    src={BannerPromoMobile.src}
                    height={1080}
                    width={1920}
                    alt="Promo Banner"
                    className="w-full items-center justify-center flex md:hidden rounded-md"
                />
            </Link>
        </div>
    )
}