import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RootComponent } from './root/root.component';

const routes: Routes = [{
  path: '',
  component: RootComponent,
  children: [
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'dashboard',
    },
    {
      path: 'dashboard',
      loadChildren: './dashboard/dashboard.module#DashboardModule',
    },
    {
      path: 'profile',
      loadChildren: './profile/profile.module#ProfileModule',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RootRoutingModule { }
