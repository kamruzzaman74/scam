import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ users }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find((u) => u.email === email && u.password === password);

    if (user) {
      alert("Login successful!");
      navigate("/"); // Redirect regular users elsewhere if needed
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
