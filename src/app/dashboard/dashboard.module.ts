import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { FindUserPipe } from '../pipe/find-user.pipe';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [UserListComponent, FindUserPipe]
})
export class DashboardModule { }
