import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { FocusTrap } from '@angular/cdk/a11y';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  baseUrl ='http://localhost:8000/api';
  header = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer'+ this.getToken()
  })
  dataResult =new Array();
  constructor(private http:HttpClient) 
  { }

  questionsResponse(data)
  {
    return this.http.post(`${this.baseUrl}/medicalInfo`, data, {headers:this.header})
  }
  
  getToken(){
    return localStorage.getItem('token');
  }

  getResult()
  {
    this.deleteContent();
    return this.http.get(`${this.baseUrl}/results`,{headers:this.header}).pipe(
      tap(
        data =>{
          for(let index of Object.keys(data['resultat']))
          {
            this.dataResult.push(data['resultat'][index]);
          }
          console.log(data['resultat'][0])
      },
        error =>console.log(error)
      )
    )
  }

  getDataResult()
  {
    return this.dataResult
    
  }

  deleteContent()
  {
    this.dataResult=[];
  }
}
