import "./CivilReception.css";

export default function CivilReception() {
  return (
    <section className="ceremony">
      {/* Video de fondo */}
      <video
        className="ceremony__video"
        src="/Videos/VideoElRecuerdo.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay oscuro para legibilidad */}
      <div className="ceremony__overlay" />

      {/* Contenido encima del video */}
      <div className="ceremony__content">
        <h2 className="ceremony__title">Ceremonia Civil 
        <br></br> & Recepción</h2>

        <div className="ceremony__details">
          <p>📍 Calle Manantiales entre Blvd. Luis Donaldo Colosio y Blvd. Jesús Valdez Sánchez</p>
          <p>🕊️ Sábado 16 de Mayo · 6:00 PM</p>
          <p>📌 Saltillo, Coahuila</p>
        </div>

        <div className="ceremony__buttons">
          <a
            href="https://maps.app.goo.gl/9x2C9X4odTgSn9Si7"
            target="_blank"
            rel="noopener noreferrer"
            className="ceremony__button primary"
          >
            📍 Cómo llegar
          </a>

          <a
            href="https://waze.com/ul?ll=25.4434351,-100.9281122&navigate=yes"
            target="_blank"
            rel="noopener noreferrer"
            className="ceremony__button secondary"
          >
            📍Abrir en Waze
          </a>
        </div>
      </div>
    </section>
  );
}