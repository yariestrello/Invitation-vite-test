import "./CivilReception.css";

export default function CivilReception() {
  return (
    <section className="cr-section">

      {/* TÍTULO EXTERIOR */}
      <h1 className="cr-section-title">Recepción & Civil</h1>

      <div className="cr-card-container">
        <div className="cr-card">

          {/* FRENTE */}
          <div className="cr-card-face cr-card-front">
            {/* Imagen de portada */}
          </div>

          {/* REVERSO */}
          <div className="cr-card-face cr-card-back">
            <h2 className="cr-back-title">Dirección</h2>

            <div className="cr-back-details">
              <p>El Recuerdo Jardín,Torrecillas, 25298 </p>
              <p>Sábado 16 de Mayo · 6:30 PM</p>
              <p>Saltillo, Coahuila</p>
            </div>

            <div className="cr-back-buttons">
              <a
                href="https://maps.app.goo.gl/kgCBD5CzKxGPo58AA"
                target="_blank"
                rel="noopener noreferrer"
              >
                CÓMO LLEGAR
              </a>

              <a
                href="https://www.waze.com/ul?q=El+Recuerdo+Jard%C3%ADn"
                target="_blank"
                rel="noopener noreferrer"
              >
                ABRIR EN WAZE
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}