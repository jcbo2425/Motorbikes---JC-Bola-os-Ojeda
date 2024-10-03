import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormMotoPage } from './form-moto.page';

const routes: Routes = [
  {
    path: '',
    component: FormMotoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormMotoPageRoutingModule {}
