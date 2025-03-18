import {
    Dialog,
    DialogContent,
    DialogTitle,
} from "@/components/ui/dialog"
import Image from "next/image"
import DiscountImage from '@/assets/webp/asset-discount-ramadhan.webp'
import DiscountImageMobile from '@/assets/webp/asset-dicount-ramadhan-mobile.webp'
import { Button } from "@/components/ui/button"
import WhatsappStroke from '@/assets/svg/asset-whatsapp-stroke.svg'
import Link from "next/link"
export default function DialogDiscount({ waLink, id }: { waLink: string, id: string }) {

    return (

        <Dialog defaultOpen={true}>
            <DialogContent className="overflow-hidden flex md:flex-row flex-col w-[90%] md:w-fit gap-4 justify-start">
                {/* Gambar */}
                <div className="w-full h-full md:hidden">
                    <Image
                        src={DiscountImageMobile}
                        alt="dialog-discount-mobile"
                        width={1920}
                        height={1080}
                        quality={100}
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="w-full md:w-[60vh] h-full hidden md:block">
                    <Image
                        src={DiscountImage}
                        alt="dialog-discount"
                        width={1920}
                        height={1080}
                        quality={100}
                        className="object-cover w-full h-full"
                    />
                </div>

                {/* Konten */}
                <div className="p-6 flex flex-col gap-4 justify-center items-center w-full min-h-[200px]">
                    <h1 className="uppercase font-extrabold text-xl md:text-3xl text-[#37504C] !leading-[120%] text-center md:text-left">
                        Promo
                        <span className="text-[#778252]"> Ramadhan & Lebaran </span> 2025
                    </h1>

                    {/* Teks dengan Scroll */}
                    <div className="max-h-24 md:max-h-full overflow-y-auto text-center md:text-left">
                        <p className="text-[#37504C] !leading-[150%] lg:text-base text-sm">
                            Jangan lewatkan kesempatan menarik ini! Dapatkan diskon spesial
                            <span className="text-[#778252]"> 10% untuk semua produk dari berbagai merk PTI </span>
                            yang Anda sukai. Selain itu,
                            <span className="text-[#778252]"> khusus untuk produk dari merk Barokah, nikmati diskon ganda yang lebih menguntungkan, yaitu 10% + 5%!</span>
                        </p>
                    </div>

                    {/* Tombol WhatsApp */}
                    <Link
                        id={id}
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full"
                    >
                        <Button className="w-full rounded-full py-2 lg:py-3 text-sm lg:text-lg font-medium tracking-[1px] mt-6 bg-[#082B24] hover:bg-slate-950 active:bg-slate-950 border-[3px] border-yellow-400 flex items-center justify-center">
                            <Image src={WhatsappStroke} alt="whatsapp-icon" width={20} height={20} className="mr-2" />
                            Hubungi Kami
                        </Button>
                    </Link>
                </div>
            </DialogContent>
        </Dialog>

    )
}