import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JarwisServiceService {
  private baseUrl ='http://localhost:8000/api'
  constructor(private http:HttpClient) { }

  login(data)
  { 
    return this.http.post(`${this.baseUrl}/login`, data);
  }
  signup(data)
  {
    return this.http.post(`${this.baseUrl}/register`, data);
  }

  SendPasswordResetLink(data)
  {
    return this.http.post(`${this.baseUrl}/sendPasswordResetLink`, data);
  }

  changePassword(data)
  {
    return this.http.post(`${this.baseUrl}/resetPassword`,data);
  }
}
