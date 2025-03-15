import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface PersonalDetailsProps {
  onClose: () => void;
}

const PersonalDetails: React.FC<PersonalDetailsProps> = ({ onClose }) => {
  const [text, setText] = useState("");
  const fullText = "Name: Anand Toshniwal\nLocation: Pune";
  const typingSpeed = 50; // Adjust speed

  useEffect(() => {
    let index = 0;
    const audio = new Audio("/typing.mp3");
    audio.volume = 0.2;
    let soundPlaying = false;

    const interval = setInterval(() => {
      if (index < fullText.length) {
        setText((prev) => prev + fullText[index]);
        index++;
        if (!soundPlaying) {
          audio.play();
          soundPlaying = true;
        }
      } else {
        clearInterval(interval);
        audio.pause(); // Stop sound when typing is done
      }
    }, typingSpeed);

    return () => {
      clearInterval(interval);
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "500px", // Reduced width to fit
        height: "300px", // Slightly smaller height
        backgroundColor: "rgba(0, 255, 0, 0.95)", // Proper green background
        border: "3px solid #0F0",
        boxShadow: "0 0 25px #0F0",
        fontFamily: "Courier New, monospace",
        color: "#0F0",
        padding: "20px",
        borderRadius: "5px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        whiteSpace: "pre-line",
        zIndex: 1000, // Ensures it's above everything
      }}
    >
      {/* Title Bar */}
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          backgroundColor: "#0F0",
          color: "black",
          fontSize: "1.2rem",
          textAlign: "left",
          padding: "8px",
          borderTopLeftRadius: "5px",
          borderTopRightRadius: "5px",
          fontWeight: "bold",
        }}
      >
        ▣ Personal Details
        <span
          onClick={onClose}
          style={{
            float: "right",
            cursor: "pointer",
            fontWeight: "bold",
            color: "red",
          }}
        >
          ✕
        </span>
      </div>

      {/* Typing Effect */}
      <pre
        style={{
          fontSize: "1.2rem",
          fontWeight: "bold",
          marginTop: "40px", // Adjusted for proper spacing
          textAlign: "center",
        }}
      >
        {text}
      </pre>
    </motion.div>
  );
};

export default PersonalDetails;
