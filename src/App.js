import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import AdminLogin from "./AdminLogin";
import AdminDashboard from "./AdminDashboard";
import Navbar from "./Navbar"; // Import the Navbar

function App() {
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users")) || []);
  const isAdminLoggedIn = JSON.parse(localStorage.getItem("isAdminLoggedIn")) || false;

  return (
    <Router>
      {/* Add Navbar at the top of all pages */}
      <Navbar />

      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<SignUp setUsers={setUsers} />} />
        <Route path="/login" element={<Login users={users} />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route
          path="/dashboard"
          element={isAdminLoggedIn ? <AdminDashboard /> : <Navigate to="/admin-login" replace />}
        />
      </Routes>
    </Router>
  );
}

export default App;
