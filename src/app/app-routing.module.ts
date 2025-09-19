import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddstudentComponent } from './componenet/addstudent/addstudent.component';
import { ViewstudentComponent } from './componenet/viewstudent/viewstudent.component';
import { ViewbyIdStudentComponent } from './componenet/viewby-id-student/viewby-id-student.component';
import { UpdatecomponentComponent } from './componenet/updatecomponent/updatecomponent.component';

const routes: Routes = [
  {path:'',redirectTo:'addStudent',pathMatch:'full'},
 { path:'addStudent',component:AddstudentComponent },
 { path:'viewStudent',component:ViewstudentComponent },
 { path:'viewStudentId/:id',component:ViewbyIdStudentComponent },
 { path:'viewStudent/:id',component:ViewstudentComponent},
 { path:'updateStudent/:id',component:UpdatecomponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
