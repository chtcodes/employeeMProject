import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IAPIResponseModel, IRole } from '../../model/interface/role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit{

  //variable to store api data
  roleList: IRole[] = [];

  //dependency injection
  http = inject(HttpClient);

  //old way of dependency injection with constructor
  // constructor(private http : HttpClient){

  // }

  //life cyclel event for the component when initialized first
 ngOnInit(): void {
   this.getAllRoles();
 }

 //function to make API call
getAllRoles(){
  this.http.get<IAPIResponseModel>("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles").subscribe((res: IAPIResponseModel)=>{
    this.roleList = res.data;
  });
}


}
