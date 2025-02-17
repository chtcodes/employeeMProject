import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent {

  firstName : string = "Angular tutorial";
  angularVersion = "Version 18";

  version : number = 18;

  isActive : boolean = true;

  currentDate : Date = new Date();

  inputType : string = "checkbox";

  selectedCity : string = '';

  showWelcomeAlert(){
    alert("Welcome to Angular 18!");
  }

  showMessage(message : string){
    alert(message);
  }


}
