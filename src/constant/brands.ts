import BrandBarokah from '@/assets/webp/brand-barokah.webp';
import BrandComanche from '@/assets/webp/brand-comanche.webp';
import BrandFixScale from '@/assets/webp/brand-fixscale.webp';
import BrandKinleeVietnam from '@/assets/webp/brand-kinlee-vietnam.webp';
import BrandKinlee from '@/assets/webp/brand-kinlee.webp';
import BrandMavin from '@/assets/webp/brand-mavin.webp';
import BrandMetrics from '@/assets/webp/brand-metrics.webp';
import BrandRevere from '@/assets/webp/brand-revere.webp';
import BrandSmart from '@/assets/webp/brand-smart.webp';
import BrandYangster from '@/assets/webp/brand-yangster.webp';

export type Brand = {
  name: string;
  logo: string;
};

export const brands = [
  {
    name: 'Barokah',
    logo: BrandBarokah.src,
  },
  {
    name: 'Comanche',
    logo: BrandComanche.src,
  },
  {
    name: 'FixScale',
    logo: BrandFixScale.src,
  },
  {
    name: 'Kinlee Vietnam',
    logo: BrandKinleeVietnam.src,
  },
  {
    name: 'Kinlee',
    logo: BrandKinlee.src,
  },
  {
    name: 'Mavin',
    logo: BrandMavin.src,
  },
  {
    name: 'Metrics',
    logo: BrandMetrics.src,
  },
  {
    name: 'Revere',
    logo: BrandRevere.src,
  },
  {
    name: 'Smart',
    logo: BrandSmart.src,
  },
  {
    name: 'Yangster',
    logo: BrandYangster.src,
  },
];
