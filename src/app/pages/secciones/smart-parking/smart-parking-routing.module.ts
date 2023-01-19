import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SmartParkingPage } from './smart-parking.page';

const routes: Routes = [
  {
    path: '',
    component: SmartParkingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SmartParkingPageRoutingModule {}
