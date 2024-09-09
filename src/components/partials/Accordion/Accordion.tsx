import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1" className="py-2">
        <AccordionTrigger className="flex flex-row-reverse items-center font-bold text-2xl hover:no-underline text-secondaryDark italic">100% Akurat</AccordionTrigger>
        <AccordionContent className="py-6 text-lg">melalui berbagai uji dan kalibrasi untuk memastikan akurasi dalam pengukuran.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="py-2">
        <AccordionTrigger className="flex flex-row-reverse items-center font-bold text-2xl hover:no-underline text-secondaryDark italic">100% Terjamin</AccordionTrigger>
        <AccordionContent className="py-6 text-lg">dirancang dengan mempertimbangkan aspek keamanan, baik untuk pengguna maupun untuk barang yang ditimbang.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" className="py-2">
        <AccordionTrigger className="flex flex-row-reverse items-center font-bold text-2xl hover:no-underline text-secondaryDark italic">#1 Kualitas</AccordionTrigger>
        <AccordionContent className="py-6 text-lg">terbuat dari bahan berkualitas tinggi yang memastikan daya tahan dan ketahanan dalam penggunaan jangka panjang.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4" className="py-2">
        <AccordionTrigger className="flex flex-row-reverse items-center font-bold text-2xl hover:no-underline text-secondaryDark italic">Kepatuhan Regulasi Indonesia</AccordionTrigger>
        <AccordionContent className="py-6 text-lg">membantu memastikan bahwa bisnis atau individu mematuhi peraturan dan standar yang berlaku di Indonesia.</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
