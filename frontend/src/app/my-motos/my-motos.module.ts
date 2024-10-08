import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyMotosPageRoutingModule } from './my-motos-routing.module';

import { MyMotosPage } from './my-motos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    MyMotosPageRoutingModule
  ],
  declarations: [MyMotosPage]
})
export class MyMotosPageModule {}
