import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import InfoWindow from "./InfoWindow";

const blocks = [
  { id: 1, title: "Personal Details" },
  { id: 2, title: "Experience" },
  { id: 3, title: "Skills & Tech Stack" },
  { id: 4, title: "Projects" },
  { id: 5, title: "Contact Details" }
];

const Blocks: React.FC = () => {
  const [visibleBlocks, setVisibleBlocks] = useState<number[]>([]);
  const [selectedBlock, setSelectedBlock] = useState<string | null>(null);

  useEffect(() => {
    blocks.forEach((block, index) => {
      setTimeout(() => {
        setVisibleBlocks((prev) => [...prev, block.id]);
      }, index * 500);
    });
  }, []);

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          width: "auto",
        }}
      >
        {/* First Row */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
          {blocks.slice(0, 3).map((block) => (
            <motion.div
              key={block.id}
              initial={{ scale: 0, opacity: 0, y: -50 }}
              animate={visibleBlocks.includes(block.id) ? { scale: 1, opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: block.id * 0.2 }}
              whileHover={{ scale: 1.05 }}
              style={{
                backgroundColor: "rgba(0, 255, 0, 0.1)",
                padding: "15px",
                borderRadius: "4px",
                textAlign: "center",
                color: "#0F0",
                fontSize: "1.5rem",
                width: "250px",
                height: "300px",
                cursor: "pointer",
                border: "3px solid #0F0",
                boxShadow: "inset 0 0 10px #0F0, 0 0 20px #0F0",
                fontFamily: "Courier New, monospace",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                animation: "twinkle 0.8s infinite alternate",
              }}
              onClick={() => setSelectedBlock(block.title)}
            >
              <div
                    style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    backgroundColor: "#0F0",
                    color: "black",
                    fontSize: "1rem",
                    textAlign: "left",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    paddingLeft: "3px",
                    borderTopLeftRadius: "4px",
                    borderTopRightRadius: "4px",
                    fontWeight: "bold",
                    }}
                >
              
                 ▣ {block.title}
              </div>
              <div style={{ marginTop: "40px", fontWeight: "bold" }}>{block.title}</div>
            </motion.div>
          ))}
        </div>

        {/* Second Row - Centered */}
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", width: "100%" }}>
          {blocks.slice(3, 5).map((block) => (
            <motion.div
              key={block.id}
              initial={{ scale: 0, opacity: 0, y: 50 }}
              animate={visibleBlocks.includes(block.id) ? { scale: 1, opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: block.id * 0.2 }}
              whileHover={{ scale: 1.05 }}
              style={{
                backgroundColor: "rgba(0, 255, 0, 0.1)",
                padding: "15px",
                borderRadius: "4px",
                textAlign: "center",
                color: "#0F0",
                fontSize: "1.5rem",
                width: "250px",
                height: "300px",
                cursor: "pointer",
                border: "3px solid #0F0",
                boxShadow: "inset 0 0 10px #0F0, 0 0 20px #0F0",
                fontFamily: "Courier New, monospace",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                animation: "twinkle 0.8s infinite alternate"
              }}
            >
              <div
                style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                backgroundColor: "#0F0",
                color: "black",
                fontSize: "1rem",
                textAlign: "left",
                paddingTop: "10px",
                paddingBottom: "10px",
                paddingLeft: "3px",
                borderTopLeftRadius: "4px",
                borderTopRightRadius: "4px",
                fontWeight: "bold",
                }}
            >
                ▣ {block.title}
              </div>
              <div style={{ marginTop: "40px", fontWeight: "bold" }}>{block.title}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Info Window */}
      {selectedBlock && (
        <InfoWindow title={selectedBlock} onClose={() => setSelectedBlock(null)}>
          Content for {selectedBlock} goes here.
        </InfoWindow>
      )}
    </>
  );
};

export default Blocks;
