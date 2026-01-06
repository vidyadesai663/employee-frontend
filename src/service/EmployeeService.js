// src/service/EmployeeService.js
import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8081/api/employees";

class EmployeeService {
  
  // GET all employees
  getEmployees() {
    return axios.get(EMPLOYEE_API_BASE_URL);
  }

  // POST new employee
  createEmployee(employee) {
    return axios.post(EMPLOYEE_API_BASE_URL, employee);
  }

  // GET employee by ID
  getEmployeeById(employeeId) {
    return axios.get(`${EMPLOYEE_API_BASE_URL}/${employeeId}`);
  }

  // PUT update employee
  updateEmployee(employeeId, employee) {
    return axios.put(`${EMPLOYEE_API_BASE_URL}/${employeeId}`, employee);
  }

  // DELETE employee
  deleteEmployee(employeeId) {
    return axios.delete(`${EMPLOYEE_API_BASE_URL}/${employeeId}`);
  }
}

export default new EmployeeService();
