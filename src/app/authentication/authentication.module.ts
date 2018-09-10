import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import {
  MatButtonModule,
  MatCardModule, MatDividerModule, MatIconModule, MatSnackBarModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatSnackBarModule,
  ],
  declarations: [
    SignInComponent,
  ],
})
export class AuthenticationModule { }
