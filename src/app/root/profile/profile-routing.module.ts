import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileManageComponent } from './profile-manage/profile-manage.component';

const routes: Routes = [{
  path: '',
  component: ProfileManageComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
