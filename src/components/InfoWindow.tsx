import { motion } from "framer-motion";

interface InfoWindowProps {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}

const InfoWindow: React.FC<InfoWindowProps> = ({ title, onClose, children }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.8)", // Slightly dark background
        zIndex: 999,
      }}
    >
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          width: "60vw",
          height: "60vh",
          backgroundColor: "rgba(0, 0, 0, 0.9)", // Dark Matrix Background
          border: "3px solid #0F0",
          boxShadow: "0 0 15px #0F0",
          fontFamily: "Courier New, monospace",
          color: "#0F0",
          padding: "10px",
          borderRadius: "5px",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          overflow: "hidden", // Prevents content from overflowing
        }}
      >
        {/* ✅ Fixed Title Bar */}
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            backgroundColor: "#0F0",
            color: "black",
            fontSize: "1.2rem",
            padding: "10px 15px",
            fontWeight: "bold",
            borderTopLeftRadius: "4px",
            borderTopRightRadius: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            boxSizing: "border-box",
            zIndex: 1000, // Ensures title bar is always visible
          }}
        >
          <span style={{ paddingLeft: "8px" }}>▣ {title}</span>
          <span
            onClick={onClose}
            style={{
              cursor: "pointer",
              fontWeight: "bold",
              color: "red",
              paddingRight: "10px",
            }}
          >
            ✕
          </span>
        </div>

        {/* ✅ Scrollable Content */}
        <div
          style={{
            flex: 1,
            width: "100%",
            marginTop: "50px", // ✅ Moves content below title bar
            overflowY: "auto", // ✅ Enables scrolling if content overflows
            padding: "15px",
          }}
        >
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default InfoWindow;
