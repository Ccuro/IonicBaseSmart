import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SmartPolePage } from './smart-pole.page';

const routes: Routes = [
  {
    path: '',
    component: SmartPolePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SmartPolePageRoutingModule {}
