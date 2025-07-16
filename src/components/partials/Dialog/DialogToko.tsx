import {
    Dialog,
    DialogContent,
    DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import AssetPromoTokoPopUp from "@/assets/webp/popup/asset-promo-toko-image.webp"
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function DialogToko({id, waLink}: {id: string, waLink: string}) {
    return (
        <Dialog defaultOpen={true}>
            <DialogTitle className="hidden">Promo Dialog</DialogTitle>
            <DialogContent className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-start w-full max-w-[80%] sm:max-w-[60%] md:max-w-[40%] lg:max-w-[70%] xl:max-w-[60%] mx-auto sm:max-h-[90%]">
                <div className="bg-red-600 overflow-hidden rounded-t-xl lg:rounded-tr-none lg:rounded-s-xl min-h-[100px] sm:min-h-[120px] md:min-h-[190px]">
                    <Image
                        src={AssetPromoTokoPopUp}
                        alt="dialog-discount"
                        width={1920}
                        height={1080}
                        priority
                        quality={100}
                        className="object-contain w-full h-full aspect-square xl:min-h-[50vh]"
                    />
                </div>

                <div className="p-5 pt-0 md:pt-6 md:px-12 flex flex-col gap-3 md:gap-5 justify-center md:items-start items-center w-full">
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
                        id={id + "-wa"}
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full"
                    >
                        <Button className="w-full rounded-full py-2 sm:py-2 lg:py-3 text-sm md:text-base lg:text-lg tracking-[1px] bg-primary hover:bg-red-700 active:bg-red-700 flex items-center justify-center font-semibold gap-2 shadow-md mt-2 lg:mt-4 px-4">
                            <FaWhatsapp className="w-5 h-5 md:w-8 md:h-8 mt-1" /> Hubungi Kami
                        </Button>
                    </Link>
                </div>
            </DialogContent>
        </Dialog>
    );
}
