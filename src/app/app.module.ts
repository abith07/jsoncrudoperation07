import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddstudentComponent } from './componenet/addstudent/addstudent.component';
import{  HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { ViewstudentComponent } from './componenet/viewstudent/viewstudent.component';
import { ViewbyIdStudentComponent } from './componenet/viewby-id-student/viewby-id-student.component';
import { UpdatecomponentComponent } from './componenet/updatecomponent/updatecomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    AddstudentComponent,
    ViewstudentComponent,
    ViewbyIdStudentComponent,
    UpdatecomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
