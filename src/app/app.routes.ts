import { Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';

export const routes: Routes = [
  { path: 'employees', component: EmployeeComponent },  // Route configuration for /employees
  { path: '', redirectTo: '/home', pathMatch: 'full' },  // Default route (optional)
  { path: '**', redirectTo: '/home' }  // Wildcard route for undefined routes (optional)
];