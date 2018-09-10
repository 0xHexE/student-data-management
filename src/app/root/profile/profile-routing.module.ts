import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileManageComponent } from './profile-manage/profile-manage.component';
import {ProfileRootComponent} from './profile-root/profile-root.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: ProfileRootComponent,
}, {
  path: 'edit',
  component: ProfileManageComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
