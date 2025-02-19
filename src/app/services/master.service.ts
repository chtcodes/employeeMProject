import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAPIResponseModel } from '../model/interface/role';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }

  getDesignations(){
    return this.http.get<IAPIResponseModel>("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllDesignation");
  }
}
