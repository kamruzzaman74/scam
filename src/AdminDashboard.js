// src/components/AdminDashboard.js
import React, { useEffect, useState } from 'react';

function AdminDashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from localStorage
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(storedUsers);
  }, []);

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', textAlign: 'center' }}>
      <h2>Admin Dashboard</h2>
      {users.length > 0 ? (
        <table style={{ width: '100%', border: '1px solid #ddd', marginTop: '20px' }}>
          <thead>
            <tr>
              <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Name</th>
              <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Email</th>
              <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Password</th>
              <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>User ID</th>
              <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Device</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{user.name}</td>
                <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{user.email}</td>
                <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{user.password}</td>
                <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{user.userId}</td>
                <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{user.device}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No users signed up yet.</p>
      )}
    </div>
  );
}

export default AdminDashboard;
