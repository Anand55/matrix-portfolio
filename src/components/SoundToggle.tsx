// SoundToggle.tsx
import { useState, useRef, useEffect } from "react";
import { FiVolume2, FiVolumeX } from "react-icons/fi";

const SoundToggle: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    audioRef.current = new Audio("/alone-296348.mp3");
    audioRef.current.loop = true;
    audioRef.current.play();
    return () => {
      if (audioRef.current) audioRef.current.pause();
    };
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
        setIsPlaying(true);
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <button
      onClick={toggleMusic}
      style={{
        position: "absolute",
        top: "20px",
        right: "20px",
        background: "none",
        border: "none",
        cursor: "pointer",
        color: "#0F0",
        fontSize: "24px",
        zIndex: 10,
      }}
    >
      {isPlaying ? <FiVolume2 /> : <FiVolumeX />}
    </button>
  );
};

export default SoundToggle;
