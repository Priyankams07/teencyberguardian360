import React, { useState } from 'react';

const JoinFormPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    school: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks for joining TeenCyber360, ${formData.name}! 🎉`);
    console.log('User Joined:', formData);
    // You can add navigation or data storage logic here
  };

  const formStyle = {
    maxWidth: '500px',
    margin: '50px auto',
    padding: '30px',
    borderRadius: '12px',
    backgroundColor: '#f2f9ff',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    fontFamily: 'Arial, sans-serif'
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '10px',
    fontWeight: 'bold',
    color: '#333'
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    marginBottom: '20px'
  };

  const buttonStyle = {
    padding: '12px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold'
  };

  return (
    <div style={formStyle}>
      <h2>Join TeenCyber360</h2>
      <p>Fill in your details to become a Cyber Hero 🛡️</p>
      <form onSubmit={handleSubmit}>
        <label style={labelStyle}>Full Name:</label>
        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          style={inputStyle}
        />

        <label style={labelStyle}>Email:</label>
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          style={inputStyle}
        />

        <label style={labelStyle}>Age:</label>
        <input
          type="number"
          name="age"
          min="10"
          max="18"
          required
          value={formData.age}
          onChange={handleChange}
          style={inputStyle}
        />

        <label style={labelStyle}>School Name:</label>
        <input
          type="text"
          name="school"
          required
          value={formData.school}
          onChange={handleChange}
          style={inputStyle}
        />

        <button type="submit" style={buttonStyle}>Join Now</button>
      </form>
    </div>
  );
};

export default JoinFormPage;
