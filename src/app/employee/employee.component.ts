import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../app.employee';
import { CommonModule } from '@angular/common'; // To use common Angular features like ngIf, ngFor
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  employees: Employee[] = [];
  newEmployee: Employee = { name: '', role: '', salary: 0 };
  isEditMode: boolean = false;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(): void {
    this.employeeService.getEmployees().subscribe((data) => {
      this.employees = data;
    });
  }

  addEmployee(): void {
    this.employeeService.createEmployee(this.newEmployee).subscribe(() => {
      this.getEmployees();
      this.newEmployee = { name: '', role: '', salary: 0 }; // Reset form
    });
  }

  editEmployee(employee: Employee): void {
    this.newEmployee = { ...employee }; // Copy properties for editing
    this.isEditMode = true;
  }

  updateEmployee(): void {
    this.employeeService.updateEmployee(this.newEmployee.id!, this.newEmployee).subscribe(() => {
      this.getEmployees();
      this.newEmployee = { name: '', role: '', salary: 0 }; // Reset form
      this.isEditMode = false;
    });
  }

  deleteEmployee(id: number): void {
    this.employeeService.deleteEmployee(id).subscribe(() => {
      this.getEmployees();
    });
  }
}
