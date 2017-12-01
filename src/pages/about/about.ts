import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EstacionProvider } from '../../providers/estacion/estacion';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, public estacionService: EstacionProvider) {
  	console.log(this.estacionService.listaEstaciones);
  }

}
