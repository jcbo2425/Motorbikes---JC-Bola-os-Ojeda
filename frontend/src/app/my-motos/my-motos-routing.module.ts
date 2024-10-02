import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyMotosPage } from './my-motos.page';

const routes: Routes = [
  {
    path: '',
    component: MyMotosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyMotosPageRoutingModule {}
