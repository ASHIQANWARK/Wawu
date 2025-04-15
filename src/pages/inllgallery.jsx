import React from 'react';

const InllGallery = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-950 via-blue-800 to-blue-950">
      <div className="text-center px-6 py-8 bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white uppercase drop-shadow-lg">
          Coming Soon
        </h1>
        <p className="mt-4 text-lg text-gray-200">
          We're working on something amazing. Stay tuned!
        </p>
      </div>
    </div>
  );
};

export default InllGallery;
