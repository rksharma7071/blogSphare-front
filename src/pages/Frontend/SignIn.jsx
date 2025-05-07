import React, { useState } from "react";
import axios from "axios";

function SignIn() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/auth/login", formData);
      // Save token to localStorage
      localStorage.setItem("token", res.data.token);
      setMessage("Login successful!");
      // Redirect to home page or dashboard
      window.location.href = "/";
    } catch (err) {
      console.error(err);
      setMessage(err.response?.data?.msg || "Login failed.");
    }
  };
  return (
    <div>
      <h1>Sign In</h1>

      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
        <div>
          <p>
            Don't have an account? <a href="/signup">Sign Up</a>
          </p>
        </div>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default SignIn;
