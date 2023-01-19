import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SmartTrashBinPageRoutingModule } from './smart-trash-bin-routing.module';

import { SmartTrashBinPage } from './smart-trash-bin.page';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SmartTrashBinPageRoutingModule,NgApexchartsModule
  ],
  declarations: [SmartTrashBinPage]
})
export class SmartTrashBinPageModule {}
