import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/Services/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userDisplayName = '';
  public loggedIn :boolean;
  constructor(private auth :AuthService,
              private router :Router,
              private token :TokenService) { }

  ngOnInit() {
    this.auth.authStatus.subscribe(value => this.loggedIn= value);
    this.userDisplayName = sessionStorage.getItem('loggedUser');
  }

  logout(event :MouseEvent)
  {
    event.preventDefault();
    this.token.remove();
    this.auth.changeAurhStatus(false);
    this.router.navigateByUrl('/login');
  }
  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
}
