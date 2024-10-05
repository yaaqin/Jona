import React, { useRef } from 'react';
import useGsapScrollTrigger from '../../Hook/gsap';

const WorkFlow: React.FC = () => {
    const leftRef = useRef<HTMLDivElement>(null);
    const rightRef = useRef<HTMLDivElement>(null);

    useGsapScrollTrigger(leftRef, 'left');

    useGsapScrollTrigger(rightRef, 'right');
    return (
        <section className="bg-white py-12 font-signika px-4">
            <div className="container mx-auto flex flex-col md:flex-row-reverse gap-8 items-center">
                <div ref={leftRef} className="mb-auto">
                    <h2 className="text-3xl font-bold mb-4">Cara Kerja</h2>
                    <h3 className="text-xl font-semibold mb-2">Mengapa Memilih Jona?</h3>
                    <p className="text-gray-700">
                        Jona adalah platform jasa online yang menghubungkan Anda dengan tenaga profesional handal di berbagai bidang.
                        Kami hadir untuk memudahkan Anda dalam menemukan dan memesan layanan dengan cepat, aman, dan terpercaya.
                    </p>
                </div>
                <div ref={rightRef} className="bg-gray-300 h-64 w-full rounded-lg">
                    <img
                        src="https://i.pinimg.com/736x/5b/4b/9b/5b4b9be6b6167d7a308ebd675dabc0b6.jpg"
                        alt="Cara Kerja"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default WorkFlow;
