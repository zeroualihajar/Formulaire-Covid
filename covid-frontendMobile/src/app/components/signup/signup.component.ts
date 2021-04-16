import { Component, OnInit } from '@angular/core';
import { JarwisServiceService } from 'src/app/services/jarwis-service.service';
import { TokenService } from 'src/app/services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  public form={
    email:null,
    name:null,
    password:null,
    password_confirmation:null,
    user:'patient'

  };
  public error:null;
  constructor(private jarwis: JarwisServiceService,
              private token : TokenService,
              private router :Router) { }

  ngOnInit() {}

  onSubmit()
  {
    this.jarwis.signup(this.form).subscribe(
      data =>this.handleResponse(data),
      error =>this.handleError(error)
      
    )
  }
  handleError(error)
  {
    this.error =error.error.message;
  }

  handleResponse(data)
  {
    this.token.handle(data.token);
    this.router.navigateByUrl('/home');
  }
}
