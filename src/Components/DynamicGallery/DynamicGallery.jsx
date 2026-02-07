import "./DynamicGallery.css";

export default function DynamicGallery() {
  return (
    <section className="gallery">
      
      {/* Lado izquierdo */}
      <div className="gallery__left">
        <h2>Únete a nuestra<br />Galería Dinámica</h2>
        <p>
          Comparte con nosotros cada sonrisa, cada abrazo y cada momento
          especial de este día tan importante.
        </p>
      </div>

      {/* Lado derecho */}
      <div className="gallery__right">

        <img 
          src="/img/Camara.png" 
          alt="Cámara" 
          className="gallery__icon"
        />
        <p className="gallery__subtitle">
          Descarga la app y entra como invitado
        </p>

        <div className="gallery__buttons">
          <a href="#" className="gallery__button primary">
            Descargar App
          </a>

          <a href="#" className="gallery__button secondary">
            Entrar como invitado
          </a>
        </div>

        <p className="gallery__note">
          *Podrás subir fotos y videos durante el evento
        </p>
      </div>

    </section>
  );
}