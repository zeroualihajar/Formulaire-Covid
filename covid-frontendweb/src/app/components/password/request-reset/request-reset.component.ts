import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/Services/jarwis.service';
import { SnotifyService } from 'ng-snotify';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-request-reset',
  templateUrl: './request-reset.component.html',
  styleUrls: ['./request-reset.component.css']
})
export class RequestResetComponent implements OnInit {
  public form ={
    email: null
  }

  resp: any;
  constructor(
      private jarvis:JarwisService,
      private notify:SnotifyService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.jarvis.SendPasswordResetLink(this.form).subscribe(
        data =>
        {
          this.handleResponse(data);
          this.resp = data['data']
        }
        ,
        error =>this.notify.error(error.error.message)
        );


  }

  handleResponse(res){
    console.log(res);
    this.form.email =null;
  }
}
