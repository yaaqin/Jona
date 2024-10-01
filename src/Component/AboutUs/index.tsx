import React, { useRef } from 'react';
import useGsapScrollTrigger from '../../Hook/gsap';

const AboutUs: React.FC = () => {
    const leftRef = useRef<HTMLDivElement>(null);
    const rightRef = useRef<HTMLDivElement>(null);
  
    // Gunakan hook untuk bagian kiri (geser dari kiri)
    useGsapScrollTrigger(leftRef, 'left');
  
    // Gunakan hook untuk bagian kanan (geser dari kanan)
    useGsapScrollTrigger(rightRef, 'right');
  return (
    <section className="bg-white py-12 font-signika">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Section: Text */}
        <div ref={leftRef} className='mb-auto'>
          <h2 className="text-3xl font-bold mb-4">Tentang Kami</h2>
          <h3 className="text-xl font-semibold mb-2">Mengapa Memilih Jona?</h3>
          <p className="text-gray-700">
            Jona adalah platform jasa online yang menghubungkan Anda dengan tenaga profesional handal di berbagai bidang.
            Kami hadir untuk memudahkan Anda dalam menemukan dan memesan layanan dengan cepat, aman, dan terpercaya.
          </p>
        </div>

        {/* Right Section: Image */}
        <div ref={rightRef} className="h-64 w-full rounded-lg">
          {/* Replace the gray box with the actual image */}
          <img src="https://i.pinimg.com/736x/63/3a/62/633a621c209ee10b81e1c043e5b46291.jpg" alt="Tentang Kami" className="w-full h-full object-cover rounded-lg" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
