import { Component } from '@angular/core';

@Component({
  selector: 'app-test-button',
  standalone:true,
  imports: [],
  templateUrl: './test-button.component.html',
  styleUrl: './test-button.component.css'
})
export class TestButtonComponent {
name:string=""
changeName(){
  this.name="Ram"
}
}
