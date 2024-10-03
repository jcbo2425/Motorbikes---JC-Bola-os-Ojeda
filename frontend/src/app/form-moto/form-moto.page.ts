import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MotoService } from '../services/moto.service';

@Component({
  selector: 'app-form-moto',
  templateUrl: './form-moto.page.html',
  styleUrls: ['./form-moto.page.scss'],
})

export class FormMotoPage implements OnInit {

  motoForm: FormGroup;

  constructor(public formBuilder: FormBuilder,
      private motoService:MotoService,
      private route: Router) {
        this.motoForm = this.formBuilder.group({
          model: ['',Validators.compose([Validators.required])],
          cylinderCap: ['',Validators.compose([Validators.required])],
          color: ['',Validators.compose([Validators.required])],
        })
      }
  

  ngOnInit() {  }


  //Push motorbike
  createMoto() {
    if(this.motoForm.valid) {
      console.log("Formulario válido: ", this.motoForm.value);
      this.motoService.create(this.motoForm.value).subscribe(response => {
        this.route.navigateByUrl("/my-motos");
      })
    } else {
      console.log("Formulario no válido");
    }
  }

  getFormControl(field: string) {
    return this.motoForm.get(field);
  }
}


  


