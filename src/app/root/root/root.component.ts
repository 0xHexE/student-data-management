import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {AngularFireAuth} from '@angular/fire/auth';
import {ComponentPortal} from '@angular/cdk/portal';
import {ESCAPE} from '@angular/cdk/keycodes';
import {filter, take} from 'rxjs/operators';
import {HorizontalConnectionPos, Overlay, VerticalConnectionPos} from '@angular/cdk/overlay';
import {MatDialog} from '@angular/material';
import {ProfileMenuComponent} from '../../shared-components/profile-menu/profile-menu.component';
import {Router} from '@angular/router';

@Component({
  selector: 'f4erp-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit, OnDestroy {
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    public angularFireAuth: AngularFireAuth,
    private matDialog: MatDialog,
    private overlay: Overlay,
    private router: Router,
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
  }

  openProfile($event) {
    const [originX, originFallbackX]: HorizontalConnectionPos[] = ['end', 'start'];
    const [overlayY, overlayFallbackY]: VerticalConnectionPos[] = ['top', 'bottom'];

    let [originY, originFallbackY] = [overlayY, overlayFallbackY];
    const [overlayX, overlayFallbackX] = [originX, originFallbackX];
    const offsetY = 0;

    originY = overlayY === 'top' ? 'bottom' : 'top';
    originFallbackY = overlayFallbackY === 'top' ? 'bottom' : 'top';

    const overlay = this.overlay.create({
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-transparent-backdrop',
      positionStrategy: this.overlay.position().flexibleConnectedTo($event.target).withPositions([
        {originX, originY, overlayX, overlayY, offsetY},
        {originX: originFallbackX, originY, overlayX: overlayFallbackX, overlayY, offsetY},
        {
          originX,
          originY: originFallbackY,
          overlayX,
          overlayY: overlayFallbackY,
          offsetY: -offsetY
        },
        {
          originX: originFallbackX,
          originY: originFallbackY,
          overlayX: overlayFallbackX,
          overlayY: overlayFallbackY,
          offsetY: -offsetY
        }
      ]),
    });

    overlay.keydownEvents()
      .pipe(filter(event => event.keyCode === ESCAPE))
      .subscribe(() => overlay.dispose());

    const userProfilePortal = new ComponentPortal(ProfileMenuComponent);

    this.router.events.pipe( take(1) ).subscribe(e => {
      overlay.dispose();
    });

    overlay.attach(userProfilePortal);
    overlay.backdropClick().subscribe(() => overlay.dispose());
  }
}
