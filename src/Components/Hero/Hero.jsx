import "./Hero.css";

export default function Hero({ onToggleMusic, isPlaying }) {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <h1 className="hero-names">Yaritza & Gael</h1>
        <p className="hero-date">16 · Mayo · 2026</p>
      </div>

      {/* BOTÓN DE MÚSICA — SIEMPRE VISIBLE */}
      <button
        className="music-float-btn"
        onClick={onToggleMusic}
        aria-label="Control de música"
      >
        {isPlaying ? (
          /* PAUSA */
          <svg viewBox="0 0 24 24">
            <rect x="6" y="4" width="4" height="16" />
            <rect x="14" y="4" width="4" height="16" />
          </svg>
        ) : (
          /* PLAY */
          <svg viewBox="0 0 24 24">
            <polygon points="6,4 20,12 6,20" />
          </svg>
        )}
      </button>
    </section>
  );
}