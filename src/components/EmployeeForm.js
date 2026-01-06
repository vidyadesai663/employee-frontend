// src/components/EmployeeForm.js
import React, { useState } from "react";
import EmployeeService from "../service/EmployeeService";

const EmployeeForm = ({ fetchEmployees }) => {
  const [employee, setEmployee] = useState({
    fullName: "",
    fatherName: "",
    motherName: "",
    dateOfBirth: "",
    aadharNumber: "",
    panNumber: "",
    mobileNumber: "",
    permanentAddress: "",
    temporaryAddress: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    EmployeeService.createEmployee(employee)
      .then((response) => {
        console.log("Saved successfully:", response.data);
        alert(`Employee saved with ID: ${response.data.employeeId}`);
        setEmployee({
          fullName: "",
          fatherName: "",
          motherName: "",
          dateOfBirth: "",
          aadharNumber: "",
          panNumber: "",
          mobileNumber: "",
          permanentAddress: "",
          temporaryAddress: ""
        });
        fetchEmployees(); // Refresh list after save
      })
      .catch((error) => console.error("Error saving employee:", error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="fullName" placeholder="Full Name" value={employee.fullName} onChange={handleChange} required />
      <input type="text" name="fatherName" placeholder="Father Name" value={employee.fatherName} onChange={handleChange} />
      <input type="text" name="motherName" placeholder="Mother Name" value={employee.motherName} onChange={handleChange} />
      <input type="date" name="dateOfBirth" value={employee.dateOfBirth} onChange={handleChange} />
      <input type="text" name="aadharNumber" placeholder="Aadhar Number" value={employee.aadharNumber} onChange={handleChange} />
      <input type="text" name="panNumber" placeholder="PAN Number" value={employee.panNumber} onChange={handleChange} />
      <input type="text" name="mobileNumber" placeholder="Mobile Number" value={employee.mobileNumber} onChange={handleChange} />
      <input type="text" name="permanentAddress" placeholder="Permanent Address" value={employee.permanentAddress} onChange={handleChange} />
      <input type="text" name="temporaryAddress" placeholder="Temporary Address" value={employee.temporaryAddress} onChange={handleChange} />
      <button type="submit">Save Employee</button>
    </form>
  );
};

export default EmployeeForm;
