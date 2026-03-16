import { useState, useEffect } from "react";
import "./WeddingGallery.css";

const images = [
  "/img/img1.jpeg",
  "/img/img2.jpeg",
  "/img/img106.jpg",
  "/img/img165.jpg",
  "/img/img167.jpg",
  "/img/img140.jpg",
  "/img/img96.jpg",
  "/img/img43.jpg",
  "/img/img109.jpg",
  "/img/img65.jpg",
  "/img/img72.jpg",
  "/img/img64.jpg",
  "/img/img105.jpg",
  "/img/img5.jpg",
  "/img/img125.jpg",
  "/img/img51.jpg",
  "/img/img79.jpg",
];

export default function WeddingGallery() {

  const [index, setIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const visibleImages = [
    images[index % images.length],
    images[(index + 1) % images.length],
    images[(index + 2) % images.length],
  ];

  return (
    <section className="wg-section">

      {/* ✅ TÍTULO AGREGADO (no se cambió nada más) */}
      <h2 className="wg-title">Nuestra historia comienza aquí...</h2>

      <div className="wg-polaroid-strip">

        {visibleImages.map((img, i) => (
          <div
            key={i}
            className={`wg-polaroid wg-polaroid-${i}`}
            onClick={() => setSelectedImage(img)}
          >
            <img src={img} className="wg-polaroid-img" />
          </div>
        ))}

      </div>

      {selectedImage && (
        <div
          className="wg-lightbox"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            className="wg-lightbox-img"
          />
        </div>
      )}

    </section>
  );
}