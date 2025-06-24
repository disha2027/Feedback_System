import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/auth.css";

function SignIn() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email.includes("manager")) {
      navigate("/manager");
    } else {
      navigate("/employee");
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign In</h2>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleLogin}>Sign In</button>

      {/* 👉 Add this below the button */}
      <p style={{ marginTop: "20px", textAlign: "center" }}>
        Don’t have an account?{" "}
        <span
          onClick={() => navigate("/signup")}
          style={{ color: "blue", cursor: "pointer" }}
        >
          Sign Up
        </span>
      </p>
    </div>
  );
}

export default SignIn;
