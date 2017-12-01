import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EstacionProvider } from '../../providers/estacion/estacion';
import { EstacionPage } from '../estacion/estacion';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  private estaciones: any = [];
  private searchQuery: string = '';
  private items: any = [];

  constructor(public navCtrl: NavController, public estacionService: EstacionProvider) {
    
  }

  ionViewDidLoad() {
    this.getEstaciones();
  }

  initializeItems(){
    this.items = this.estaciones;
  }

  // Envía el código de la estación a EstacionPage
  getEstacion(codigoEstacion){
    this.navCtrl.push(EstacionPage, {codigoEstacion})
  }

  // Obtiene la lista de estaciones
  getEstaciones() {
    this.estacionService.getEstaciones()
      .subscribe(
      (data) => { // Success
        this.estaciones = data;
        this.items = this.estaciones;

        // datos para toda la aplicación
        this.estacionService.listaEstaciones = this.estaciones;
      },
      (error) => {
        console.error(error);
      }
      )
  }


  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    console.log('Tarjet value: ' + val);

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {

        if (val && val.trim() != '') {
          this.items = this.items.filter((item) => {
          return (item.nombre.toLowerCase().indexOf(val.toLowerCase()) > -1);
          })
        }

      
      
    }
  }
}
