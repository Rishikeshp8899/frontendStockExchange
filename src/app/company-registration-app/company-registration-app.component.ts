import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators ,ReactiveFormsModule } from '@angular/forms';
import {CompanyServiceService} from '../company-service.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-company-registration-app',
  standalone: true,
  imports: [ReactiveFormsModule,HttpClientModule],
  templateUrl: './company-registration-app.component.html',
  styleUrl: './company-registration-app.component.css'
})
export class CompanyRegistrationAppComponent {

constructor(private companyServiceService:CompanyServiceService){}
registerForm=new FormGroup(
  {
    company_name:new FormControl<string>(''),
    company_email:new FormControl<string>('',[Validators.required,Validators.email]),
    password:new FormControl<string>(''),
    contact_no:new FormControl<string>('',[
      Validators.required,Validators.maxLength(10)
    ]),
    location:new FormControl<string>(''),
    turnover_no_1:new FormControl<Number>(0),
    turnover_no_2:new FormControl<Number>(0),
    turnover_no_3:new FormControl<Number>(0),
    turnover_no_4:new FormControl<Number>(0),
    turnover_no_5:new FormControl<Number>(0)
  }
);

 onSubmit() {
    this.companyServiceService.addCompanyRegistration(this.registerForm.value).subscribe({
      next:response=>{
         console.log('Company registered successfully:', response);
      },
       error: error => {
        console.error('Error registering company:', error);
      }
    })
  }



}
