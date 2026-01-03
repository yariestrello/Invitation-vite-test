// src/components/countdown/Countdown.jsx
import { useState, useEffect } from "react";
import "./Countdown.css";

export default function Countdown() {
  const weddingDate = new Date("2026-05-16T18:00:00"); // Fecha y hora de la boda
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = weddingDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="countdown">
    <h1>SÁBADO</h1>
     <h1>16.05.2026</h1>
      <h2>Faltan:</h2>
      <div className="countdown-timer">
        <div className="time-box">
          <span>{timeLeft.days}</span>
          <p>Días</p>
        </div>
        <div className="time-box">
          <span>{timeLeft.hours}</span>
          <p>Horas</p>
        </div>
        <div className="time-box">
          <span>{timeLeft.minutes}</span>
          <p>Minutos</p>
        </div>
        <div className="time-box">
          <span>{timeLeft.seconds}</span>
          <p>Segundos</p>
        </div>
      </div>
    </section>
  );
}