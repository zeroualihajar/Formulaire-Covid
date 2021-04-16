import { NgModule, Component } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { AppComponent } from './app.component';
import { LoginPage } from './components/login/login.page';
import { SignupComponent } from './components/signup/signup.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { BeforeLoginService } from './services/before-login.service';
import { AfterLoginService } from './services/after-login.service';

const routes: Routes = [
 
  {
    path: 'login',
    component: LoginPage,
    canActivate: [BeforeLoginService]
   
  },
  {
    path: 'home',
    component: HomePage,
    canActivate: [AfterLoginService]

  },
  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [BeforeLoginService]
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
    path: 'info-personnel',
    loadChildren: () => import('./pages/info-personnel/info-personnel.module').then( m => m.InfoPersonnelPageModule),
    canActivate: [AfterLoginService]
  },
  {
    path: 'questions',
    loadChildren: () => import('./pages/questions/questions.module').then( m => m.QuestionsPageModule),
    canActivate: [AfterLoginService]
  },
  {
    path: 'map',
    loadChildren: () => import('./pages/map/map.module').then( m => m.MapPageModule),
    canActivate: [AfterLoginService]
  },
 
  {
    path: 'results',
    loadChildren: () => import('./pages/results/results.module').then( m => m.ResultsPageModule),
    canActivate: [AfterLoginService]
  },
   { path: '**', redirectTo: '/home' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
