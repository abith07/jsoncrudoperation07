import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StuserviceService } from 'src/app/service/stuservice.service';

@Component({
  selector: 'app-updatecomponent',
  templateUrl: './updatecomponent.component.html',
  styleUrls: ['./updatecomponent.component.css']
})
export class UpdatecomponentComponent implements OnInit {
  formg!:FormGroup;
  idvalues!:string
  constructor(private formb:FormBuilder,private servicecall:StuserviceService,private ar:ActivatedRoute,private rr:Router){
    
  }
  ngOnInit(): void {
    this.idvalues=String(this.ar.snapshot.paramMap.get('id'))
    if(this.idvalues){
      this.servicecall.viewStudentId(this.idvalues).subscribe((data)=>{
        this.formg.patchValue(data)
      })
    }
    this.formg=this.formb.group({
      name:["",[Validators.required,Validators.minLength(3),Validators.maxLength(12)]],
      password:["",[Validators.required,Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])(?=.*[^A-Za-z0-9]).{8,}$")]],
      mobile:["",[Validators.required,Validators.pattern("^[6-9][0-9]{9}$")]],
      email:["",[Validators.required,Validators.email]],
      dateofBirth:["",[Validators.required,Validators.pattern('^\\d{4}-\\d{2}-\\d{2}$')]]

    })
    //throw new Error('Method not implemented.');
  }
  
  updateInfo(){
    if(this.formg.valid){
      this.servicecall.updateStudent(this.idvalues,this.formg.value).subscribe((data)=>{
        alert("update");
      });
      alert("success");
    }
  }
 

}
