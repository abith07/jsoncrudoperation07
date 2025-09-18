import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StuserviceService } from 'src/app/service/stuservice.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {
  formg!:FormGroup;
  constructor(private formb:FormBuilder,private servicecall:StuserviceService){
    
  }
  ngOnInit(): void {
    this.formg=this.formb.group({
      name:["",[Validators.required,Validators.minLength(3),Validators.maxLength(12)]],
      password:["",[Validators.required,Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])(?=.*[^A-Za-z0-9]).{8,}$")]],
      mobile:["",[Validators.required,Validators.pattern("^[6-9][0-9]{9}$")]],
      email:["",[Validators.required,Validators.email]],
      dateofBirth:["",[Validators.required,Validators.pattern('^\\d{4}-\\d{2}-\\d{2}$')]]

    })
    //throw new Error('Method not implemented.');
  }
  addInfo(){
    if(this.formg.valid){
      this.servicecall.addStudent(this.formg.value).subscribe((data)=>console.log(data));
      alert("success");
    }
  }
  onsubmit(){
    
  }

}
//git remote add origin https://github.com/abith07/jsoncrudoperation07.git
//git push -u origin main

