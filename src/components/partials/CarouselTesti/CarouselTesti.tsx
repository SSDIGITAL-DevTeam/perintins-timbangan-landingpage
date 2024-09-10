import * as React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Image from 'next/image';

import AssetTestimonial1 from '@/assets/png/asset-testimonial-1.png';
import AssetTestimonial2 from '@/assets/png/asset-testimonial-2.png';
import AssetTestimonial3 from '@/assets/png/asset-testimonial-3.png';
import AssetTestimonial4 from '@/assets/png/asset-testimonial-4.png';
import AssetTestimonial5 from '@/assets/png/asset-testimonial-5.png';
import AssetTestimonial6 from '@/assets/png/asset-testimonial-6.png';

export function CarouselTesti() {
  return (
    <Carousel opts={{ align: 'start' }} className="w-full">
      <CarouselContent className="">
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <Image src={AssetTestimonial1} alt="Testimonial 1" />
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <Image src={AssetTestimonial2} alt="Testimonial 2" />
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <Image src={AssetTestimonial3} alt="Testimonial 3" />
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <Image src={AssetTestimonial4} alt="Testimonial 4" />
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <Image src={AssetTestimonial5} alt="Testimonial 5" />
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <Image src={AssetTestimonial6} alt="Testimonial 6" />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
