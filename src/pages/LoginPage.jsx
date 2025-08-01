import React, { useState } from 'react';
import './LoginPage.css'; // Optional: style as needed
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Login successful!');
        navigate('/home'); // Redirect after successful login
      } else {
        alert('Invalid credentials');
      }
    } catch (err) {
      console.error(err);
      alert('Login failed. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <h2>Login to TeenCyber360</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <label>Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
