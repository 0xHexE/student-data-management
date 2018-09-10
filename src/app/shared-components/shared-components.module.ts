import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileMenuComponent } from './profile-menu/profile-menu.component';
import {MatIconModule, MatListModule, MatToolbarModule} from '@angular/material';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    AngularFireAuthModule,
    RouterModule,
  ],
  declarations: [ProfileMenuComponent],
  entryComponents: [ProfileMenuComponent],
  exports: [ProfileMenuComponent],
})
export class SharedComponentsModule { }
