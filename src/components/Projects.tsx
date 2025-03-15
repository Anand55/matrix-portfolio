import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const typingSound = new Audio("/typing.mp3");

const projectsInfo = `SingleStore Kai:
- Architected a high-performance MongoDB proxy, enhancing analytics workloads with 100x faster query execution.
- Optimized data retrieval pipelines, significantly reducing latency in complex query operations.
- Implemented advanced caching strategies, reducing redundant computations and boosting efficiency.
- Designed an error-handling framework, reducing debugging overhead and ensuring robust system reliability.

Automated Bulk Payout System:
- Spearheaded the development of an automated bulk payout system, reducing transaction processing time by 40%.
- Built using **Golang and AWS Lambda**, ensuring a highly scalable and event-driven architecture.
- Integrated with banking APIs to automate disbursements, eliminating manual intervention.
- Developed robust failure-handling mechanisms, ensuring seamless retries and accurate financial reconciliation.

Address Verification Service:
- Designed an **intelligent address-regulation service** to validate and autocomplete US addresses.
- Seamlessly integrated into the payment workflows, reducing failed transactions due to incorrect addresses.
- Enhanced system accuracy by implementing **real-time address parsing and geolocation validation**.
- Ensured compliance with USPS standards, improving address accuracy by 95%.

Payment & Billing System:
- Engineered a **high-performance billing service** using PostgreSQL and MongoDB, handling millions of transactions.
- Optimized database queries, reducing **payment reconciliation time by 50%**.
- Designed an **adaptive fraud detection system**, preventing unauthorized transactions.
- Enhanced financial reporting by implementing real-time dashboards for **payment analytics and revenue tracking**.

Translator Application:
- Led the development of a **network data management tool**, optimizing communication between virtual machines.
- Built a scalable and efficient **data transformation pipeline**, streamlining network traffic handling.
- Reduced processing overhead by implementing **multi-threading and caching mechanisms**.
- Enhanced cross-platform compatibility, enabling seamless data flow across different virtualization environments.

Products Worked On:
- **SingleStore Kai:** Enhanced real-time data analytics for large-scale enterprise applications.
- **Rider App:** Developed critical user-centric features, improving ride booking and tracking experiences.
- **Weave Payments Service:** Engineered payment automation, improving **transaction efficiency for thousands of businesses**.
- **IDFC First Bank Payments & Billing Service:** Designed a scalable banking solution handling **millions of users**, ensuring seamless bill payments and compliance.

`;

const Projects = ({ onClose }: { onClose: () => void }) => {
  const [displayText, setDisplayText] = useState<string>("");
  const [index, setIndex] = useState(0);
  const [showFull, setShowFull] = useState(false);

  useEffect(() => {
    if (showFull) {
      setDisplayText(projectsInfo);
      return;
    }
    let timeout: ReturnType<typeof setTimeout>;
    typingSound.play();

    const typeText = () => {
      if (index < projectsInfo.length) {
        setDisplayText((prev) => prev + projectsInfo[index]);
        setIndex(index + 1);
        timeout = setTimeout(typeText, 50);
      } else {
        typingSound.pause();
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
        padding: "20px",
        position: "relative",
      }}
    >
      {/* ✅ Make the content area scrollable */}
      <div
        style={{
          flex: 1, // Takes remaining space
          overflowY: "auto", // Enables scrolling
          maxHeight: "60vh", // Limits height so scrolling works
          paddingRight: "10px", // Prevents text cutoff
        }}
      >
        {displayText}
      </div>

      {/* ✅ Skip Animation Button */}
      {!showFull && (
        <button
          onClick={() => setShowFull(true)}
          style={{
            position: "absolute",
            bottom: "30px",
            right: "60px",
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
    </motion.div>
  );
};

export default Projects;
