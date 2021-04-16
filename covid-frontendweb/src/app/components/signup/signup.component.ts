import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/Services/jarwis.service';
import { TokenService } from 'src/app/Services/token.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public form={
    email:null,
    name:null,
    password:null,
    password_confirmation: null,
    user:'doctor'
  };
  public error:null;
  constructor(private jarwis : JarwisService,
              private token : TokenService,
              private router : Router
              ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.jarwis.signup(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    )};
  handleError(error){
    this.error=error.error.message;
  }
  handleResponse(data)
  {
    this.token.handle(data.token);
    this.router.navigateByUrl('/profile');
  }
}
