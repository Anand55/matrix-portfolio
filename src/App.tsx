// App.tsx
import React, { useState } from "react";
import MatrixRain from "./components/MatrixRain";
import SoundToggle from "./components/SoundToggle";
import InfoBlocks from "./components/InfoBlocks";

const App: React.FC = () => {
  const [showMatrix, setShowMatrix] = useState(false);
  const [showBlocks, setShowBlocks] = useState(false);

  const startMatrixEffect = () => {
    setShowMatrix(true);
    setTimeout(() => setShowBlocks(true), 4000);
  };

  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh", backgroundColor: "black" }}>
      {!showMatrix && (
        <button
          onClick={startMatrixEffect}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#0F0",
            color: "black",
            border: "none",
            padding: "15px 30px",
            fontSize: "1.5rem",
            cursor: "pointer",
            borderRadius: "10px",
          }}
        >
          Click Here
        </button>
      )}
      {showMatrix && <MatrixRain onFinish={() => setShowBlocks(true)} />}
      {showMatrix && <SoundToggle />}
      {showBlocks && <InfoBlocks />}
    </div>
  );
};

export default App;
