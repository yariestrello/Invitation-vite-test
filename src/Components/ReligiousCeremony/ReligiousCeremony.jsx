import "./religiousCeremony.css";

export default function ReligiousCeremony() {
  return (
    <section className="ceremony">
      {/* Video de fondo */}
      <video
        className="ceremony__video"
        src="/Videos/VideoHibernia.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay oscuro para legibilidad */}
      <div className="ceremony__overlay" />

      {/* Contenido encima del video */}
      <div className="ceremony__content">
        <h2 className="ceremony__title">Ceremonia Religiosa</h2>

        <div className="ceremony__details">
          <p>📍 Capilla Inmaculada Concepción " La Hibernia"</p>
          <p>🕊️ Sábado 16 de Mayo · 5:00 PM</p>
          <p>📌 Saltillo, Coahuila</p>
        </div>

        <div className="ceremony__buttons">
          <a
            href="https://maps.app.goo.gl/KLNVV3hgbBGZe4EAA"
            target="_blank"
            rel="noopener noreferrer"
            className="ceremony__button primary"
          >
            📍 Cómo llegar
          </a>

          <a
            href="https://waze.com/ul?ll=25.4578552,-100.9463146&navigate=yes"
            target="_blank"
            rel="noopener noreferrer"
            className="ceremony__button secondary"
          >
            🚗 Abrir en Waze
          </a>
        </div>
      </div>
    </section>
  );
}