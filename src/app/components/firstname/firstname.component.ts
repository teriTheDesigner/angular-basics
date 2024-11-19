import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-firstname',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './firstname.component.html',
  styleUrl: './firstname.component.css',
})
export class FirstnameComponent {
  firstName = 'Ada';
}
