import { Component, OnInit } from '@angular/core';
import { JarwisServiceService } from 'src/app/services/jarwis-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-reset',
  templateUrl: './request-reset.component.html',
  styleUrls: ['./request-reset.component.scss'],
})
export class RequestResetComponent implements OnInit {

  public form ={
    email: null
  }
  constructor(
      private jarwis : JarwisServiceService,
      private router : Router
  ) { }

  onSubmit()
  {
    this.jarwis.SendPasswordResetLink(this.form).subscribe(
      data =>{
        this.handleResponse(data)
        console.log(data)
      },
      error =>console.log(error)
    )
  }

  handleResponse(data)
  {
    console.log(data);
    this.form.email= null;
    this.router.navigateByUrl('/login')
  }

  ngOnInit() {}

}
