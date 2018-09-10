import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileManageComponent } from './profile-manage/profile-manage.component';
import {
  MatButtonModule,
  MatCardModule,
  MatDatepickerModule, MatDividerModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule, MatListModule,
  MatNativeDateModule, MatSelectModule, MatSnackBarModule,
  MatStepperModule, MatTableModule, MatToolbarModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import { ProfileRootComponent } from './profile-root/profile-root.component';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatStepperModule,
    FlexLayoutModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatDividerModule,
    MatSelectModule,
    MatTableModule,
    MatListModule,
    MatIconModule,
    MatSnackBarModule,
  ],
  declarations: [ProfileManageComponent, ProfileRootComponent]
})
export class ProfileModule { }
