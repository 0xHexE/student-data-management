import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardRootComponent } from './dashboard-root/dashboard-root.component';
import {MatButtonModule, MatCardModule, MatProgressBarModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatProgressBarModule,
  ],
  declarations: [DashboardRootComponent]
})
export class DashboardModule { }
