// src/components/SignUp.js
import React, { useState } from 'react';

function SignUp({ setUsers }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userId, setUserId] = useState(''); // New state for User ID
  const [device, setDevice] = useState(''); // New state for Device Information

  const handleSignUp = (e) => {
    e.preventDefault();

    // Save user details
    const newUser = { name, email, password, userId, device };
    const updatedUsers = [...(JSON.parse(localStorage.getItem('users')) || []), newUser];
    localStorage.setItem('users', JSON.stringify(updatedUsers));

    // Clear form fields after submission
    setName('');
    setEmail('');
    setPassword('');
    setUserId('');
    setDevice('');

    alert('User signed up successfully!');
    
    // Update state
    setUsers(updatedUsers);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', textAlign: 'center' }}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <div style={{ marginBottom: '15px' }}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            />
          </label>
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            Device Information:
            <input
              type="text"
              value={device}
              onChange={(e) => setDevice(e.target.value)}
              placeholder="e.g., Device Name"
              required
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            />
          </label>
        </div>
        <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer' }}>Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
