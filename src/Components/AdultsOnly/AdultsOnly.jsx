import "./AdultsOnly.css";

export default function AdultsOnly() {
  return (
    <section className="adults">
      
      {/* Texto */}
      <div className="adults__text">
        <h2>Un momento para disfrutar</h2>
        <p>
          Hemos soñado este día como un espacio para relajarnos,
          celebrar el amor y compartir con ustedes sin prisas.
        </p>
        <p>
          Por ello, hemos planeado una celebración
          <strong> exclusivamente para adultos</strong>,
          con la intención de que todos podamos disfrutar
          plenamente de este momento tan especial.
        </p>
        <p className="adults__thanks">
          Gracias por su comprensión y por acompañarnos con tanto cariño.
        </p>
      </div>

      {/* Imagen */}
      <div className="adults__image">
        <img src="/img/Pareja.jpg" alt="Nuestra historia" />
      </div>

    </section>
  );
}