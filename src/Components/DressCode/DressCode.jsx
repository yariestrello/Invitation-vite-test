// src/Components/DressCode/DressCode.jsx
import "./DressCode.css";

export default function DressCode() {
  return (
    <section className="dresscode">
      <h2 className="dresscode__title">Código de Vestimenta</h2>

      <div className="dresscode__icons">
        <div className="dresscode__item">
          <img src="/img/DressCodeFormal.png" alt="Formal" />
          <p>Formal</p>
        </div>

        <div className="dresscode__item">
          <img src="/img/DressCodeWester.png" alt="Western Elegance" />
          <p>Western Elegance</p>
        </div>
      </div>

      <p className="dresscode__description">
        No mezclilla · No vestido blanco · No traje café 
      </p>
<br />
      {/* Sección: Colores reservados */}

  <h3 className="reserved-colors__title">Colores reservados</h3>
  <p className="reserved-colors__subtitle">
    Por favor, evita estos tonos (Damas de honor).
  </p>
<br />
  <div className="reserved-colors__swatches">
    <span className="swatch" style={{ backgroundColor: "#fac55c" }} aria-hidden="true" />
    <span className="swatch" style={{ backgroundColor: "#B0124D" }} aria-hidden="true" />
    <span className="swatch" style={{ backgroundColor: "#f96e33" }} aria-hidden="true" />
  </div>
</section>
    
  );
}