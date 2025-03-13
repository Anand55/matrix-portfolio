import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiVolume2, FiVolumeX } from "react-icons/fi";

const MatrixEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showText, setShowText] = useState(true);
  const [showBlocks, setShowBlocks] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = "#0F0";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = Math.random() > 0.5 ? "1" : "0";
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);

    audioRef.current = new Audio("/alone-296348.mp3");
    audioRef.current.loop = true;
    audioRef.current.play();

    setTimeout(() => {
      setShowText(false);
      setShowBlocks(true);
    }, 4000);

    return () => {
      clearInterval(interval);
      if (audioRef.current) audioRef.current.pause();
    };
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh", backgroundColor: "black" }}>
      <canvas ref={canvasRef} style={{ position: "absolute", top: 0, left: 0 }} />
      
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
      
      {showText && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 2, delay: 2 }}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "#0F0",
            fontSize: "3rem",
            fontWeight: "bold",
            textShadow: "0px 0px 5px #0F0",
          }}
        >
          Welcome to the Matrix
        </motion.div>
      )}
      
      {showBlocks && (
        <div style={{ position: "absolute", width: "100vw", height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", alignItems: "center", justifyContent: "center" }}>
            <motion.div
              initial={{ scale: 0, opacity: 0, y: -50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              style={{
                backgroundColor: "rgba(0, 255, 0, 0.2)",
                padding: "50px 60px",
                borderRadius: "15px",
                textAlign: "center",
                color: "#0F0",
                fontSize: "1.5rem",
                width: "200px",
                height: "250px",
                cursor: "pointer",
                border: "2px solid #0F0",
              }}
            >
              Personal Details
            </motion.div>
            <motion.div
              initial={{ scale: 0, opacity: 0, y: -50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              style={{
                backgroundColor: "rgba(0, 255, 0, 0.2)",
                padding: "50px 60px",
                borderRadius: "15px",
                textAlign: "center",
                color: "#0F0",
                fontSize: "1.5rem",
                width: "200px",
                height: "250px",
                cursor: "pointer",
                border: "2px solid #0F0",
              }}
            >
              Experience
            </motion.div>
            <motion.div
              initial={{ scale: 0, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              style={{
                gridColumn: "span 2",
                backgroundColor: "rgba(0, 255, 0, 0.2)",
                padding: "50px 60px",
                borderRadius: "15px",
                textAlign: "center",
                color: "#0F0",
                fontSize: "1.5rem",
                width: "200px",
                height: "250px",
                cursor: "pointer",
                border: "2px solid #0F0",
                margin: "0 auto",
              }}
            >
              Contact Details
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MatrixEffect;
