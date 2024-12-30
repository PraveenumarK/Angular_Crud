import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  { path: 'employees', component: EmployeeComponent }, // Route for employee page
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Home route (if applicable)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }