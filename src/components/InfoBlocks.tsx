// InfoBlocks.js
import { motion } from "framer-motion";

const InfoBlocks = () => {
  return (
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
  );
};

export default InfoBlocks;
