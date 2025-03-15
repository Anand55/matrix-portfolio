import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const typingSound = new Audio("/typing.mp3");

const contactInfo = `Email: anandtoshniwal5@gmail.com
Phone: +91 84128 23372
GitHub: https://www.github.com/Anand55
LinkedIn: https://www.linkedin.com/in/anand-toshniwal-b07a3713b/`;

  const ContactDetails = () => {
  const [displayText, setDisplayText] = useState<string>("");
  const [index, setIndex] = useState(0);
  const [showFull, setShowFull] = useState(false);
  const [hideButton, setHideButton] = useState(false);

  useEffect(() => {
    if (showFull) {
      setDisplayText(contactInfo);
      setHideButton(true); // Hide button immediately
      return;
    }

    let timeout: ReturnType<typeof setTimeout>;
    typingSound.play();

    const typeText = () => {
      if (index < contactInfo.length) {
        setDisplayText((prev) => prev + contactInfo[index]);
        setIndex(index + 1);
        timeout = setTimeout(typeText, 50);
      } else {
        typingSound.pause();
        setHideButton(true); // Hide button once typing is complete
      }
    };

    timeout = setTimeout(typeText, 50);

    return () => {
      clearTimeout(timeout);
      typingSound.pause();
      typingSound.currentTime = 0;
    };
  }, [index, showFull]);

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        fontFamily: "Courier New, monospace",
        color: "#0F0",
        fontSize: "1.1rem",
        whiteSpace: "pre-line",
        textAlign: "left",
        paddingLeft: "20px",
        position: "relative",
      }}
    >
      {!hideButton && (
        <button
          onClick={() => {
            setShowFull(true);
            setHideButton(true); // Ensure button is hidden when clicked
          }}
          style={{
            position: "absolute",
            bottom: "10px",
            right: "40px",
            backgroundColor: "transparent",
            color: "#0F0",
            border: "1px solid #0F0",
            padding: "5px 10px",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "0.9rem",
          }}
        >
          Skip Animation
        </button>
      )}
      {displayText}
    </motion.div>
  );
};

export default ContactDetails;
