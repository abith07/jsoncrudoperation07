import { getLocaleDateFormat } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { filter, map, Observable, of, pipe } from 'rxjs';
import { Student } from 'src/app/model/student';
import { StuserviceService } from 'src/app/service/stuservice.service';

@Component({
  selector: 'app-viewstudent',
  templateUrl: './viewstudent.component.html',
  styleUrls: ['./viewstudent.component.css']
})
export class ViewstudentComponent implements OnInit {
  data$:Observable<Student[]>=of([]);
  finaldata$:Observable<Student[]>=of([]);
  idvalue$!:string;
  constructor(private servicecall:StuserviceService,private ar: ActivatedRoute,private rr:Router){

  }

  ngOnInit(): void {
    this.idvalue$=String(this.ar.snapshot.paramMap.get('id'))
    if(this.idvalue$){
     this.deletestudentbyID(this.idvalue$);
      
    }
     this.getData();
  }
   // throw new Error('Method not implemented.');
   getData(){
   this.data$=this.servicecall.viewStudent();
   this.finaldata$=this.data$
   .pipe(map((d)=>d.sort((a:Student,b:Student)=>a.name.localeCompare(b.name) )))
   
  }

  deletestudentbyID(id:any){
    return this.servicecall.deleteStudent(id).subscribe((data)=>{
      alert("deleted successfully");
      this.rr.navigate(['/viewStudent']);
      //this.rr.navigate(['/viewStudent'])
    });
  }
  searchValue(e:any){
    const valuegiven=e.target.value;
    if(!valuegiven){
      this.finaldata$=this.data$
      return
    }
    else{
      this.finaldata$=this.data$.pipe(map((stu)=>{
        return stu.filter(
          (student)=>
            student.name.toString().includes(valuegiven));}))
      }
      }
    }
  


