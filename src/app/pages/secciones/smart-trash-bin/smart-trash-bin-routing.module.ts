import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SmartTrashBinPage } from './smart-trash-bin.page';

const routes: Routes = [
  {
    path: '',
    component: SmartTrashBinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SmartTrashBinPageRoutingModule {}
