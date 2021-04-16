import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { MatIconModule } from '@angular/material/icon';

import { InfoPersonnelPageRoutingModule } from './info-personnel-routing.module';

import { InfoPersonnelPage } from './info-personnel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatIconModule,
    InfoPersonnelPageRoutingModule
  ],
  declarations: [InfoPersonnelPage]
})
export class InfoPersonnelPageModule {}
