import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';
import { AgGridModule } from 'ag-grid-angular/main';
// import { GridOptions } from "ag-grid";

import { UsersComponent } from './users.component';
import { UsersService } from './shared/users.service';
import { UserFormComponent } from './user-form/user-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule,
    AgGridModule
  ],
  declarations: [
    UsersComponent,
    UserFormComponent
  ],
  exports: [
    UsersComponent
  ],
  providers: [
    UsersService
    // gridOptions
  ]
})
export class UsersModule { }
