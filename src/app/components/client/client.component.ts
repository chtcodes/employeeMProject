import { Component, inject, OnInit } from '@angular/core';
import { Client } from '../../model/class/Client';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { IAPIResponseModel } from '../../model/interface/role';
import { Observable } from 'rxjs';
import { AlertComponent } from '../../reusableComponents/alert/alert.component';
import { MyButtonComponent } from '../../reusableComponents/my-button/my-button.component';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [FormsModule, CommonModule, UpperCasePipe, AlertComponent, MyButtonComponent],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit{
  client : Client = new Client();
  clientList : Client[] =  [];
  clientService = inject(ClientService);

  currentDate: Date = new Date();

  userList$ : Observable<any> = new Observable<any>;

  ngOnInit(): void {
    this.loadClients();
    this.userList$ = this.clientService.getAllUsers();
  }

  loadClients(){
    this.clientService.getAllClient().subscribe((result : IAPIResponseModel)=> {
      this.clientList = result.data;
    });
  }

  onSaveClient(data: string){
    debugger;
    this.clientService.addClient(this.client).subscribe((res:IAPIResponseModel)=>{
      //if the API call is success
      if(res.result){
        alert("Client is created successfully");
        //to load the clients list again after update
        this.loadClients();
        //re-initialize the object - if needed to edit
        this.client = new Client();
      }else{
        alert(res.message);
      }
    });
  }

  onDelete(clientId : number){
    //asking for confirmation - true if confirmed
    let isDelete = confirm("Do you want to delete?");

    //applying the confirmation status
    if(isDelete){
      this.clientService.deleteClientById(clientId).subscribe((res:IAPIResponseModel)=>{
        //if the API call is success
        if(res.result){
         alert("Client is deleted successfully");
         //to load the clients list again after update
         this.loadClients();
         //re-initialize the object - if needed to edit
         this.client = new Client();
       }else{
         alert(res.message);
       }
     });
    }
    
  }


  onEdit(clientObj : Client){
    this.client = clientObj;
    
  }


}
