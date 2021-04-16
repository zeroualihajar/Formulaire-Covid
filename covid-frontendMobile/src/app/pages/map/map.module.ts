import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';
import { AgmCoreModule } from '@agm/core'

import { MapPageRoutingModule } from './map-routing.module';

import { MapPage } from './map.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapPageRoutingModule,
    
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBxUszCfNRtQb9snnD4Td8C_RG3jE-Wra8'
    }),
  ],
  declarations: [MapPage]
})
export class MapPageModule {}
