import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Platform} from "ionic-angular";

declare var google: any;
declare var MarkerClusterer: any;

/**
 * Generated class for the PosicionEstacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-posicion-estacion',
  templateUrl: 'posicion-estacion.html',
})
export class PosicionEstacionPage {
  // datos de una estacion
  private latitud: string;
  private longitud: string;
  private nombre: string;

  @ViewChild('mapCanvas') mapElement: ElementRef;
  private locations: Array<any> = [] ;

  constructor(private platform:Platform, 
    public navCtrl: NavController, 
    public navParams: NavParams) {
       
      // datos enviados desde HomePage
       this.nombre = this.navParams.get('nombre');
       this.latitud = this.navParams.get('latitud');
       this.longitud = this.navParams.get('longitud');

       console.log("Llegaron los datos: ");
       console.log(this.nombre + " " + this.latitud + ' ' + this.longitud);
  }


  


  ionViewDidLoad() {
    this.platform.ready().then(() => {
     
      
      this.locations.push({name: this.nombre, lat: this.latitud, lng: this.longitud});  
      
      let mapEle = this.mapElement.nativeElement;
       

      let map = new google.maps.Map(mapEle, {
            center: this.locations[0],
            zoom: 10
          });

      let markers = [];
      this.locations.forEach((markerData: any) => {
            let infoWindow = new google.maps.InfoWindow({
              content: `<h5>${markerData.name}</h5>`
            });

            let marker = new google.maps.Marker({
              position: markerData,
              map: map,
              animation: google.maps.Animation.DROP,
              title: markerData.name
            });

            markers.push(marker);

            marker.addListener('click', () => {
              infoWindow.open(map, marker);
            });
      });

      var markerCluster = new MarkerClusterer(map, markers, {imagePath: 'assets/imgs/cluster/m'});
      
      google.maps.event.addListenerOnce(map, 'idle', () => {
            google.maps.event.trigger(map, 'resize');
            mapEle.classList.add('show-map');
      });
    });
  }
  
}
