"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
    Dialog,
    DialogContent,
    DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import GiftImage from "@/assets/png/gift.png"
import WhatsappStroke from '@/assets/svg/asset-whatsapp-stroke.svg'
import { FaWhatsapp } from "react-icons/fa6"

export default function DialogDiscount({ waLink, id }: { waLink: string, id: string }) {
    const [isOpen, setIsOpen] = useState<boolean>(true);
    return (
        <Dialog defaultOpen={true} open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="md:overflow-hidden w-[70%] h-[50vh] sm:w-[50%] md:w-fit md:h-fit gap-0 md:gap-4 justify-start">
                <DialogTitle className="hidden">Promo Dialog</DialogTitle>

                {/* Mobile*/}
                <div className="w-fit h-full md:hidden flex flex-col  absolute -top-20">
                    <div className="w-full md:hidden rounded-md max-w-[60%] mx-auto">
                        <Image
                            src={GiftImage}
                            alt="dialog-discount-mobile"
                            width={1920}
                            height={1080}
                            quality={100}
                            className="object-contain rounded-md"
                        />
                    </div>

                    {/* Konten */}
                    <div className="px-3 flex flex-col gap-2 sm:gap-4 justify-center items-center w-full bg-white h-full rounded-2xl pb-5">
                        <h1 className="w-full uppercase font-extrabold text-base sm:text-lg text-red-500 !leading-[130%] text-center">
                            🎉 PROMO SPESIAL TERBATAS!
                        </h1>

                        <div className="md:max-h-full text-left px-5 space-y-2">
                            <span className="text-gray-800 font-semibold text-sm">
                                Khusus untuk Anda, 3 promo eksklusif:
                            </span>
                            <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-gray-800 !leading-snug">
                                <li>
                                    <span className="font-semibold">🔥 Promo Mei-Nyala</span> – Potongan harga untuk produk dari merk Comanche dan Kinlee.
                                </li>
                                <li>
                                    <span className="font-semibold">🎊 Promo Meiriah</span> – Potongan harga untuk jenis timbangan laboratorium dan timbangan digital.
                                </li>
                                <li>
                                    <span className="font-semibold">🚀 Promo Toko 2025</span> – Jangan lewatkan kesempatan emas ini! Hanya sampai Desember 2025.
                                </li>
                            </ul>
                        </div>


                        {/* Tombol WhatsApp */}
                        <div className="space-y-2 mt-4">
                            <Link
                                id={id}
                                href={"https://www.perintistimbanganindonesia.co.id/promo"}
                                className="w-full flex justify-center"
                            >
                                <Button className="relative w-full rounded-full py-2 px-2 sm:px-5 text-xs sm:text-sm font-semibold tracking-[1px] bg-red-600 hover:bg-red-800 active:bg-red-800 text-white overflow-hidden before:content-[''] before:absolute before:inset-0 before:rounded-full before:shadow-[inset_0_4px_6px_rgba(255,255,255,0.35),inset_0_-4px_6px_rgba(0,0,0,0.35)] before:pointer-events-none">
                                    Klik Disini Untuk Melihat Promo!
                                </Button>

                            </Link>
                            <Link
                                id={id + 1}
                                href={waLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full flex justify-center"
                            >
                                <Button className="w-full rounded-full py-2 px-2 sm:px-5 lg:py-3  text-xs sm:text-sm font-semibold tracking-[1px] bg-white hover:bg-red-50 active:bg-red-800 border-[1px] border-red-800 text-red-800 active:text-white flex items-center gap-2">
                                    <FaWhatsapp className="w-3 h-3" /> Klaim Promonya Sekarang Yuk!
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Desktop */}
                <div className="w-fit h-full hidden md:flex flex-row">
                    <div className="hidden w-[44vw] bg-[#FADFDE] h-full md:flex md:justify-center">
                        <Image
                            src={GiftImage}
                            alt="dialog-discount"
                            width={1920}
                            height={1080}
                            quality={100}
                            className="object-contain w-full md:max-w-[80%]"
                        />
                    </div>

                    {/* Konten */}
                    <div className="p-3 sm:p-10 flex flex-col gap-3 md:gap-6 lg:gap-10 justify-center items-center w-full">
                        <h1 className="w-full uppercase font-extrabold text-lg sm:text-xl md:text-3xl lg:text-4xl text-red-500 !leading-[130%] text-center">
                            🎉 PROMO SPESIAL TERBATAS!
                        </h1>

                        <div className="md:max-h-full text-left px-5 space-y-5">
                            <span className="text-gray-800 font-semibold text-base md:text-lg lg:text-xl">
                                Khusus untuk Anda, 3 promo eksklusif:
                            </span>
                            <ul className="list-disc pl-5 space-y-2 text-sm md:text-[17px] text-gray-800 !leading-snug">
                                <li>
                                    <span className="font-semibold">🔥 Promo Mei-Nyala</span> – Potongan harga untuk produk dari merk Comanche dan Kinlee.
                                </li>
                                <li>
                                    <span className="font-semibold">🎊 Promo Meiriah</span> – Potongan harga untuk jenis timbangan laboratorium dan timbangan digital.
                                </li>
                                <li>
                                    <span className="font-semibold">🚀 Promo Toko 2025</span> – Jangan lewatkan kesempatan emas ini! Hanya sampai Desember 2025.
                                </li>
                            </ul>
                        </div>


                        {/* Tombol WhatsApp */}
                        <div className="space-y-2 md:space-y-4 w-[90%]">
                            <Link
                                id={id}
                                href={"https://www.perintistimbanganindonesia.co.id/promo"}
                                className="w-full flex justify-center"
                            >
                                <Button className="relative w-full rounded-full py-2 px-5 lg:py-3 text-sm lg:text-base font-semibold tracking-[1px] bg-red-600 hover:bg-red-800 active:bg-red-800 text-white overflow-hidden before:content-[''] before:absolute before:inset-0 before:rounded-full before:shadow-[inset_0_4px_6px_rgba(255,255,255,0.35),inset_0_-4px_6px_rgba(0,0,0,0.35)] before:pointer-events-none">
                                    Klik Disini Untuk Melihat Promo!
                                </Button>
                            </Link>
                            <Link
                                id={id + 1}
                                href={waLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full flex justify-center"
                            >
                                <Button className="w-full rounded-full py-2 px-5 lg:py-3 text-sm lg:text-base font-semibold tracking-[1px] bg-white hover:bg-red-50 active:bg-red-800 border-[1px] border-red-800 text-red-800 active:text-white flex items-center gap-4">
                                    <FaWhatsapp className="w-5 h-5" /> Klaim Promonya Sekarang Yuk!
                                </Button>
                            </Link>

                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}