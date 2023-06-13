import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-password-strength-section',
  templateUrl: './password-strength-section.component.html',
  styleUrls: ['./password-strength-section.component.css']
})
export class PasswordStrengthSectionComponent {
  @Input() password!: string;

  calculateStrength(): string {
    console.log(this.password)
    if (!this.password) {
      return 'easy';
    } else if (this.password.length < 8) {
      return 'easy';
    } else if (
      /[a-zA-Z]/.test(this.password) &&
      /[0-9]/.test(this.password) &&
      /[!@#$%^&*]/.test(this.password)
    ) {
      return 'strong';
    } else if (
      /[a-zA-Z]/.test(this.password) &&
      /[0-9]/.test(this.password) ||
      /[a-zA-Z]/.test(this.password) &&
      /[!@#$%^&*]/.test(this.password) ||
      /[0-9]/.test(this.password) &&
      /[!@#$%^&*]/.test(this.password)
    ) {
      return 'medium';
    } else {
      return 'easy';
    }
  }
}
