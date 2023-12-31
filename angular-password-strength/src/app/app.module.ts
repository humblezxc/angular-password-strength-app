import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PasswordStrengthSectionComponent } from './password-strength-section/password-strength-section.component';
import { PasswordInputComponent } from './password-input/password-input.component';
import { FormsModule } from '@angular/forms';
import { PasswordPageComponent } from './password-page/password-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PasswordStrengthSectionComponent,
    PasswordInputComponent,
    PasswordPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
