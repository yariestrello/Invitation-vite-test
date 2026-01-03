// src/Components/Gifts/Gifts.jsx
import "./Gifts.css";

export default function Gifts() {
  return (
    <section className="gifts">
      <h2 className="gifts__title">Mesa de Regalos</h2>

      <p className="gifts__text">
        Agradecemos profundamente su compañía en este día tan especial.
        Su presencia es nuestro mejor regalo; si desean obsequiarnos algo adicional, podrán hacerlo a través de las siguientes opciones:
      </p>

      <div className="gifts__options">
        <div className="gift__card">
          <span className="gift__icon">🎁</span>
          <h3>Mesa de Regalos</h3>
          <p>Tienda departamental</p>
        </div>

        <div className="gift__card">
          <span className="gift__icon">💌</span>
          <h3>Sobre</h3>
          <p>Sobre con dinero en efectivo</p>
        </div>

        <div className="gift__card">
          <span className="gift__icon">💳</span>
          <h3>Transferencia</h3>
          <p>Cuenta Clabe: xxxxxxxxxxxxxx </p>
          <p>Nombre: Yaritza Estrello </p>
        </div>
      </div>
    </section>
  );
}