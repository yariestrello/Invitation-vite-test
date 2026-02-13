import { useState, useEffect, useRef } from "react";
import "./WeddingGallery.css";

const images = [
  "/img/img1.jpeg",
  "/img/img2.jpeg",
  "/img/img3.jpeg",
  "/img/img4.jpeg",
  "/img/img5.jpeg",
  "/img/img6.jpeg",
  "/img/img7.jpeg",
  "/img/img8.jpeg",
];

export default function WeddingGallery({
  showNames = true,
  names = "YARITZA & GAEL",
  dateOrNote = "",
  fontFamilyNames = "'Playfair Display','Libre Baskerville',Georgia,serif",
  // controla el ancho máximo del poster en desktop
  frameMaxWidth = 720 // px
}) {
  const [current, setCurrent] = useState(0);
  const total = images.length;
  const autoplayRef = useRef(null);

  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      setCurrent((p) => (p + 1) % total);
    }, 4000);
    return () => clearInterval(autoplayRef.current);
  }, [total]);

  const next = () => setCurrent((p) => (p + 1) % total);
  const prev = () => setCurrent((p) => (p - 1 + total) % total);

  return (
    <section
      className="wg-section wg-bg"
      aria-label="Galería de nuestra historia"
      style={{
        ["--wg-bg-url"]: 'url("/img/fondoBlancoNew.jpeg")',
        ["--wg-frame-max"]: `${frameMaxWidth}px`,
        ["--names-font"]: fontFamilyNames
      }}
    >
      <div className="wg-container">
        <button className="wg-arrow wg-left" onClick={prev} aria-label="Anterior">‹</button>

        <figure className="wg-frame" tabIndex={0}>
          {/* contador */}
          <div className="wg-pill">{current + 1} de {total}</div>

          {/* ✅ IMAGEN REAL (antes faltaba el tag) */}
          <img
            src={images[current]}
            alt={`Momento especial ${current + 1}`}
            className="wg-image"
            loading="lazy"
            decoding="async"
          />

          {/* viñeta */}
          <div className="wg-vignette" aria-hidden />

          {/* nombres opcionales */}
          {showNames && (
            <figcaption className="wg-caption">
              <h3 className="wg-cardTitle">{names}</h3>
              {dateOrNote ? <p className="wg-author">{dateOrNote}</p> : null}
            </figcaption>
          )}

          {/* papel rasgado */}
          <div className="wg-torn" aria-hidden />
        </figure>

        <button className="wg-arrow wg-right" onClick={next} aria-label="Siguiente">›</button>
      </div>

      {/* dots */}
      <div className="wg-dots" role="tablist" aria-label="Seleccionar imagen">
        {images.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === current}
            className={`wg-dot ${i === current ? "wg-active" : ""}`}
            onClick={() => setCurrent(i)}
            aria-label={`Ir a la imagen ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}