import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AppComponent } from './app.component';
import { ListemployeeComponent } from './employees/listemployee.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import {NgForm,FormsModule} from '@angular/forms';

const appRoutes: Routes = [
  { path: 'list', component: ListemployeeComponent },
  { path: 'create', component: CreateEmployeeComponent },
  { path: '', redirectTo:'/list',pathMatch:'full' },
];
@NgModule({
  declarations: [
    AppComponent,
    ListemployeeComponent,
    CreateEmployeeComponent
  ],
  imports: [
    BrowserModule, FormsModule, BsDatepickerModule.forRoot(), RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
