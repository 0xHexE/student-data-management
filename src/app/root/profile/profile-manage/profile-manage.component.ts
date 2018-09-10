import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Title} from '@angular/platform-browser';
import {Subscription} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'f4erp-profile-manage',
  templateUrl: './profile-manage.component.html',
  styleUrls: ['./profile-manage.component.scss']
})
export class ProfileManageComponent implements OnInit, OnDestroy {
  get isLoading(): boolean {
    return this._isLoading;
  }

  set isLoading(value: boolean) {
    if (value) {
      this.personalInformation.disable();
    } else {
      this.personalInformation.enable();
    }

    this._isLoading = value;
  }
  personalInformation: FormGroup;
  addressForm: FormGroup;
  formFirstData = [];
  addresses = [];
  formFirstSubscription: Subscription;
  formSecondSubscription: Subscription;

  private _isLoading = false;

  constructor(
    private _formBuilder: FormBuilder,
    private _title: Title,
    private angularFirestore: AngularFirestore,
    private angularAuth: AngularFireAuth,
    private matSnackbar: MatSnackBar,
  ) { }

  ngOnInit() {
    this._title.setTitle(`Profile | F4ERP`);
    this.personalInformation = this._formBuilder.group({
      prnNumber: [],
      firstName: ['', Validators.required],
      middleName: ['', Validators.required],
      lastName: ['', Validators.required],
      dob: [null, Validators.compose([Validators.required])],
      mothersName: ['', Validators.required],
      fathersName: ['', Validators.required],
    });

    this.formFirstSubscription = this.personalInformation.valueChanges.subscribe(d => {
      if (this.personalInformation.valid) {
        this.formFirstData = this.objectToArray(d);
      }
    });

    this.addressForm = this._formBuilder.group({
      address: this._formBuilder.array([]),
    });

    this.formSecondSubscription = this.addressForm.valueChanges.subscribe(d => {
      if (this.addressForm.valid) {
        this.addresses = d.address.map(res => this.objectToArray(res)).map((currentValue: any[]) => {
          return currentValue.map(res => `${ res.key } ${ res.value }`).join(' ');
        });
      }
    });

  }

  saveForm() {
    this.isLoading = true;
    this.angularFirestore.collection('users')
      .doc( this.angularAuth.auth.currentUser.uid )
      .set({
        personalInformation: this.personalInformation.value,
        addressInformation: this.addressForm.value.address,
      })
      .then(docs => {
        this.isLoading = false;
      })
      .catch(e => {
        this.isLoading = false;
        this.matSnackbar.open(`Failed to save ${ e }`, 'OK');
      });
  }

  objectToArray(array: any) {
    return Object.keys(array).map(res => {
      return {
        // FOR THE HUMAN READABLE STRING ref: https://stackoverflow.com/questions/21147832/convert-camel-case-to-human-readable-string
        key: res.match(/^[a-z]+|[A-Z][a-z]*/g).map((x) => {
          return x[0].toUpperCase() + x.substr(1).toLowerCase();
        }).join(' '),
        value: array[res],
      };
    });
  }

  ngOnDestroy(): void {
    this.formFirstSubscription.unsubscribe();
  }

  get address() {
    return this.addressForm.get('address') as FormArray;
  }

  addAddress(data = {}) {
    return this._formBuilder.group({
      street: [data['street'], Validators.compose([ Validators.required ])],
      city: [data['city'], Validators.compose([ Validators.required ])],
      state: [data['state'], Validators.compose([ Validators.required ])],
      pinCode: [data['pinCode'], Validators.pattern(/^\d{6}$/)],
    });
  }

  addAddressIntoAddress() {
    this.address.push(this.addAddress());
  }
}
