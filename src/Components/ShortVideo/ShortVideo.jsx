// src/components/video/ShortVideo.jsx
import "./ShortVideo.css";

export default function ShortVideo({ src }) {
  return (
    <section className="short-video">
      <video
        src={src}
        autoPlay
        muted
        loop
        playsInline
        className="short-video-player"
      />
    </section>
  );
}