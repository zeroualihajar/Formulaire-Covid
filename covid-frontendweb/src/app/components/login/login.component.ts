import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JarwisService } from 'src/app/Services/jarwis.service';
import { TokenService } from 'src/app/Services/token.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  em:string;
  public form ={
    email:null,
    password:null,
    user:'doctor'
  }
  public error =null;

  constructor(private jarwis:JarwisService,
              private token:TokenService,
              private router: Router,
              private auth: AuthService
              ) { }
  onSubmit()
  {
    this.jarwis.login(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }
  ngOnInit(): void {
  }

  handleError(error){
    this.error=error.error.message;

  }
  handleResponse(data)
  {

    this.token.handle(data.token);
    this.auth.changeAurhStatus(true);
    this.router.navigateByUrl('/profile');
  }
}
