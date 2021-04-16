import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';



import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatIconModule } from '@angular/material/icon';


import { LoginPage } from './components/login/login.page';
import { SignupComponent} from './components/signup/signup.component';
import { RequestResetComponent} from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';

import { JarwisServiceService } from './services/jarwis-service.service';
import { TokenService } from './services/token.service';
import { AuthService } from './services/auth.service';
import { PersonelInfoService } from './services/personel-info.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [AppComponent,
    LoginPage,
    SignupComponent,
    RequestResetComponent,
    ResponseResetComponent
    ],
  entryComponents: [ ],
  imports: [BrowserModule, 
    IonicModule.forRoot(), 
    MatIconModule,
    AppRoutingModule, 
    HttpClientModule, 
    FormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,

    
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    JarwisServiceService, 
    TokenService, 
    AuthService,
    PersonelInfoService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    LocalNotifications,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
 