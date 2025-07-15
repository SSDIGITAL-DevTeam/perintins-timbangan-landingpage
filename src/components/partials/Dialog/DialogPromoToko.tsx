import {
    Dialog,
    DialogContent,
    DialogTitle,
} from "@/components/ui/dialog";

import Image from "next/image";

import { Button } from "@/components/ui/button";

import AssetPromoToko2025 from "@/assets/png/gift.png"


import Link from "next/link";
import { ChevronsRight } from "lucide-react";

export default function DialogPromoToko({id, waLink}: {id: string, waLink: string}) {
    return (
        <Dialog defaultOpen={true}>
            <DialogTitle className="hidden">Promo Dialog</DialogTitle>
            <DialogContent className="grid grid-cols-1 lg:grid-cols-2 w-fit gap-4 justify-start min-w-[80vw] md:min-w-[60vw] min-h-[43vh] md:min-h-[55vh]">
                <div className="bg-[#FADFDE] rounded-t-2xl lg:rounded-tr-none lg:rounded-s-2xl relative min-h-[100px] sm:min-h-[190px]">
                    <Image
                        src={AssetPromoToko2025}
                        alt="dialog-discount"
                        width={1920}
                        height={1080}
                        priority
                        quality={100}
                        className="object-contain aspect-square w-[55vw] sm:h-[260px] md:h-[300px] lg:h-[300px] xl:h-[400px] absolute top-2 sm:top-16 lg:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    />
                </div>

                {/* Konten */}
                <div className="p-8 pt-0 md:pt-6 md:px-12 flex flex-col gap-5 justify-center md:items-start items-center w-full">
                    <h1 className="uppercase font-bold md:font-extrabold text-lg md:text-xl lg:text-2xl xl:text-3xl text-primary !leading-[140%] text-center md:text-left">
                        🎁 PROMO TOKO 2025
                    </h1>

                    {/* Teks Deskripsi */}
                    <div className="md:max-h-full text-center md:text-left">
                        <p className="text-gray-800/80 text-sm sm:text-base lg:text-base xl:text-xl !leading-[150%]">
                            Jangan lewatkan kesempatan emas ini! Hanya sampai{" "}<span className="text-primary font-semibold">Desember 2025.</span>{" "}Manfaatkan momen ini untuk mendapatkan produk berkualitas dengan harga yang lebih hemat.
                        </p>
                    </div>

                    {/* Tombol WhatsApp */}
                    <Link
                        id={id ?? "promo-jumbo"}
                        href={"https://perintistimbanganindonesia.co.id/promo#promo-toko"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full"
                    >
                        <Button className="w-full rounded-xl xl:rounded-full py-2 xl:py-3 text-sm lg:text-base xl:text-lg tracking-[1px] bg-primary hover:bg-red-700 active:bg-red-700 flex items-center justify-center font-semibold gap-2 shadow-md mt-2 lg:mt-4 px-4">
                            Lihat Selengkapnya <ChevronsRight className="w-5 h-5 md:w-8 md:h-8 mt-1" />
                        </Button>
                    </Link>
                </div>
            </DialogContent>
        </Dialog>
    );
}
