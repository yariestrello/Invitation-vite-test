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
        No mezclilla · No vestido blanco · No traje café ·  
        No vestidos <strong>Dark Terracotta / Terracota "Especial Para Damas de honor"</strong>
      </p>
    </section>
  );
}