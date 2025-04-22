import {
    Dialog,
    DialogContent,
    DialogTitle,
} from "@/components/ui/dialog"
import Image from "next/image"
// import DiscountImage from '@/assets/webp/asset-discount-ramadhan.webp'
// import DiscountImageMobile from '@/assets/webp/asset-dicount-ramadhan-mobile.webp'
import DiscountTanggalKembar from '@/assets/webp/asset-discount-tanggal-kembar.webp'
import { Button } from "@/components/ui/button"
import WhatsappStroke from '@/assets/svg/asset-whatsapp-stroke.svg'
import Link from "next/link"
export default function DialogDiscount({ waLink, id }: { waLink: string, id: string }) {

    return (
        <Dialog defaultOpen={true}>
            <DialogContent className="overflow-hidden flex md:flex-row flex-col w-[90%] md:w-fit gap-0 md:gap-4 justify-start">
                <DialogTitle className="hidden">Promo Dialog</DialogTitle>
                {/* Gambar */}
                <div className="w-full h-[80%] sm:h-[70vh] md:hidden rounded-md">
                    <Image
                        src={DiscountTanggalKembar}
                        alt="dialog-discount-mobile"
                        width={1920}
                        height={1080}
                        quality={100}
                        className="object-cover w-full h-full rounded-md"
                    />
                </div>
                <div className="w-full md:w-[60vh] h-full hidden md:block">
                    <Image
                        src={DiscountTanggalKembar}
                        alt="dialog-discount"
                        width={1920}
                        height={1080}
                        quality={100}
                        className="object-cover w-full h-full"
                    />
                </div>

                {/* Konten */}
                <div className="p-6 flex flex-col gap-2 md:gap-4 justify-center items-center w-full min-h-[180px]">
                    <h1 className="w-full uppercase font-bold text-xl md:text-3xl text-red-500 !leading-[130%] text-center md:text-left">
                        PROMO PERGANTIAN SPAREPART
                    </h1>

                    {/* Teks dengan Scroll */}
                    <div className="max-h-24 md:max-h-full overflow-y-auto text-center md:text-left">
                        <p className="text-gray-900 !leading-[150%] lg:text-lg text-sm">
                            Jangan lewatkan kesempatan emas ini! Hanya sampai
                            <span className="text-red-500 font-semibold"> Desember 2025</span>
                            , nikmati
                            <span className="text-red-500 font-semibold"> potongan 30% </span>
                            untuk semua layanan pergantian sparepart. S & K berlaku
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
                        <Button className="w-full rounded-full py-2 lg:py-3 text-sm lg:text-lg font-semibold tracking-[1px] mt-3 md:mt-6 bg-red-500 hover:bg-red-800 active:bg-red-800 flex items-center justify-center">
                            <Image src={WhatsappStroke} alt="whatsapp-icon" width={20} height={20} className="mr-2" />
                            Hubungi Kami
                        </Button>
                    </Link>
                </div>
            </DialogContent>
        </Dialog>

    )
}