import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EstacionProvider } from '../../providers/estacion/estacion';

import {Platform} from "ionic-angular";
//import {GoogleMaps, GoogleMap, LatLng, GoogleMapsEvent} from "@ionic-native/google-maps";

/**
 * Generated class for the MapaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
})
export class MapaPage {
  private estaciones: any = [];

  /*@ViewChild('map')
  private mapElement:ElementRef;
  private map:GoogleMap;
  private location:LatLng;
  private locations:Array = [];
  */


  
  /*
  constructor(private platform:Platform,
              private googleMaps:GoogleMaps,
              public estacionService: EstacionProvider) {
  	
  	this.estaciones = this.estacionService.listaEstaciones;

  	for (let estacion of this.estaciones){
  		console.log(estacion.latitud + ', ' + estacion.longitud);
  	}


  	this.location = new LatLng(42.346903, -71.135101);
 
 
    //Add cluster locations
    this.locations.push({position: {lat: 42.346903, lng: -71.135101}});
    this.locations.push({position: {lat: 42.342525, lng: -71.145943}});
    this.locations.push({position: {lat: 42.345792, lng: -71.138167}});
    this.locations.push({position: {lat: 42.320684, lng: -71.182951}});
    this.locations.push({position: {lat: 42.359076, lng: -71.0645484}});
    this.locations.push({position: {lat: 42.36, lng: -71.1}});

  }

  ionViewDidLoad() {
    this.platform.ready().then(() => {
      let element = this.mapElement.nativeElement;
      this.map = this.googleMaps.create(element);
 
      this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
        let options = {
          target: this.location,
          zoom: 8
        };
 
        this.map.moveCamera(options);
        setTimeout(() => {this.addCluster()}, 500);
      });
    });
  }

  addCluster() {
    this.map.addMarkerCluster({
      markers: this.locations,
      icons: [
        {min: 2, max: 100, url: "./assets/icon/blue-dot.png", anchor: {x: 16, y: 16}}
      ]
    })
    .then((markerCluster) => {
      markerCluster.on(GoogleMapsEvent.CLUSTER_CLICK).subscribe((cluster: any) => {
        console.log('cluster was clicked.');
      });
    });
  }
   */
}
