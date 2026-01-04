import React, { useState } from "react";

function App() {
  const [employee, setEmployee] = useState({
    fullName: "",
    fatherName: "",
    motherName: "",
    dateOfBirth: "",
    aadharNumber: "",
    panNumber: "",
    temporaryAddress: "",
    permanentAddress: "",
    mobileNumber: ""
  });

  const [employeeId, setEmployeeId] = useState("");

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "http://localhost:8080/api/employees/create",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(employee),
      }
    );

    const data = await response.json();
    setEmployeeId(data.employeeId);
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>Employee Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <input name="fullName" placeholder="Full Name" onChange={handleChange} required /><br/><br/>
        <input name="fatherName" placeholder="Father Name" onChange={handleChange} required /><br/><br/>
        <input name="motherName" placeholder="Mother Name" onChange={handleChange} required /><br/><br/>
        <input type="date" name="dateOfBirth" onChange={handleChange} required /><br/><br/>
        <input name="aadharNumber" placeholder="Aadhar Number" onChange={handleChange} required /><br/><br/>
        <input name="panNumber" placeholder="PAN Number" onChange={handleChange} required /><br/><br/>
        <textarea name="temporaryAddress" placeholder="Temporary Address" onChange={handleChange} required /><br/><br/>
        <textarea name="permanentAddress" placeholder="Permanent Address" onChange={handleChange} required /><br/><br/>
        <input name="mobileNumber" placeholder="Mobile Number" onChange={handleChange} required /><br/><br/>

        <button type="submit">HR Submit</button>
      </form>

      {employeeId && (
        <h3>Generated Employee ID: {employeeId}</h3>
      )}
    </div>
  );
}

export default App;
