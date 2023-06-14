import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-branch-management',
  templateUrl: './branch-management.component.html',
  styleUrls: ['./branch-management.component.css']
})
export class BranchManagementComponent implements OnInit {
  branches!: any[];
  employees!: any[];
  selectedBranch: any;
  editing = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loadBranches();
    this.loadEmployees();
  }

  loadBranches() {
    this.http.get<any[]>('http://127.0.0.1:8000/api/branches/').subscribe(data => {
      this.branches = data;
    });
  }

  loadEmployees() {
    this.http.get<any[]>('http://127.0.0.1:8000/api/employees/').subscribe(data => {
      this.employees = data;
    });
  }

  editBranch(branch: any) {
    this.editing = true;
    this.selectedBranch = { ...branch };
  }

  deleteBranch(branch: any) {
    if (confirm('Are you sure you want to delete this branch?')) {
      this.http.delete(`http://127.0.0.1:8000/api/branches/${branch.id}`).subscribe(() => {
        this.loadBranches();
      });
    }
  }

  saveBranch() {
    if (this.editing) {
      this.http.put(`http://127.0.0.1:8000/api/branches/${this.selectedBranch.id}`, this.selectedBranch).subscribe(() => {
        this.editing = false;
        this.selectedBranch = null;
        this.loadBranches();
      });
    } else {
      this.http.post('http://127.0.0.1:8000/api/branches/', this.selectedBranch).subscribe(() => {
        this.selectedBranch = null;
        this.loadBranches();
      });
    }
  }
}
