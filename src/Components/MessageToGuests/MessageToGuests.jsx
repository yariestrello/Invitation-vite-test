// src/components/message/MessageToGuests.jsx
import "./MessageToGuests.css";

export default function MessageToGuests() {
  return (
    <section className="message-section">
      <div className="message-container">
        <h2 className="message-title">Queridos invitados</h2>
        <br />
        <p className="message-text">
          Hay momentos que se guardan para siempre en el corazón.
          <br />
          Celebrar nuestro amor junto a ustedes hace este día aún más especial.
          <br />
          Gracias por acompañarnos y formar parte de los recuerdos que atesoraremos por siempre.
        </p>

        {/* ✅ Reemplazo: PNG de argollas con corazón */}
        <img
          className="message-ornament"
          src="/img/Designer.png"
          alt=""
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
