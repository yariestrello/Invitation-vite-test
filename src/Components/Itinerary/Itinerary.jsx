// src/Components/Itinerary/Itinerary.jsx
import "./Itinerary.css";

const events = [
  {
    time: "5:00 PM",
    title: "Ceremonia Religiosa",
    icon: "/img/icono iglesia.png",
    alt: "Ceremonia religiosa"
  },
  {
    time: "6:30 PM",
    title: "Ceremonia Civil",
    icon: "/img/Icono civil.png",
    alt: "Ceremonia civil"
  },
  {
    time: "7:00 PM",
    title: "Brindis & Cocktail",
    icon: "/img/copas.png",
    alt: "Brindis"
  },
  {
    time: "7:30 PM",
    title: "Vals & Baile",
    icon: "/img/Vals.png",
    alt: "Vals y baile"
  },
  {
    time: "9:30 PM",
    title: "Cena",
    icon: "/img/icono cena.png",
    alt: "Cena"
  },
  {
    time: "Hasta 1:30 AM",
    title: "Resto del Baile",
    icon: "/img/notas.png",
    alt: "Resto del baile"
  }
];

export default function Itinerary() {
  return (
    <section className="timeline">
      <h2 className="timeline__title">Itinerario</h2>

      <div className="timeline__container">
        {/* LINEA */}
        <span className="timeline__line" />

        {events.map((event, index) => (
          <div key={index} className="timeline__item">
            <div className="timeline__card">
              <span className="event__title">{event.title}</span>

              <img
                src={event.icon}
                alt={event.alt}
                className="event__icon"
                loading="lazy"
              />

              <span className="time">{event.time}</span>

              {/* PUNTO CENTRADO EN TARJETA */}
              <span className="timeline__dot" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}