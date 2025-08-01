import React, { useState } from 'react';

const ReportForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    issue: '',
    platform: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/report', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),  // ✅ Corrected here
      });

      if (response.ok) {
        alert('Report submitted successfully!');
        setFormData({ name: '', age: '', issue: '', platform: '' }); // Reset form
      } else {
        const err = await response.json();
        alert(`Failed to submit report: ${err.message || 'Unknown error'}`);
      }
    } catch (error) {
      alert('Error submitting report.');
      console.error('Submit error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '300px', margin: 'auto', padding: '20px' }}>
      <h2>Submit a Cyber Safety Report</h2>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
      <input name="age" value={formData.age} onChange={handleChange} placeholder="Age" required />
      <input name="issue" value={formData.issue} onChange={handleChange} placeholder="Issue" required />
      <input name="platform" value={formData.platform} onChange={handleChange} placeholder="Platform" required />
      <button type="submit">Submit Report</button>
    </form>
  );
};

export default ReportForm;
