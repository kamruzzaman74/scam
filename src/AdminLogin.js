// src/components/AdminLogin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleAdminLogin = (e) => {
    e.preventDefault();
    const adminUserId = 'admin@example.com';
    const adminPassword = 'admin123';

    if (userId === adminUserId && password === adminPassword) {
      localStorage.setItem('isAdminLoggedIn', JSON.stringify(true));
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', textAlign: 'center' }}>
      <h2>Admin Login</h2>
      <form onSubmit={handleAdminLogin}>
        <div style={{ marginBottom: '15px' }}>
          <label>
            User ID:
            <input
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              required
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            />
          </label>
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            />
          </label>
        </div>
        <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer' }}>Log In</button>
      </form>
    </div>
  );
}

export default AdminLogin;
