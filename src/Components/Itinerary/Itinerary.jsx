// src/Components/Itinerary/Itinerary.jsx
import "./Itinerary.css";

export default function Itinerary() {
  return (
    <section className="timeline">
      <h2 className="timeline__title">Itinerario</h2>

      <div className="timeline__container">

        <div className="timeline__item left">
          <span className="time">5:00 PM</span>
          <p className="event">⛪ Ceremonia Religiosa</p>
        </div>

        <div className="timeline__item right">
          <span className="time">6:30 PM</span>
          <p className="event">💍 Ceremonia Civil</p>
        </div>

        <div className="timeline__item left">
          <span className="time">7:00 PM</span>
          <p className="event">🥂 Brindis & Cocktail</p>
        </div>

        <div className="timeline__item right">
          <span className="time">7:30 PM</span>
          <p className="event">💃 Vals & Baile</p>
        </div>

        <div className="timeline__item left">
          <span className="time">9:30 PM</span>
          <p className="event">🍽️ Cena</p>
        </div>

        <div className="timeline__item right">
          <span className="time">Hasta 1:30 AM</span>
          <p className="event">🎉 Resto del Baile</p>
        </div>

        {/* Línea central */}
        <span className="timeline__line"></span>
      </div>
    </section>
  );
}