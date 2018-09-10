import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'f4erp-dashboard-root',
  templateUrl: './dashboard-root.component.html',
  styleUrls: ['./dashboard-root.component.scss']
})
export class DashboardRootComponent implements OnInit {
  isLoading = false;
  dataSub;

  constructor(
    private title: Title,
    private angularFirestore: AngularFirestore,
    private angularFireAuth: AngularFireAuth,
  ) { }

  ngOnInit() {
    this.title.setTitle(`Dashboard | F4ERP`);
    this.isLoading = true;

    this.dataSub = this.angularFirestore.collection('users')
      .doc(this.angularFireAuth.auth.currentUser.uid)
      .snapshotChanges()
      .subscribe(data => {
        this.dataSub = data.payload.exists;
        this.isLoading = false;
      });

  }

}
