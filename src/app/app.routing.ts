import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IsAuthenticatedGuard} from './guards/is-authenticated.guard';
import {NotFoundPageComponent} from './not-found-page/not-found-page.component';

const route: Routes = [{
  path: 'authentication',
  loadChildren: './authentication/authentication.module#AuthenticationModule',
}, {
  path: '',
  canActivate: [
    IsAuthenticatedGuard,
  ],
  children: [{
    path: '',
    loadChildren: './root/root.module#RootModule',
  }],
}, {
  path: '**',
  component: NotFoundPageComponent,
}];

@NgModule({
  imports: [
    RouterModule.forRoot(route),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRouting { }
