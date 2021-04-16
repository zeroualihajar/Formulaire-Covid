import { Component, OnInit } from '@angular/core';
import { JarwisServiceService } from 'src/app/services/jarwis-service.service';
import { TokenService } from 'src/app/services/token.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public form={
    email:null,
    password :null,
    user:'patient'
  }

  public error =null;
  constructor(
    private jarwis:JarwisServiceService,
    private token :TokenService,
    private router :Router,
    private auth :AuthService
  ) {}
  

  onSubmit()
  {
    this.jarwis.login(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    )
  }

  handleError(error)
  {
    this.error =error.error.message;
  }

  ngOnInit(): void {
  }

  handleResponse(data)
  {
    this.token.handle(data.token);
    this.auth.changeAurhStatus(true);
    this.router.navigate(['home']);
    
  }


}
