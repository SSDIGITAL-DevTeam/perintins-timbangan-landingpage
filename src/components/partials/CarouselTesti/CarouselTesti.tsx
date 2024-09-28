'use client';

import * as React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Star1 } from 'iconsax-react';

interface AvatarProps {
  name: string;
}

const Avatar: React.FC<AvatarProps> = ({ name }) => {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 3)
    .toUpperCase();
  const colors = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500'];
  const colorIndex = initials.charCodeAt(0) % colors.length;

  return <div className={`w-12 h-12 rounded-full ${colors[colorIndex]} flex items-center justify-center text-white font-bold text-lg`}>{initials}</div>;
};

interface TestimonialProps {
  text: string;
  name: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ text, name }) => {
  return (
    <div className="flex flex-col h-full justify-between p-6 bg-white rounded-2xl shadow-md gap-y-14">
      <p className="text-justify font-medium flex-grow">{text}</p>
      <div className="flex flex-col items-center justify-center mt-4">
        <div className="flex gap-x-1">
          {[...Array(5)].map((_, i) => (
            <Star1 key={i} size={20} variant="Bold" className="text-yellow-500" />
          ))}
        </div>
        <div className="flex flex-col items-center gap-y-1 mt-3">
          <Avatar name={name} />
          <p className="font-semibold text-sm mt-2 capitalize">{name}</p>
        </div>
      </div>
    </div>
  );
};

export function CarouselTesti() {
  const testimonials = [
    {
      text: 'Have purchased twice with different types of scales. Customer service: okay. Scales: okay. Aftersales agreement is also okay. Good luck',
      name: 'Johan Tobing',
    },
    {
      text: 'Quick response to all customers, friendly staffs including the owner, full sharing one another before we choose & decide to buy, 3 thumbs up for this store 👍🏻👍🏻👍🏻',
      name: 'Schnickschnack MAFAN LEBEN',
    },
    {
      text: 'The service from the employees is good, they explain in detail, the prices are also cheaper than others.',
      name: 'Deska arleta Ramadani',
    },
    {
      text: 'The service is very good in the shop and in the service, The quality of the goods is also very good, Great shopping at the Indonesian Digital Weighing Center.',
      name: 'Nurul Safitri',
    },
    {
      text: 'The service is satisfying, the staff & owner are friendly, the explanations given are also clear. Recommended for those looking for scales 👍🏼.',
      name: 'Jeny Winata',
    },
    {
      text: 'Good quality, lots of gifts, buy lots. Affordable prices and great guarantee. Will order next.',
      name: 'Frlix Medan',
    },
  ];

  return (
    <Carousel opts={{ align: 'start' }} className="w-full">
      <CarouselContent className="py-4">
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
            <div className="h-full">
              <Testimonial {...testimonial} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
