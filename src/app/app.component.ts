import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstnameComponent } from './components/firstname/firstname.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FirstnameComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-basics';
  isTheme1 = true;

  toggleTheme() {
    this.isTheme1 = !this.isTheme1;
  }
}
