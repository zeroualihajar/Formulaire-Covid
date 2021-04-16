import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoPersonnelPage } from './info-personnel.page';

const routes: Routes = [
  {
    path: '',
    component: InfoPersonnelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoPersonnelPageRoutingModule {}
