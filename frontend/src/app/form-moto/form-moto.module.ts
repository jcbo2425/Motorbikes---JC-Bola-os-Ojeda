import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormMotoPageRoutingModule } from './form-moto-routing.module';

import { FormMotoPage } from './form-moto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormMotoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [FormMotoPage]
})
export class FormMotoPageModule {}
