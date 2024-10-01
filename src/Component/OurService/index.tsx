import React, { useRef } from 'react';
import { JonaBersihIcon } from '../Icon';
import useGsapScrollTrigger from '../../Hook/gsap';

const OurService: React.FC = () => {
    const gridRef = useRef<HTMLDivElement>(null); // Reference ke grid yang berisi card

    // Gunakan hook untuk animasi stagger pada card
    useGsapScrollTrigger(gridRef, 'bottom', {}, { from: 'start', amount: 0.3 });
    return (
        <section className="bg-white py-12 font-signika">
            <div className="container mx-auto text-center">
                {/* Section Heading */}
                <h2 className="text-3xl font-bold mb-4">Layanan Kami</h2>
                <p className="text-gray-600 mb-8">
                    Kami menyediakan berbagai jenis jasa untuk memenuhi kebutuhan Anda, mulai dari layanan harian hingga layanan khusus.
                </p>

                {/* Cards */}
                <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="bg-white border-[#E9E9E9] border-[1px] rounded-xl justify-center p-6">
                        <div className='flex justify-center mb-8'>
                            <JonaBersihIcon />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Belum Ada Transaksi!</h3>
                        <p className="text-gray-500">
                            Sepertinya riwayat transaksi kamu masih kosong nih. Ayo, mulai jelajahi dan buat transaksi pertama kamu sekarang!
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white border-[#E9E9E9] border-[1px] rounded-xl justify-center p-6">
                        <div className='flex justify-center mb-8'>
                            <JonaBersihIcon />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Belum Ada Transaksi!</h3>
                        <p className="text-gray-500">
                            Sepertinya riwayat transaksi kamu masih kosong nih. Ayo, mulai jelajahi dan buat transaksi pertama kamu sekarang!
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white border-[#E9E9E9] border-[1px] rounded-xl justify-center p-6">
                        <div className='flex justify-center mb-8'>
                            <JonaBersihIcon />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Belum Ada Transaksi!</h3>
                        <p className="text-gray-500">
                            Sepertinya riwayat transaksi kamu masih kosong nih. Ayo, mulai jelajahi dan buat transaksi pertama kamu sekarang!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurService;
