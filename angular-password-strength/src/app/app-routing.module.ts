import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PasswordInputComponent } from './password-input/password-input.component';

const routes: Routes = [
  { path: '', component: PasswordInputComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
