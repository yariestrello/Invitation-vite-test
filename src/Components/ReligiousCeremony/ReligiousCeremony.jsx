import "./ReligiousCeremony.css";

export default function ReligiousCeremony() {
  return (
    <section className="rc-section">

      {/* TÍTULO EXTERIOR */}
      <h1 className="rc-section-title">Ceremonia Religiosa</h1>

      <div className="rc-card-container">
        <div className="rc-card">

          {/* FRENTE */}
          <div className="rc-card-face rc-card-front">
            {/* solo imagen */}
          </div>

          {/* REVERSO */}
          <div className="rc-card-face rc-card-back">
            <h2 className="rc-back-title">Dirección</h2>

            <div className="rc-back-details">
              <p>Capilla Inmaculada Concepción “La Hibernia”</p>
              <p>Sábado 16 de Mayo · 5:00 PM</p>
              <p>Saltillo, Coahuila</p>
            </div>

            <div className="rc-back-buttons">
              <a
                href="https://maps.app.goo.gl/KLNVV3hgbBGZe4EAA"
                target="_blank"
                rel="noopener noreferrer"
              >
                CÓMO LLEGAR
              </a>

              <a
                href="https://waze.com/ul?ll=25.4578552,-100.9463146&navigate=yes"
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