import { Component, OnInit } from '@angular/core';

import {  SnotifyService } from 'ng-notify';
import { Router, ActivatedRoute } from '@angular/router';
import { JarwisServiceService } from 'src/app/services/jarwis-service.service';

@Component({
  selector: 'app-response-reset',
  templateUrl: './response-reset.component.html',
  styleUrls: ['./response-reset.component.scss'],
})
export class ResponseResetComponent implements OnInit {
  public error=[];
  public form = {
    email : null,
    password : null,
    password_confirmation : null,
    resetToken : null
  }

  constructor(
    private route : ActivatedRoute,
    private jarwis : JarwisServiceService,
    private router : Router,
    
  ) {
    this.route.queryParams.subscribe(params =>
      this.form.resetToken = params['token']
      );
  }

  ngOnInit(): void {
  }

  onSubmit()
  {
    this.jarwis.changePassword(this.form).subscribe(
      data => {
        this.handleResponse(data)
        console.log(data)
        this.router.navigateByUrl('/login');
      },
      error =>{
        this.handleError(error)
        console.log(error)
      }
    )
  }

  handleResponse(data)
  {
    let _router = this.router;
    // this.notify.confirm('Done!, now login with your new password', {
    //   buttons: [
    //     {text: 'Okay', action: toster =>
    //     { _router.navigateByUrl('/login'),
    //      this.notify.remove(toster.id)
    //   }
    // },]}
    // )
    this.router.navigateByUrl('/home');
  }

  handleError(error)
  {
    this.error = error.error.errors;

  }
}
