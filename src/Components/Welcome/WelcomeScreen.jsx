import "./Welcome.css";

export default function WelcomeScreen({ onOpen }) {
  return (
    <section className="welcome">
      <div className="welcome__content">
        {/* Botón protagonista */}
        <button
          className="welcome__button"
          onClick={onOpen}
          aria-label="Abrir invitación"
        >
          <span className="welcome__button-initials">Y&G</span>
        </button>

        <br />

        {/* Texto debajo del botón */}
        <p className="welcome__below-text">Nuestra Boda</p>
      </div>
    </section>
  );
}