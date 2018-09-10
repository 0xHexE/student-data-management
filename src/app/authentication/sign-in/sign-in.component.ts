import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { MatSnackBar } from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'f4erp-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(
    private title: Title,
    private fireAuth: AngularFireAuth,
    private matSnackBar: MatSnackBar,
    private router: Router,
  ) { }

  ngOnInit() {
    this.title.setTitle('Sign in | F4ERP');
  }

  login() {
    new Promise<any>(async (resolve, reject) => {
      const data = await this.fireAuth.auth.signInWithPopup( new auth.GoogleAuthProvider() ).then(d => d).catch(e => reject(e));
      resolve(data);
    }).then(() => {
      this.router.navigateByUrl('/');
    }, e => {
      this.matSnackBar.open(`${ e }`, 'OK', {
        duration: 10000
      });
    });
  }

}
