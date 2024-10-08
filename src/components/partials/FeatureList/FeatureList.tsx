interface FeatureItemProps {
  title: string;
  description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ title, description }) => (
  <div className="py-5 md:py-8 border-b border-gray-200 last:border-b-0">
    <div className="flex flex-row items-center justify-center md:justify-end md:items-start">
      <div className="md:text-right">
        <h3 className="flex md:flex-row-reverse items-center font-bold text-xl lg:text-2xl italic mb-2 text-secondaryDark">
          {title}
          <span className="ml-2">✓</span>
        </h3>
        <p className="text-gray-600 md:text-lg">{description}</p>
      </div>
    </div>
  </div>
);

export default function FeatureList() {
  const features = [
    {
      title: '100% Akurat',
      description: 'Melalui berbagai uji dan kalibrasi untuk memastikan akurasi dalam pengukuran.',
    },
    {
      title: '100% Terjamin',
      description: 'Dirancang dengan mempertimbangkan aspek keamanan, baik untuk pengguna maupun untuk barang yang ditimbang.',
    },
    {
      title: '#1 Kualitas',
      description: 'Terbuat dari bahan berkualitas tinggi yang memastikan daya tahan dan ketahanan dalam penggunaan jangka panjang.',
    },
    {
      title: 'Kepatuhan Regulasi Indonesia',
      description: 'Membantu memastikan bahwa bisnis atau individu mematuhi peraturan dan standar yang berlaku di Indonesia.',
    },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto px-4">
      {features.map((feature, index) => (
        <FeatureItem key={index} title={feature.title} description={feature.description} />
      ))}
    </div>
  );
}
