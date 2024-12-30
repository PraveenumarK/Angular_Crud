import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'employee-management';

  constructor(private router: Router) {}

  goToEmployeePage() {
    this.router.navigate(['/employee']);  // Programmatic navigation
  }
}
