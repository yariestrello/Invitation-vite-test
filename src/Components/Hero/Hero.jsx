import "./Hero.css";

export default function Hero({ onToggleMusic, isPlaying }) {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2 className="hero-title">Nuestra Historia</h2>

        <img
          src="/img/fondoDosNew.jpeg"
          alt="Ilustración pareja"
          className="hero-image"
        />

        <div className="hero-divider"></div>

        <h1 className="hero-names">Yaritza & Gael</h1>
        <p className="hero-date">16 · Mayo · 2026</p>
      </div>

      {/* BOTÓN DE MÚSICA — NO SE TOCA */}
      <button
        className="music-float-btn"
        onClick={onToggleMusic}
        aria-label="Control de música"
      >
        {isPlaying ? (
          <svg viewBox="0 0 24 24">
            <rect x="6" y="4" width="4" height="16" />
            <rect x="14" y="4" width="4" height="16" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24">
            <polygon points="6,4 20,12 6,20" />
          </svg>
        )}
      </button>
    </section>
  );
}