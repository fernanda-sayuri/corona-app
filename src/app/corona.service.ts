
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
 

export class CoronaService {

  url='https://coronavirus-tracker-api.herokuapp.com/v2/locations';
  
  constructor(private httpClient:HttpClient) { }

  getLocations(){
    return this.httpClient.get<any[]>(`${this.url}`);
  }
  getByCountryID(id){
   return this.httpClient.get<any[]>(`${this.url}/${id}`);
  }
}
