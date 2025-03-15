import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const typingSound = new Audio("/typing.mp3");

const skillsData = [
  ["Programming Languages", "Golang, Python, JavaScript, TypeScript"],
  ["Databases", "PostgreSQL, MongoDB, MySQL"],
  ["Cloud Platforms", "AWS (EC2, S3, Lambda, DynamoDB)"],
  ["DevOps Tools", "Docker, Kubernetes, Terraform, CI/CD"],
  ["Frontend", "React.js, Next.js, HTML, CSS, Tailwind"],
  ["Backend", "Node.js, Express, FastAPI, gRPC"],
  ["Other Tools", "Git, Redis, RabbitMQ, Kafka"],
];

const Skills = ({ onClose }: { onClose: () => void }) => {
  const [displayText, setDisplayText] = useState<string[]>([]);
  const [index, setIndex] = useState(0);
  const [showFull, setShowFull] = useState(false);
  const [hideSkip, setHideSkip] = useState(false); // ✅ Controls visibility of Skip Animation button

  useEffect(() => {
    if (showFull) {
      setDisplayText(skillsData.map(([category, skills]) => `${category}: ${skills}`));
      setHideSkip(true); // ✅ Hide skip button when all content is displayed
      return;
    }

    let timeout: ReturnType<typeof setTimeout>;
    typingSound.play();

    const typeText = () => {
      if (index < skillsData.length) {
        setDisplayText((prev) => [...prev, `${skillsData[index][0]}: ${skillsData[index][1]}`]);
        setIndex(index + 1);
        timeout = setTimeout(typeText, 150);
      } else {
        typingSound.pause();
        setHideSkip(true); // ✅ Hide skip button when text completes naturally
      }
    };

    timeout = setTimeout(typeText, 150);

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
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Courier New, monospace",
        color: "#0F0",
        fontSize: "1rem",
        textAlign: "left",
        padding: "10px",
        position: "relative",
      }}
    >
      {/* ✅ Skip Animation Button (Hides when text completes) */}
      {!hideSkip && (
        <button
          onClick={() => {
            setShowFull(true);
            setHideSkip(true); // ✅ Hides button when manually skipped
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
            fontSize: "0.8rem",
          }}
        >
          Skip Animation
        </button>
      )}

      {/* ✅ Compact, Scrollable Table */}
      <div
        style={{
          width: "90%",
          maxWidth: "500px",
          maxHeight: "60vh",
          overflowY: "auto",
          padding: "5px",
        }}
      >
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            border: "1px solid #0F0",
          }}
        >
          <tbody>
            {displayText.map((row, i) => {
              const [category, skills] = row.split(": ");
              return (
                <tr key={i} style={{ borderBottom: "1px solid #0F0" }}>
                  <td
                    style={{
                      fontWeight: "bold",
                      padding: "5px",
                      border: "1px solid #0F0",
                      width: "40%",
                      textAlign: "left",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {category}
                  </td>
                  <td
                    style={{
                      padding: "5px",
                      border: "1px solid #0F0",
                      width: "60%",
                      textAlign: "left",
                      wordBreak: "break-word",
                    }}
                  >
                    {skills}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default Skills;
