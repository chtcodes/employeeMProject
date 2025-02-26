import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/class/Client';
import { environment } from '../../environments/environment.development';
import { IAPIResponseModel } from '../model/interface/role';
import { constant } from '../constant/constant';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getAllClient(): Observable<IAPIResponseModel>{
    return this.http.get<IAPIResponseModel>(environment.API_URL + constant.API_METHOD.GET_ALL_CLIENT);
  }

  getAllEmployees(): Observable<IAPIResponseModel>{
    return this.http.get<IAPIResponseModel>(environment.API_URL + constant.API_METHOD.GET_ALL_EMP);
  }

  addUpdateClientProject(obj : any): Observable<IAPIResponseModel>{
    return this.http.post<IAPIResponseModel>(environment.API_URL + "AddUpdateClientProject",obj);
  }

  addClient(clientObj : Client): Observable<IAPIResponseModel>{
    return this.http.post<IAPIResponseModel>(environment.API_URL + "AddUpdateClient", clientObj);
  }

  deleteClientById(id: number): Observable<IAPIResponseModel>{
     return this.http.delete<IAPIResponseModel>(environment.API_URL+"/DeleteClientByClientId?clientId="+id);
  }

  getAllUsers(){
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }

  getAllClientProjects(){
    return this.http.get<IAPIResponseModel>(environment.API_URL + constant.API_METHOD.GET_ALL_PROJECTS);
  }

}
