// src/Pages/Invitation.jsx

import { useRef, useState } from "react";
import WelcomeScreen from "../Components/Welcome/WelcomeScreen";
import Hero from "../Components/Hero/Hero";
import ShortVideo from "../Components/ShortVideo/ShortVideo";
import Countdown from "../Components/Countdown/Countdown";
import MessageToGuests from "../Components/MessageToGuests/MessageToGuests";
import ReligiousCeremony from "../Components/ReligiousCeremony/ReligiousCeremony";
import CivilReception from "../Components/CivilReception/CivilReception";
import Itinerary from "../Components/Itinerary/Itinerary";
import FamilyRoles from "../Components/FamilyRoles/FamilyRoles";
import Gifts from "../Components/Gifts/Gifts";
import DressCode from "../Components/DressCode/DressCode";
import AdultsOnly from "../Components/AdultsOnly/AdultsOnly";
import DynamicGallery from "../Components/DynamicGallery/DynamicGallery";

export default function Invitation() {
  const audioRef = useRef(null);
  const heroRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  // ▶️ Se ejecuta SOLO al dar clic en Y&G
  const playMusic = () => {
    audioRef.current.play();
    setIsPlaying(true);
    setShowWelcome(false);

    heroRef.current.scrollIntoView({ behavior: "smooth" });
  };

  // ⏯ Play / Pause flotante
  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <main>
      {/* 🎵 Música global */}
      <audio ref={audioRef} loop>
        <source src="/Sounds/VoyApagarLaLuz.mp3" type="audio/mp3" />
      </audio>

      {/* 👋 Pantalla inicial */}
      {showWelcome && <WelcomeScreen onOpen={playMusic} />}

      {/* 💍 Todo el contenido SOLO después de iniciar */}
      {!showWelcome && (
        <>
          {/* Hero */}
          <div ref={heroRef}>
            <Hero
              onToggleMusic={toggleMusic}
              isPlaying={isPlaying}
              hasStarted={!showWelcome}
            />
          </div>
          <MessageToGuests />
          <ShortVideo src="/Videos/VideoPrueba.mp4" />
          <Countdown />
          <ReligiousCeremony />
          <CivilReception />
          <Itinerary />
          <FamilyRoles />
          <Gifts />
          <DressCode />
          <AdultsOnly />
          <DynamicGallery />
        </>
      )}
    </main>
  );
}