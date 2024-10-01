import React, { useRef } from 'react';
import useGsapScrollTrigger from '../../Hook/gsap';

const HomeHead: React.FC = () => {
    const leftRef = useRef<HTMLDivElement>(null);
    const rightRef = useRef<HTMLDivElement>(null);
  
    // Gunakan hook untuk bagian kiri (geser dari kiri)
    useGsapScrollTrigger(leftRef, 'left');
  
    // Gunakan hook untuk bagian kanan (geser dari kanan)
    useGsapScrollTrigger(rightRef, 'right');
  return (
    <div className="container mx-auto p-6 bg-white font-signika">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Section: Text */}
        <div ref={leftRef} className="text-left max-w-[500px]">
          <h1 className="text-6xl font-bold text-yellow-500 mb-4">
            Jasa Online Nusantara <span className="text-[#4F3721]">untuk Kebutuhan Anda</span>
          </h1>
          <p className="text-gray-700 mb-6 text-sm ">
            Temukan dan pesan layanan profesional terbaik melalui Jona. Dari kebersihan hingga perbaikan, kami siap membantu Anda!
          </p>
          <div className="flex space-x-4">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-8 rounded">
              Unduh Aplikasi JONA
            </button>
            <button className="border border-gray-400 text-[#4F3721] hover:bg-gray-200 font-bold py-2 px-8 rounded">
              Lihat Selengkapnya
            </button>
          </div>
        </div>

        {/* Right Section: Image */}
        <div ref={rightRef} className="flex justify-center">
          <img
            src="/assets/BannerHome.png"
            alt="Jasa Online Nusantara"
            className="max-w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeHead;
