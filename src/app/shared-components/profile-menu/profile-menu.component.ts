import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {OverlayRef} from '@angular/cdk/overlay';

@Component({
  selector: 'f4erp-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.scss']
})
export class ProfileMenuComponent implements OnInit {
  constructor(
    private angularFireAuth: AngularFireAuth,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  async logout() {
    await this.angularFireAuth.auth.signOut();
    await this.router.navigateByUrl('/authentication');
  }

}
