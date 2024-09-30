import AssetTimbanganJembatan from '@/assets/webp/asset-timbangan-jembatan.webp';
import AssetLugageScale from '@/assets/webp/asset-luggage-scale.webp';
import AssetPricingScale from '@/assets/webp/asset-pricing-scale.webp';
import AssetBenchScale from '@/assets/webp/asset-bench-scale.webp';
import AssetCraneScale from '@/assets/webp/asset-crane-scale.webp';
import AssetPocketScale from '@/assets/webp/asset-pocket-scale.webp';

export type Product = {
  name: string;
  category: string;
  description: string;
  pdfLink: string;
  image: string;
};

export const products = [
  {
    name: 'Timbangan Jembatan Type Pitless',
    category: 'Weight Bridge',
    description:
      'Timbangan Jembatan Type Pitless tersedia dalam banyak kapasitas, diantaranya:\n\nPlatform Size: 2,4m x 4,8m\n- Capacity / Division: 20 Ton - 25 Ton / 10Kg\n\nPlatform Size: 3m x 6m\n- Capacity / Division: 20 Ton - 30 Ton / 10Kg\n\nPlatform Size: 3m x 9m\n* Capacity / Division: 40 Ton - 50 Ton / 10Kg\n\nPlatform Size: 3m x 10m\n* Capacity / Division: 40 Ton - 50 Ton / 10Kg\n\nPlatform Size: 3m x 12m\n* Capacity / Division: 40 Ton - 60 Ton / 10Kg\n\nPlatform Size: 3m x 15m\n* Capacity / Division: 50 Ton - 80 Ton / 10Kg\n\nPlatform Size: 3m x 18m\n* Capacity / Division: 60 Ton - 100 Ton / 10Kg',
    pdfLink: '#',
    image: AssetTimbanganJembatan.src,
  },
  {
    name: 'Smart Luggage Scale Type CH 150 Kapasitas 50Kg',
    category: 'Timbangan Koper',
    description:
      '--------------- FEATURES ---------------\n✔ LCD DISPLAY, ABS PLASTIC CASING\n✔ STAINLESS MANGANESE\n✔ PROFESSIONAL ACCURACY\n✔ POWER DC: 2 X 1.5V AAA BATTERIES\n\n--------------- SPECIFICATION ---------------\n✔ CAPACITY: 50 KG\n✔ DIVISION: 10 GR',
    pdfLink: 'https://drive.google.com/file/d/1ZmqDxZ5Ig7ErGQS6h5BHI33ikC4NtaGe/view',
    image: AssetLugageScale.src,
  },
  {
    name: 'Pricing Scale Merk Smart Type TM-30 F',
    category: 'Timbangan Buah',
    description:
      'Kapasitas: 30 kg x 10 gr\nUkuran Platform: 365 x 280 mm\nUkuran Timbangan: 375 x 445 x 180 mm\nTinggi Tiang Indicator: 380 mm\nPower: 220 v +10% - 15%\nTemperature: 0 ~ 40*C / -10 ~ 40*C\nPlatform: Stainless Steel\nBody: ABS Plastik\n\n--------------- FEATURES ---------------\n✔ Dapat Mengeprint harga beserta barcode\n✔ Dapat terhubung dengan komputer\n✔ Dapat menyimpan harga sebanyak 9000 item\n✔ Cocok digunakan di supermarket\n✔ Indikator double display',
    pdfLink: 'https://drive.google.com/file/d/1IOsyLI0CnHyV3S0vTH6XnYAyvZ1xBnfE/view',
    image: AssetPricingScale.src,
  },
  {
    name: 'Bench Scale Waterproof Merk FixScale Type A28E SS',
    category: 'Bench Scale Waterproof',
    description:
      '--------------- FEATURES ---------------\n✔ LED DISPLAY\n✔ HIGH QUALITY STAINLESS STEEL CONSTRUCTION\n✔ STAINLESS STEEL PLATFORM\n✔ ABS PLASTIC INDICATOR\n✔ COMMUNICATION RS 232 INTERFACE\n✔ EXTERNAL CALIBRATION, ANIMAL FUNCTION\n✔ POWER SUPPLY & RECHARGEABLE BATTERY\n\n--------------- SPECIFICATION ---------------\n✔ PLATFORM SIZE : 30cm x 40cm\nCAPACITY / DIVISION : 60kg / 5gr , 60kg / 10gr , 100kg / 20gr\n✔ PLATFORM SIZE : 40cm x 50cm\nCAPACITY / DIVISION : 150kg / 20gr , 200kg / 20gr , 300kg / 50gr\n✔ PLATFORM SIZE : 50cm x 60cm',
    pdfLink: 'https://drive.google.com/file/d/1nE3lZQu11BZBiHBjmBnRkiAbiVyLcV9V/view',
    image: AssetBenchScale.src,
  },
  {
    name: 'FixScale Crane Scale Type OCS X',
    category: 'Timbangan Gantung / Crane Scale',
    description:
      '--------------- FEATURES ---------------\n✔ LED DISPLAY, ALUMINUM DIE - CASTING CAS\n✔ AMERICAN STANDART FIXED SHACKLE & HOOK\n✔ HIGH STRENGTH LOAD RECEPTOR\n✔ INFRARED REMOTE CONTROL FOR SETTING\n✔ POWER ADAPTER & RECHARGEABLE BATTERY\n\n--------------- SPECIFICATION ---------------\n✔ CAPACITY : 1T/500gr , 2T/1kg , 3T/1kg , 5T/2kg',
    pdfLink: 'https://drive.google.com/file/d/1kKLO0t0Cu8vwbuccuotms_seCBSbpMW_/view',
    image: AssetCraneScale.src,
  },
  {
    name: 'Smart Timbangan Emas - Pocket Scale APTP 445 - 100gr / 0.01gr',
    category: 'Timbangan Emas',
    description: '--------------- FITURE ---------------\n✔ LCD DISPLAY, ABS PLASTIC CASING\n✔ PLATFROM STAINLESS STELL\n✔ HIGH RESOLUSI & SENSITIVE\n✔ POWER DC : 3 CR2032 BATTERY\n✔ DIMENSION SIZE : 95 X 55 X 20 MM',
    pdfLink: 'https://drive.google.com/file/d/1pzt6W4kei18NOZW3iQwR6dkkKXKe93U3/view',
    image: AssetPocketScale.src,
  },
];
