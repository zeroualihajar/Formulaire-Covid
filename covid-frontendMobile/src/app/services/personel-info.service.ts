import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PersonelInfoService {
  baseUrl ='http://localhost:8000/api';
  header = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer'+ this.getToken()
  })
  datainfo =null;
  constructor(private http: HttpClient) { }

  personelInfoStore(data)
  {
    return this.http.post(`${this.baseUrl}/personalInfo`, data,{headers:this.header});
  }
 
  getToken(){
    return localStorage.getItem('token');
  }

  getInfo()
  {
    this.deleteContent();
    return this.http.get(`${this.baseUrl}/info`,{headers:this.header}).pipe(
      tap(
        data =>{
          this.datainfo = data['patient']
          
        }
        
      )
    )
  }
  getDataInfo()
  {
    return this.datainfo
    
  }

  deleteContent()
  {
    this.datainfo=[];
  }

}
