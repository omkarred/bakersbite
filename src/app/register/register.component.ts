import { getLocaleWeekEndRange } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Registration } from '../shared/service/register.service';
import {flatMap} from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @ViewChild("myForm") myformFields: NgForm;

  nameTr:any="DefaultValue";
  status:string ; 
  constructor(private registrationService:Registration) { }

  ngOnInit(): void {
  }

  // onSubmit(inputForm:NgForm) {
  //   setTimeout(()=> {}, 3000)
  //   inputForm.setValue({'username':"Milka " , 'lastname':"ffff", 'email':"dddddd", 'gender':"Female"})
  //   console.log(inputForm)
  // }

  onSubmit(){
    // console.log(this.myformFields.form.value.customData)
    // console.log(this.nameTr)

    const status :any = this.registrationService.resgisterUser(this.myformFields.form.value.customData).subscribe(
      (response:any) => {console.log(response.status); this.status = response.status},
      (error)=> {
          this.status = "Error while processing request.";
       } 
      
      );

    if(status instanceof String) {
      this.status = status.toString()
    }


  }


  suggestUserName() {
    this.myformFields.form.patchValue(
      {
        customData: {
          username:"SuperUser"
        }
      }
    )
  }
}
