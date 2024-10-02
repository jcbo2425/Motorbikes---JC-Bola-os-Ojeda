import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  model: string = "Aprilia";
  cylinderCap: string = "300cc";
  color: string = "Silver";

  constructor(private router: Router) {}

  goToMyMotos(){
    this.router.navigateByUrl("/my-motos");
  }
}
