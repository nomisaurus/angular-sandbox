import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { NavbarComponent } from './components/navbar/navbar.component';
import { provideRouter, RouterOutlet } from '@angular/router';
import { routes } from './routing';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, NavbarComponent, RouterOutlet],
  templateUrl: './main.component.html',
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, {
  providers: [provideRouter(routes)],
});
