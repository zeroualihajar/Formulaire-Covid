import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';

import { JarwisService } from './Services/jarwis.service';
import { TokenService } from './Services/token.service';
import { AuthService } from './Services/auth.service';
import { AfterLoginService } from './Services/after-login.service';
import { BeforeLoginService } from './Services/before-login.service';

import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { TableauComponent } from './components/tableau/tableau.component';
import { TraiteComponent } from './components/traite/traite.component';
import { PatientComponent } from './components/patient/patient.component';
import { TraitementComponent } from './components/traitement/traitement.component';
import { InfosComponent } from './components/infos/infos.component';
import { VoirinfosComponent } from './components/voirinfos/voirinfos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfileComponent,
    LoginComponent,
    SignupComponent,
    RequestResetComponent,
    ResponseResetComponent,
    TableauComponent,
    TraiteComponent,
    PatientComponent,
    TraitementComponent,
    InfosComponent,
    VoirinfosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SnotifyModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
  ],
  providers: [
    JarwisService,
    TokenService,
    AuthService,
    AfterLoginService,
    BeforeLoginService,
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults },
    SnotifyService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}


