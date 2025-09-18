import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Student } from 'src/app/model/student';
import { StuserviceService } from 'src/app/service/stuservice.service';

@Component({
  selector: 'app-viewby-id-student',
  templateUrl: './viewby-id-student.component.html',
  styleUrls: ['./viewby-id-student.component.css']
})
export class ViewbyIdStudentComponent implements OnInit {
  stud$!:any;
  constructor(private ar:ActivatedRoute,private servicecall:StuserviceService){

  }

  ngOnInit(): void {
    this.ar.params.subscribe((pa)=>{
     const d=pa['id']
     this.getById(d)
    })
   }
   getById(id:any){
     this.servicecall.viewStudentId(id).subscribe((data)=>{
         this.stud$=data
     })
  
  

}
}
