import React, { useState } from 'react';
//code  -https://tailwindcomponents.com/component/simple-image-slider
const Courosel = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const images = [
    "https://unsplash.it/640/425?image=30",
    "https://unsplash.it/640/425?image=40",
    "https://unsplash.it/640/425?image=50",
  ];

  const previous = () => {
    if (currentIndex > 1) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const forward = () => {
    if (currentIndex < images.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <main className="grid min-h-screen w-full place-content-center bg-gray-900">
      <div className="relative mx-auto max-w-2xl overflow-hidden rounded-md bg-gray-100 p-2 sm:p-4">
        <div className="absolute right-5 top-5 z-10 rounded-full bg-gray-600 px-2 text-center text-sm text-white">
          <span>{currentIndex}</span>/<span>{images.length}</span>
        </div>

        <button onClick={previous} className="absolute left-5 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-gray-100 shadow-md">
          <i className="fas fa-chevron-left text-2xl font-bold text-gray-500"></i>
        </button>

        <button onClick={forward} className="absolute right-5 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-gray-100 shadow-md">
          <i className="fas fa-chevron-right text-2xl font-bold text-gray-500"></i>
        </button>

        <div className="relative h-80" style={{ width: "30rem" }}>
          {images.map((image, index) => (
            <div
              key={index}
              style={{
                display: currentIndex === index + 1 ? 'block' : 'none',
              }}
              className="absolute top-0 transition-transform duration-300"
            >
              <img src={image} alt="image" className="rounded-sm" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Courosel;
