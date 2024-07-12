import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // ngmodule is used in formsmodule library
import { AppRoutingModule, routingComponents } from './app-routing.module'; // this is required to be imported to do routing

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { StrucDirectivesComponent } from './struc-directives/struc-directives.component';
import { ComponentInteractionsComponent } from './component-interactions/component-interactions.component';
import { PipesComponent } from './pipes/pipes.component';
import { ServicesComponent } from './services/services.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeService } from './employee.service';
import { HttpfunctioningService } from './httpfunctioning.service';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DeptDetailComponent } from './dept-detail/dept-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test2Component,
    StrucDirectivesComponent,
    ComponentInteractionsComponent,
    PipesComponent,
    ServicesComponent,
    EmployeeDetailComponent,
    // DepartmentListComponent, no need to declare them now 
    // EmployeeListComponent,
    routingComponents,
    PageNotFoundComponent,
    DeptDetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [EmployeeService,HttpfunctioningService], // registering the service in the app.module
  bootstrap: [AppComponent],
})
export class AppModule {}
