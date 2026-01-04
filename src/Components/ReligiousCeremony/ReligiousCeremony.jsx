import { useState } from "react";
import "./ReligiousCeremony.css";

export default function ReligiousCeremony() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    
    <section className="rc-card-section">
       <h2 className="rc-front-title">Ceremonia Religiosa</h2>
      <div
        className={`rc-card-container ${isFlipped ? "rc-flipped" : ""}`}
        onClick={handleFlip}
      >
        {/* ===== FRENTE (PORTADA) ===== */}
        <div className="rc-card-face rc-card-front">
          <div className="rc-front-overlay">
           
          </div>
        </div>

        {/* ===== REVERSO (DETALLES) ===== */}
        <div className="rc-card-face rc-card-back">
          <h3 className="rc-back-title">Ceremonia Religiosa</h3>

          <div className="rc-back-details">
            <p className="rc-back-place">
              Capilla Inmaculada Concepción “La Hibernia”
            </p>
            <p>Sábado 16 de Mayo · 5:00 PM</p>
            <p>Saltillo, Coahuila</p>
          </div>

          <div className="rc-back-buttons">
            <a
              href="https://maps.app.goo.gl/KLNVV3hgbBGZe4EAA"
              target="_blank"
              rel="noopener noreferrer"
              className="rc-btn rc-primary"
              onClick={(e) => e.stopPropagation()}
            >
              CÓMO LLEGAR
            </a>

            <a
              href="https://waze.com/ul?ll=25.4578552,-100.9463146&navigate=yes"
              target="_blank"
              rel="noopener noreferrer"
              className="rc-btn rc-secondary"
              onClick={(e) => e.stopPropagation()}
            >
              ABRIR EN WAZE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}