import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BranchManagementComponent } from './branch-management/branch-management.component';
import { EmployeeManagementComponent } from './employee-management/employee-management.component';

const routes: Routes = [
  { path: '', redirectTo: '/branches', pathMatch: 'full' },
  { path: 'branches', component: BranchManagementComponent },
  { path: 'employees', component: EmployeeManagementComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BranchManagementComponent,
    EmployeeManagementComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
