import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';  // Import RouterModule
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';  // Import EmployeeComponent

const routes: Routes = [
  { path: '', component: AppComponent },  // Home route (if needed)
  { path: 'employee', component: EmployeeComponent },  // Define route to employee page
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent  // Declare EmployeeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),  // Make sure RouterModule is included here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
