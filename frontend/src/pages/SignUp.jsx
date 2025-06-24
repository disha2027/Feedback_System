import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/Api";
import "../styles/auth.css";

function SignUp() {
  const [form, setForm] = useState({ name: "", email: "", role: "employee" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/users/", form);
      alert("Signup successful!");
      navigate("/signin");
    } catch (err) {
      alert("Signup failed!");
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
        <input placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
        <select value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })}>
          <option value="employee">Employee</option>
          <option value="manager">Manager</option>
        </select>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
