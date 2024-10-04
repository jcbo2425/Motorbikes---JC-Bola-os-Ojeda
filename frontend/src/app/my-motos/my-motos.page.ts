import { Component, model, OnInit } from '@angular/core';
import { MotoService } from '../services/moto.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-my-motos',
  templateUrl: './my-motos.page.html',
  styleUrls: ['./my-motos.page.scss'],
})
export class MyMotosPage implements OnInit {

  motos: any = [];

  constructor(private motoService: MotoService, private router: Router) { }

  ngOnInit() {
   // this.getAllMotos();
  }

  ionViewWillEnter() {
    this.getAllMotos();
  }

  getAllMotos(){
    this.motoService.getMotos().subscribe(response => {
      this.motos = response;
    });
  }

  deleteMoto(id:any){
    this.motoService.delete(id).subscribe(() => {
      this.getAllMotos();
    })
  }
  
  updateMoto(id:any, data: any){
    this.motoService.update(id,data).subscribe(() => {
      this.getAllMotos();
    })
  }

  goToHome(){
    this.router.navigateByUrl("/home");
  }

  goToForm(){
    this.router.navigateByUrl("/form-moto");
  }

}
