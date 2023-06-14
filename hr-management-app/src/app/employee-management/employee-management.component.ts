import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee-management',
  templateUrl: './employee-management.component.html',
  styleUrls: ['./employee-management.component.css']
})
export class EmployeeManagementComponent implements OnInit {
  employees: any[] = [];
  branches: any[] = [];
  selectedEmployee: any;
  editing = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loadEmployees();
    this.loadBranches();
  }

  loadEmployees() {
    this.http.get<any[]>('/api/employees').subscribe(data => {
      this.employees = data;
    });
  }

  loadBranches() {
    this.http.get<any[]>('/api/branches').subscribe(data => {
      this.branches = data;
    });
  }

  editEmployee(employee: any) {
    this.editing = true;
    this.selectedEmployee = { ...employee };
  }

  deleteEmployee(employee: any) {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.http.delete(`/api/employees/${employee.id}`).subscribe(() => {
        this.loadEmployees();
      });
    }
  }

  saveEmployee() {
    if (this.editing) {
      this.http.put(`/api/employees/${this.selectedEmployee.id}`, this.selectedEmployee).subscribe(() => {
        this.editing = false;
        this.selectedEmployee = null;
        this.loadEmployees();
      });
    } else {
      this.http.post('/api/employees', this.selectedEmployee).subscribe(() => {
        this.selectedEmployee = null;
        this.loadEmployees();
      });
    }
  }
}
