'use client';

import { Brand, brands } from '@/constant/brands';
import Image from 'next/image';
import { JSX } from 'react';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';

const animation = { duration: 9000, easing: (t: number) => t };

export default function BrandsMarquee(): JSX.Element {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: 'performance',
    drag: true,
    breakpoints: {
      '(min-width: 300px)': {
        slides: {
          perView: 3,
        },
      },
      '(min-width: 600px)': {
        slides: {
          perView: 5,
        },
      },
    },

    created: (s) => {
      s.moveToIdx(6, true, animation);
    },
    updated: (s) => {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded: (s) => {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });

  return (
    <div ref={sliderRef} className="keen-slider">
      {brands.map((brand: Brand, index: number) => (
        <div className="keen-slider__slide number-slide1 flex items-center" key={`brand-${index}`}>
          <Image width={159} height={56} src={brand.logo} alt={brand.name} className="w-[110px] lg:w-[165px]" />
        </div>
      ))}
    </div>
  );
}
