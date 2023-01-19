import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SmartParkingPageRoutingModule } from './smart-parking-routing.module';

import { SmartParkingPage } from './smart-parking.page';
import { NgApexchartsModule } from "ng-apexcharts";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SmartParkingPageRoutingModule,NgApexchartsModule,
    ReactiveFormsModule
  ],
  declarations: [SmartParkingPage]
})
export class SmartParkingPageModule {}
