import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [formData, setFormData] = useState({
    fullName: '',
    fatherName: '',
    motherName: '',
    dateOfBirth: '',
    aadharNumber: '',
    panCardNumber: '',
    temporaryAddress: '',
    permanentAddress: '',
    mobileNumber: ''
  });

  const [employeeId, setEmployeeId] = useState(null);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/employees', formData);
      const id = response.data.id;
      setEmployeeId(id);
      setMessage(`Success! Employee created with ID: EMP-${id.toString().padStart(5, '0')}`);
      setFormData({
        fullName: '', fatherName: '', motherName: '', dateOfBirth: '',
        aadharNumber: '', panCardNumber: '', temporaryAddress: '',
        permanentAddress: '', mobileNumber: ''
      });
    } catch (error) {
      setMessage('Error: ' + (error.response?.data?.message || error.message));
      console.error(error);
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}>
      {/* Company Header */}
      <header style={{
        background: '#004d99',
        color: 'white',
        padding: '30px 20px',
        textAlign: 'center',
        boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
      }}>
        <h1 style={{
          fontSize: '42px',
          fontWeight: 'bold',
          margin: '0',
          letterSpacing: '2px',
          textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
        }}>
          Flower Creeper Business Solutions
        </h1>
        <p style={{ fontSize: '20px', margin: '10px 0 0', opacity: 0.9 }}>
          Employee Onboarding Portal
        </p>
      </header>

      {/* Form Section */}
      <div style={{ maxWidth: '700px', margin: '40px auto', padding: '30px', background: 'white', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
        <h2 style={{ textAlign: 'center', color: '#004d99', marginBottom: '30px' }}>
          New Employee Registration Form
        </h2>

        <form onSubmit={handleSubmit}>
          <input type="text" name="fullName" placeholder="Full Name *" value={formData.fullName} onChange={handleChange} required style={inputStyle} /><br /><br />

          <input type="text" name="fatherName" placeholder="Father's Name *" value={formData.fatherName} onChange={handleChange} required style={inputStyle} /><br /><br />

          <input type="text" name="motherName" placeholder="Mother's Name *" value={formData.motherName} onChange={handleChange} required style={inputStyle} /><br /><br />

          <label style={{ fontWeight: 'bold', color: '#333' }}>Date of Birth *</label><br />
          <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required style={inputStyle} /><br /><br />

          <input type="text" name="aadharNumber" placeholder="Aadhar Number *" value={formData.aadharNumber} onChange={handleChange} required style={inputStyle} /><br /><br />

          <input type="text" name="panCardNumber" placeholder="PAN Card Number *" value={formData.panCardNumber} onChange={handleChange} required style={inputStyle} /><br /><br />

          <textarea name="temporaryAddress" placeholder="Temporary Address *" value={formData.temporaryAddress} onChange={handleChange} required style={textareaStyle} /><br /><br />

          <textarea name="permanentAddress" placeholder="Permanent Address *" value={formData.permanentAddress} onChange={handleChange} required style={textareaStyle} /><br /><br />

          <input type="text" name="mobileNumber" placeholder="Mobile Number *" value={formData.mobileNumber} onChange={handleChange} required style={inputStyle} /><br /><br />

          <button type="submit" style={buttonStyle}>
            Submit Application
          </button>
        </form>

        {message && (
          <h3 style={{
            textAlign: 'center',
            marginTop: '30px',
            padding: '20px',
            background: employeeId ? '#d4edda' : '#f8d7da',
            color: employeeId ? '#155724' : '#721c24',
            borderRadius: '10px',
            border: employeeId ? '1px solid #c3e6cb' : '1px solid #f5c6cb'
          }}>
            {message}
          </h3>
        )}
      </div>

      {/* Footer */}
      <footer style={{ textAlign: 'center', padding: '20px', color: '#666', fontSize: '14px' }}>
        © 2026 Flower Creeper Business Solutions. All rights reserved.
      </footer>
    </div>
  );
}

// Styles
const inputStyle = {
  width: '100%',
  padding: '12px',
  fontSize: '16px',
  border: '2px solid #ddd',
  borderRadius: '8px',
  boxSizing: 'border-box'
};

const textareaStyle = {
  width: '100%',
  padding: '12px',
  fontSize: '16px',
  border: '2px solid #ddd',
  borderRadius: '8px',
  height: '80px',
  boxSizing: 'border-box'
};

const buttonStyle = {
  width: '100%',
  padding: '15px',
  background: '#004d99',
  color: 'white',
  fontSize: '18px',
  fontWeight: 'bold',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
};

export default App;