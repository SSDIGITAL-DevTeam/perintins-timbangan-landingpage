import { PhoneCall, UserCheck, Wrench } from 'lucide-react';

export default function PelayananSection() {
  return (
    <section className="flex flex-col py-[50px] lg:py-[100px] px-4 lg:px-8 overflow-x-hidden">
      <div className="container mx-auto">
        <h1 className="font-bold text-center text-3xl lg:text-4xl xl:text-6xl mb-16">
          Pelayanan <span className="text-secondary">Kami</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-6">
              <PhoneCall className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Respon Cepat</h3>
            <p className="text-gray-600">Tim kami siap memberikan tanggapan secara cepat dan efektif untuk setiap pertanyaan dan kebutuhan terkait produk timbangan.</p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-6">
              <UserCheck className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Pelayanan Ramah dan Profesional</h3>
            <p className="text-gray-600">Layanan kami didukung oleh tim yang ramah dan berpengalaman. Kami siap membantu Anda dengan solusi timbangan terbaik.</p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-6">
              <Wrench className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Dukungan Teknis Berkelanjutan</h3>
            <p className="text-gray-600">Kami menawarkan layanan purna jual yang mencakup dukungan teknis dan konsultasi kapan pun Anda membutuhkannya, memastikan timbangan Anda selalu berfungsi optimal.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
