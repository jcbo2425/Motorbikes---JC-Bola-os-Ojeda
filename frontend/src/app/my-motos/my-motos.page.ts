import { Component, model, OnInit } from '@angular/core';
import { MotoService } from '../services/moto.service';

@Component({
  selector: 'app-my-motos',
  templateUrl: './my-motos.page.html',
  styleUrls: ['./my-motos.page.scss'],
})
export class MyMotosPage implements OnInit {

  motos: any = [];

  constructor(private motoService: MotoService) { }

  ngOnInit() {
    this.getAllMotos();
  }

  getAllMotos(){
    this.motoService.getMotos().subscribe(response => {
      this.motos = response;
    });
  }

}
