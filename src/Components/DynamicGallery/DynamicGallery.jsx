import "./DynamicGallery.css";

export default function DynamicGallery() {
  return (
    <section className="gallery">
      
      {/* Lado izquierdo */}
      <div className="gallery__left">
        <h2 className="gallery__title">
          Únete a nuestra<br />Galería Dinámica
        </h2>
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

        <div className="gallery__buttons">
          <a href="#" className="gallery__button secondary">
            Ir a la galería
          </a>
        </div>

        <p className="gallery__note">
          *Podrás subir fotos y videos solo durante el evento
        </p>
      </div>

    </section>
  );
};