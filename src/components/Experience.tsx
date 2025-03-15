import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const typingSound = new Audio("/typing.mp3");

const experienceInfo = `Software Engineer at SingleStore (August 2022 - Present)
- Spearheaded the development of Mongoproxy, improving MongoDB analytics performance by 100x and optimizing query processing.
- Engineered CI/CD pipelines for MongoDB 6.0, significantly accelerating performance testing and deployment cycles.
- Designed a robust error management framework, slashing debugging time by 30% and enhancing operational efficiency.
- Provided technical mentorship to interns from UC Berkeley and BITS Pilani, fostering a culture of innovation and skill growth.

Software Engineer at FreshVnf (April 2022 - August 2022)
- Led a team of six engineers in architecting and delivering user-centric features for the rider service platform, boosting customer retention.
- Implemented automated bulk payouts, reducing financial processing time by 40% and enhancing scalability.
- Conducted system design sessions, driving architectural decisions for high-availability services.
- Built integrations to streamline service automation, reducing manual intervention by 60%.

Software Engineer 2 at Weave (October 2021 - April 2022)
- Owned the payment service for Weave’s admin portal, ensuring seamless transactions and system resilience.
- Developed an intelligent address-regulation service, automating US address verification and reducing user onboarding time.
- Strengthened security frameworks by implementing cutting-edge encryption and fraud detection mechanisms.
- Led internal process optimization, reducing API response time by 25% through improved indexing and caching strategies.

Deputy Manager (Developer) at IDFC First Bank (June 2021 - October 2021)
- Managed and mentored a team of 12 engineers, driving agile sprint planning and technical growth.
- Spearheaded the optimization of bill payment services, reducing processing latency and ensuring high-volume scalability.
- Elevated unit test coverage by 20%, ensuring superior code reliability and maintainability.
- Developed banking automation tools that minimized repetitive tasks, improving workflow efficiency by 35%.

Software Engineer at TIBCO Software Inc. (July 2020 - May 2021)
- Designed and developed core modules for the UCS project, optimizing enterprise-wide data pipelines.
- Built a comprehensive testing framework that improved software reliability and deployment speed.
- Integrated distributed logging systems, enhancing debugging capabilities for mission-critical applications.
- Led cross-functional collaborations with data engineering teams, ensuring robust architecture alignment.

Software Engineer at NityaObject Software (September 2019 - July 2020)
- Led a team of four engineers, training them in Python and system design, ensuring high-performance application development.
- Designed and deployed the Translator application, optimizing network data management across virtualized environments.
- Established best practices for clean and maintainable code, significantly improving long-term project scalability.
- Provided hands-on mentorship, fostering a structured learning path for junior engineers, boosting team efficiency.
`;

const Experience = ({ onClose }: { onClose: () => void }) => {
    const [displayText, setDisplayText] = useState<string>("");
    const [index, setIndex] = useState(0);
    const [showFull, setShowFull] = useState(false);
    const [showButton, setShowButton] = useState(true);
  
    useEffect(() => {
      if (showFull) {
        setDisplayText(experienceInfo);
        setShowButton(false);
        return;
      }
      let timeout: ReturnType<typeof setTimeout>;
      typingSound.play();
  
      const typeText = () => {
        if (index < experienceInfo.length) {
          setDisplayText((prev) => prev + experienceInfo[index]);
          setIndex(index + 1);
          timeout = setTimeout(typeText, 50);
        } else {
          typingSound.pause();
          setShowButton(false);
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
            justifyContent: "flex-start", // ✅ Ensures scrolling starts from the top
            fontFamily: "Courier New, monospace",
            color: "#0F0",
            fontSize: "1.1rem",
            whiteSpace: "pre-line",
            textAlign: "left",
            paddingLeft: "20px",
            paddingTop: "10px", // ✅ Small padding to prevent text from being too close to the top
            position: "relative",
            overflow: "auto", // ✅ Enables scrolling inside the pop-up
            maxHeight: "60vh", // ✅ Restricts height, so scrolling is necessary
          }}
          
      >
        {showButton && (
          <button
            onClick={() => setShowFull(true)}
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
  
  export default Experience;