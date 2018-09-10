import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from '@angular/router';
import {map, switchMap} from 'rxjs/operators';

@Component({
  selector: 'f4erp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isLoading = false;

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private router: Router,
  ) {
    this.matIconRegistry.addSvgIcon(
      'google',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/google.svg')
    );
  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      switch (event.constructor.name) {
        case 'NavigationStart':
          this.isLoading = true;
          break;
        case 'NavigationEnd':
          this.isLoading = false;
      }
    });
  }
}
