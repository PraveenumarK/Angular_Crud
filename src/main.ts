import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { AppRoutingModule } from './app/app-routing.module';
import { provideRouter } from '@angular/router';  // Provide router configuration for standalone components
import { routes } from './app/app.routes';
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)  // Provide the routing configuration
  ]
})
  .catch(err => console.error(err));
