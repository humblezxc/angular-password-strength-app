import { Component } from '@angular/core';

@Component({
  selector: 'app-password-page',
  templateUrl: './password-page.component.html',
  styleUrls: ['./password-page.component.css']
})
export class PasswordPageComponent {
  password: string = '';

  onPasswordChange(password: string): void {
    this.password = password;
  }
}
