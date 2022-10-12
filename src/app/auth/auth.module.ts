import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';



@NgModule({
  declarations: [
    LoginComponent,
    ForgetPasswordComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class AuthModule { }
