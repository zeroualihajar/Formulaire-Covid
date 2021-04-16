import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router, RouterEvent } from '@angular/router';
import { AuthService } from './services/auth.service';
import { TokenService } from './services/token.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  public loggedIn :boolean;
  logged :boolean = false;
  pages = [
    {
      title:'Informations Personnelles',
       url:'/info-personnel',
       img:'https://png.pngtree.com/png-clipart/20190903/original/pngtree-business-manager-information-on-business-card-png-image_4424023.jpg'
    } , 
    {
      title:'Test Covid 19',
       url:'/questions',
       img:'data:image/png;base64,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'
    } ,
    {
      title:'Map',
      url:'/map',
      img:'https://cdn1.iconfinder.com/data/icons/communication-social-media-set-2/512/15-512.png'
    },
    {
      title:'Résultats',
      url: '/results',
      img:'https://cdn0.iconfinder.com/data/icons/iphone-black-people-svg-icons/30/marketer_sales_seller_shop-512.png'
    }
    ]
     selectedPath =''
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private auth :AuthService,
    private token :TokenService,
    private router:Router
  ) {
    this.initializeApp();
    this.router.events.subscribe((event: RouterEvent) =>{
      this.selectedPath = event.url;
    })
  }
  ngOnInit() {
    this.auth.authStatus.subscribe(value => this.loggedIn= value);
    this.checkToken();
    console.log(this.logged)
  }

  initializeApp() {
  }

  checkToken()
  {
    if(localStorage.getItem('token'))
    {
      this.logged = true
    }
  }

  logout(event :MouseEvent)
  {
    event.preventDefault();
    this.token.remove();
    this.auth.changeAurhStatus(false);
    this.router.navigateByUrl('/login');
  }
  
}
