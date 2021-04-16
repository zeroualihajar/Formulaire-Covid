import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { BeforeLoginService } from './Services/before-login.service';
import { AfterLoginService } from './Services/after-login.service';
import { TableauComponent } from './components/tableau/tableau.component';
import { TraiteComponent } from './components/traite/traite.component';
import { PatientComponent } from './components/patient/patient.component';
import { TraitementComponent } from './components/traitement/traitement.component';
import { InfosComponent } from './components/infos/infos.component';
import { VoirinfosComponent } from './components/voirinfos/voirinfos.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'request-password-reset',
    component: RequestResetComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: 'response-password-reset',
    component: ResponseResetComponent,
    canActivate: [BeforeLoginService]
  },

  {
    path: 'tableau',
    component: TableauComponent,
    canActivate: [AfterLoginService]
  },

  {
    path: 'traite',
    component: TraiteComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'patient',
    component: PatientComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'traitement/:id',
    component: TraitementComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'infos/:id',
    component: InfosComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'voirInfos/:id',
    component: VoirinfosComponent,
    canActivate: [AfterLoginService]
  },
    {
    path: '',
    component: LoginComponent,
    canActivate: [BeforeLoginService]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
