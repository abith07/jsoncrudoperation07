import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../model/student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StuserviceService {
  apiurl:string="https://ec2-13-204-47-249.projects.wecreateproblems.com/proxy/8000/students"
  constructor(private httpcall:HttpClient){}
  addStudent(student:Student):Observable<any>{
    return this.httpcall.post(this.apiurl,student);
  }
  viewStudent():Observable<any>{
    return this.httpcall.get(this.apiurl);

  }
  viewStudentId(id:any):Observable<any>{
    return this.httpcall.get(this.apiurl+"/"+id)

  }
  deleteStudent(id:any):Observable<any>{
    return this.httpcall.delete(this.apiurl+"/"+id);
  }

  

  



}
