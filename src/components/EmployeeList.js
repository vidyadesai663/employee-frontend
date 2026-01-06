// src/components/EmployeeList.js
import React, { useEffect, useState } from "react";
import EmployeeService from "../service/EmployeeService";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  const fetchEmployees = () => {
    EmployeeService.getEmployees()
      .then((res) => setEmployees(res.data))
      .catch((err) => console.error("Error fetching employees:", err));
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      EmployeeService.deleteEmployee(id)
        .then(() => {
          alert("Employee deleted!");
          fetchEmployees(); // Refresh list
        })
        .catch((err) => console.error("Error deleting employee:", err));
    }
  };

  return (
    <div>
      <h2>Employee List</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Full Name</th>
            <th>Father Name</th>
            <th>Mother Name</th>
            <th>DOB</th>
            <th>Aadhar</th>
            <th>PAN</th>
            <th>Mobile</th>
            <th>Permanent Address</th>
            <th>Temporary Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.employeeId}</td>
              <td>{emp.fullName}</td>
              <td>{emp.fatherName}</td>
              <td>{emp.motherName}</td>
              <td>{emp.dateOfBirth}</td>
              <td>{emp.aadharNumber}</td>
              <td>{emp.panNumber}</td>
              <td>{emp.mobileNumber}</td>
              <td>{emp.permanentAddress}</td>
              <td>{emp.temporaryAddress}</td>
              <td>
                <button onClick={() => handleDelete(emp.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
