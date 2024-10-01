import React, { useRef } from 'react';
import useGsapScrollTrigger from '../../Hook/gsap';

const FAQSection: React.FC = () => {
    const gridRef = useRef<HTMLDivElement>(null); // Reference ke grid yang berisi card
  
    // Gunakan hook untuk animasi stagger pada card
    useGsapScrollTrigger(gridRef, 'bottom', {}, { from: 'start', amount: 0.3 });
  return (
    <section className="bg-white py-12 font-signika">
      <div className="container mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold mb-4">FAQ</h2>
        <p className="text-gray-600 mb-8">
          Cari tahu lebih banyak tentang bagaimana Jona dapat membantu Anda.
        </p>

        {/* FAQ Cards */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-gray-300 h-40 rounded-lg">
            {/* Placeholder for FAQ Content */}
            <p className="text-gray-700 py-16">FAQ 1</p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-300 h-40 rounded-lg">
            {/* Placeholder for FAQ Content */}
            <p className="text-gray-700 py-16">FAQ 2</p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-300 h-40 rounded-lg">
            {/* Placeholder for FAQ Content */}
            <p className="text-gray-700 py-16">FAQ 3</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
