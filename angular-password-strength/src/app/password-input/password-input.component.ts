import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.css']
})
export class PasswordInputComponent {
  password: string = '';
  @Output() passwordChange: EventEmitter<string> = new EventEmitter<string>();

  onPasswordChange(): void {
    this.passwordChange.emit(this.password);
  }
}
