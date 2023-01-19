import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SmartPolePageRoutingModule } from './smart-pole-routing.module';

import { SmartPolePage } from './smart-pole.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SmartPolePageRoutingModule
  ],
  declarations: [SmartPolePage]
})
export class SmartPolePageModule {}
