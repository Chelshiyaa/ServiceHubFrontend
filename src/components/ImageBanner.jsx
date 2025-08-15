import React from 'react';
import backgroundImage from '../../assests/workers.png'; // Check spelling: "assets" not "assests"

const ImageBanner = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div
          className="max-w-5xl mx-auto h-96 rounded-xl shadow-lg relative flex items-center justify-center overflow-hidden"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
          }}
        >
          <div className="absolute inset-0 bg-gray-900 bg-opacity-30 flex items-center justify-center">
            <h2 className="text-4xl font-extrabold text-white text-center">
              ServiceHub Professionals
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageBanner;
