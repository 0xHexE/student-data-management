import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import {map, tap} from 'rxjs/operators';

@Injectable()
export class IsAuthenticatedGuard implements CanActivate {
  constructor(
    private fireAuth: AngularFireAuth,
    private router: Router,
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this.fireAuth.authState.pipe(
      map(res => !!res),
      tap(res => {
        if (!res) {
          this.router.navigateByUrl('/authentication/sign-in');
        }
      }),
    );
  }
}
