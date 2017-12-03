  import { Component, ElementRef, ViewChild } from '@angular/core';
  import { IonicPage, NavController, NavParams } from 'ionic-angular';
  import { EstacionProvider } from '../../providers/estacion/estacion';

  import {Platform} from "ionic-angular";

  declare var google: any;
  declare var MarkerClusterer: any;

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

      
    @ViewChild('mapCanvas') mapElement: ElementRef;
    private locations: Array<any> = [] ;

    constructor(private platform:Platform,
                public estacionService: EstacionProvider) {
    	
    	
    }

    ionViewDidLoad() {
      this.platform.ready().then(() => {
        this.estaciones = this.estacionService.listaEstaciones;

        for (let estacion of this.estaciones){
          
          if(estacion.latitud != null){
              this.locations.push({name: estacion.nombre, lat: estacion.latitud, lng: estacion.longitud});  
          }
        }

        

        let mapEle = this.mapElement.nativeElement;
         

        let map = new google.maps.Map(mapEle, {
              center: this.locations[0],
              zoom: 6
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
