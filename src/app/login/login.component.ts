import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators ,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
login=new FormGroup({
  username:new FormControl<string>(''),
  password:new FormControl<string>('')
});

passwordTag:boolean=true

passwordToggle(){
  console.log(this.passwordTag)
  this.passwordTag=!this.passwordTag
}

}
