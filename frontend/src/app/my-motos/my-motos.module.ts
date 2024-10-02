import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyMotosPageRoutingModule } from './my-motos-routing.module';

import { MyMotosPage } from './my-motos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyMotosPageRoutingModule
  ],
  declarations: [MyMotosPage]
})
export class MyMotosPageModule {}
