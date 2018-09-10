import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileMenuComponent } from './profile-menu/profile-menu.component';
import {MatButtonModule, MatIconModule, MatListModule, MatProgressBarModule, MatToolbarModule} from '@angular/material';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {RouterModule} from '@angular/router';
import { ProfileInformationComponent } from './profile-information/profile-information.component';

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    AngularFireAuthModule,
    MatButtonModule,
    MatProgressBarModule,
    RouterModule,
  ],
  declarations: [ProfileMenuComponent, ProfileInformationComponent],
  entryComponents: [ProfileMenuComponent],
  exports: [ProfileMenuComponent, ProfileInformationComponent],
})
export class SharedComponentsModule { }
