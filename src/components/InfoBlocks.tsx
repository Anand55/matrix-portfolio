// Blocks.tsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const blocks = [
  { id: 1, title: "Personal Details" },
  { id: 2, title: "Experience" },
  { id: 3, title: "Skills & Tech Stack" },
  { id: 4, title: "Projects" },
  { id: 5, title: "Contact Details" }
];

const Blocks: React.FC = () => {
  const [visibleBlocks, setVisibleBlocks] = useState<number[]>([]);

  useEffect(() => {
    blocks.forEach((block, index) => {
      setTimeout(() => {
        setVisibleBlocks((prev) => [...prev, block.id]);
      }, index * 500);
    });
  }, []);

  return (
    <div style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "20px",
      width: "auto",
    }}>
      {/* First Row */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
        {blocks.slice(0, 3).map((block) => (
          <motion.div
            key={block.id}
            initial={{ scale: 0, opacity: 0, y: -50 }}
            animate={visibleBlocks.includes(block.id) ? { scale: 1, opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: block.id * 0.2 }}
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
              margin: "auto",
            }}
          >
            {block.title}
          </motion.div>
        ))}
      </div>
      
      {/* Second Row */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" }}>
        {blocks.slice(3, 5).map((block) => (
          <motion.div
            key={block.id}
            initial={{ scale: 0, opacity: 0, y: 50 }}
            animate={visibleBlocks.includes(block.id) ? { scale: 1, opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: block.id * 0.2 }}
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
              margin: "auto",
            }}
          >
            {block.title}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Blocks;