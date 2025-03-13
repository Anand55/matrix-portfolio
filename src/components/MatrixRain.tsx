// MatrixRain.tsx
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface MatrixRainProps {
  onFinish: () => void;
}

const MatrixRain: React.FC<MatrixRainProps> = ({ onFinish }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [showText, setShowText] = useState(true);
  const hasStarted = useRef(false);

  useEffect(() => {
    if (hasStarted.current) return; // Prevent restarting
    hasStarted.current = true;

    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const fontSize = 15;
    let columns = Math.floor(window.innerWidth / fontSize);
    let drops = Array(columns).fill(0);

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      columns = Math.floor(canvas.width / fontSize);
      drops = Array(columns).fill(0);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = "#0F0";
      ctx.font = `${fontSize}px monospace`;
      ctx.textAlign = "center";
      ctx.textBaseline = "top";

      for (let i = 0; i < drops.length; i++) {
        const text = Math.random() > 0.5 ? "1" : "0";
        const x = i * fontSize + fontSize / 2;
        const y = drops[i] * fontSize * 1.2;

        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += Math.random() * 1.5 + 0.5;
      }
      requestAnimationFrame(draw);
    };

    draw();

    setTimeout(() => {
      setShowText(false);
      if (onFinish) onFinish(); // Ensure onFinish is called properly
    }, 4000);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [onFinish]);

  return (
    <div style={{ position: "absolute", top: 0, left: 0, width: "100vw", height: "100vh" }}>
      <canvas ref={canvasRef} style={{ position: "absolute", top: 0, left: 0, width: "100vw", height: "100vh" }} />
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
    </div>
  );
};

export default MatrixRain;
