import {
    Dialog,
    DialogContent,
    DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import AssetPromoJumboPopUp from "@/assets/webp/popup/asset-popup-promo-jumbo.webp"
import Link from "next/link";
import { ChevronsRight } from "lucide-react";

export default function DialogFullImage({ waLink, id }: { waLink: string, id: string }) {
    return (
        <Dialog defaultOpen={true} key={id}>
            <DialogTitle className="hidden">Promo Dialog</DialogTitle>
            <DialogContent className="overflow-hidden flex md:flex-row flex-col w-fit gap-4 justify-start min-w-[50vw] md:min-w-[60vw]">
                <div className="w-fit h-fit">
                    <Image
                        src={AssetPromoJumboPopUp}
                        alt="dialog-discount"
                        width={1920}
                        height={1080}
                        quality={100}
                        className="object-cover md:min-w-[60vh] h-full"
                    />
                </div>

                {/* Konten */}
                <div className="p-8 pt-0 md:pt-6 md:py-6 md:px-12 flex flex-col gap-5 justify-center md:items-start items-center w-full">
                    <h1 className="uppercase font-bold text-xl md:text-3xl lg:text-4xl text-primary !leading-[140%] text-center md:text-left">
                        PROMO JUMBO
                    </h1>

                    {/* Teks Deskripsi */}
                    <div className="max-h-24 md:max-h-full lg:h-[26vh] md:overflow-y-scroll overflow-y-auto text-center md:text-left">
                        <p className="text-gray-800 text-sm sm:text-base lg:text-xl !leading-[150%]">
                            Selama bulan{" "}<span className="text-primary font-semibold">Juni 2025</span>, kamu bisa menikmati potongan harga spesial untuk berbagai produk pilihan dari merk{" "}
                            <span className="text-primary font-semibold">Barokah</span>. Manfaatkan momen ini untuk mendapatkan produk berkualitas dengan harga yang lebih hemat. Promo terbatas, hanya berlaku hingga akhir bulan!
                        </p>
                    </div>

                    {/* Tombol WhatsApp */}
                    <Link
                        id={"promo-jumbo"}
                        href={"https://perintistimbanganindonesia.co.id/promo#promo-jumbo"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full"
                    >
                        <Button className="w-full rounded-full py-1 sm:py-2 lg:py-3 text-sm md:text-base lg:text-lg tracking-[1px] bg-primary hover:bg-red-700 active:bg-red-700 flex items-center justify-center font-semibold gap-2 shadow-md mt-2 lg:mt-4 px-4">
                            Lihat Selengkapnya <ChevronsRight className="w-5 h-5 md:w-8 md:h-8 mt-1" />
                        </Button>
                    </Link>
                </div>
            </DialogContent>
        </Dialog>
    );
}
