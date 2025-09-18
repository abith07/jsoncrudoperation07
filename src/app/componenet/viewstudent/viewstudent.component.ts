import { getLocaleDateFormat } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
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
   this.finaldata$=this.data$;
  }

  deletestudentbyID(id:any){
    return this.servicecall.deleteStudent(id).subscribe((data)=>{
      alert("deleted successfully");
      this.rr.navigate(['/viewStudent']);
      //this.rr.navigate(['/viewStudent'])
    });
  }

}
