import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators ,ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  standalone:true,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
register=new FormGroup({
  name:new FormControl('',Validators.required),
  email:new FormControl('',[Validators.required,Validators.email]),
  password:new FormControl('',Validators.required),
  confirmpassword:new FormControl('',Validators.required),
  role:new FormControl('',Validators.required)
});
}
