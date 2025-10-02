import React, { useState } from "react";
import adhaImg from "./assets/adha.png";
import barengImg from "./assets/bareng.png";
import dapurImg from "./assets/dapur.png";
import juaraImg from "./assets/juara.png";
import bolaImg from "./assets/bola.png";
import kumpulImg from "./assets/kumpul.png";
import futsalImg from "./assets/futsal.png";
import malemImg from "./assets/malem.png";
import malabarImg from "./assets/malabar.png";

const Gallery = () => {
  const photos = [
    { image: adhaImg },
    { image: barengImg },
    { image: dapurImg },
    { image: juaraImg },
    { image: futsalImg },
    { image: kumpulImg },
    { image: bolaImg },
    { image: malabarImg },
    { image: malemImg },
  ];

  const [showAll, setShowAll] = useState(false);

  // kalau showAll = false → cuma tampil 3 foto, kalau true → semua foto
  const visiblePhotos = showAll ? photos : photos.slice(0, 3);

  return (
    <div className="bg-white min-h-screen flex flex-col items-center py-10">
      <h2 className="text-3xl font-bold text-cyan-600 mb-10">My Gallery 📷</h2>

      <div className="flex flex-wrap gap-6 justify-center">
        {visiblePhotos.map((photo, i) => (
          <div
            key={i}
            className="rounded-2xl shadow-lg overflow-hidden w-72 hover:scale-105 transform transition duration-300"
          >
            <img
              src={photo.image}
              alt={`gallery-${i}`}
              className="w-full h-72 object-cover"
            />
          </div>
        ))}
      </div>

      {/* Tombol toggle tetap ada */}
      <button
        onClick={() => setShowAll(!showAll)}
        className="mt-8 px-6 py-2 bg-white-600 text-black font-semibold rounded-lg shadow-md hover:bg-cyan-700 transition duration-300"
      >
        {showAll ? "Tutup" : "Lihat Semua"}
      </button>
    </div>
  );
};

export default Gallery;
