import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { IAPIResponseModel, IEmployee } from '../../model/interface/role';
import { Client } from '../../model/class/Client';

@Component({
  selector: 'app-client-project',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css'
})
export class ClientProjectComponent implements OnInit {

  projectForm: FormGroup = new FormGroup({

    clientProjectId: new FormControl(0),
    projectName: new FormControl("",[Validators.required,Validators.minLength(4)]),
    startDate: new FormControl(""),
    expectedEndDate: new FormControl(""),
    ledByEmpId: new FormControl(""),
    completedDate: new FormControl(""),
    contactPerson: new FormControl(""),
    contactPersonContactNo: new FormControl(""),
    totalEmpWorking: new FormControl(""),
    projectCost: new FormControl(""),
    projectDetails: new FormControl(""),
    contactPersonEmailId: new FormControl(""),
    clientId: new FormControl(""),

  });

  clientService= inject(ClientService);
  clientList : Client[] =[];
  employeeList : IEmployee[] = [];

  ngOnInit(): void {
    this.loadEmployees();
    this.loadClients();
  }

  loadEmployees(){
    this.clientService.getAllEmployees().subscribe((res : IAPIResponseModel)=>{
      this.employeeList = res.data;
    });
  }

  
  loadClients(){
    this.clientService.getAllClient().subscribe((res : IAPIResponseModel)=> {
      this.clientList = res.data;
    });
  }

  onSaveProject(){
    const formValue = this.projectForm.value;
    console.log(formValue);
   
    this.clientService.addUpdateClientProject(formValue).subscribe((res: IAPIResponseModel)=>{
   
      if(res.result){
        alert('Project saved successfully');
      }else{
        alert(res.message);
      }
    });
  }

}
