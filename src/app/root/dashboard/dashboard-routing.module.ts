import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardRootComponent} from './dashboard-root/dashboard-root.component';

const routes: Routes = [{
  path: '',
  component: DashboardRootComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
