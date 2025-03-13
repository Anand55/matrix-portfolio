import { useState } from "react";
import MatrixEffect from "./MatrixEffect";

const Home = () => {
  const [showMatrix, setShowMatrix] = useState(false);

  return (
    <div style={{ width: "100vw", height: "100vh", backgroundColor: "black" }}>
      {!showMatrix ? (
        <button
          onClick={() => setShowMatrix(true)}
          style={{
            padding: "12px 24px",
            fontSize: "18px",
            fontWeight: "bold",
            backgroundColor: "#0F0",
            color: "black",
            borderRadius: "8px",
            cursor: "pointer",
            border: "none",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          Click Here
        </button>
      ) : (
        <MatrixEffect />
      )}
    </div>
  );
};

export default Home;
