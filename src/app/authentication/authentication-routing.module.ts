import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [{
  path: '',
  children: [
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'sign-in',
    },
    {
      path: 'sign-in',
      component: SignInComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
