import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-password-strength-section',
  templateUrl: './password-strength-section.component.html',
  styleUrls: ['./password-strength-section.component.css']
})
export class PasswordStrengthSectionComponent {
  @Input() password!: string;

  calculateStrength(sectionNumber: number): string {
    if (!this.password) {
      return 'gray';
    } else if (this.password.length < 8) {
      return  'red';
    } else if (
      /[a-zA-Z]/.test(this.password) &&
      /[0-9]/.test(this.password) &&
      /[!@#$%^&*]/.test(this.password)
    ) {
      return 'green';
    } else if (
      (/[a-zA-Z]/.test(this.password) && /[0-9]/.test(this.password)) ||
      (/[a-zA-Z]/.test(this.password) && /[!@#$%^&*]/.test(this.password)) ||
      (/[0-9]/.test(this.password) && /[!@#$%^&*]/.test(this.password))
    ) {
      return sectionNumber <= 2 ? 'yellow' : 'gray';
    } else {
      return sectionNumber === 1 ? 'red' : 'gray';
    }
  }
}
