import { HttpClient} from '@angular/common/http';
//import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';


import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';




/*
  Generated class for the EstacionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
  */
  @Injectable()
  export class EstacionProvider {

    basepath = 'platform';
    
    // recurso global, se actualiza en home.ts
    listaEstaciones: any = []
    
    private urlEstaciones: string;
    private urlDetalleEstacion: string;
    
    private urlHistoriaVariable: string;
    //private urlHistoriaVariable: string = 'assets/data/data.json';
    

    constructor(public http: HttpClient, public platform: Platform) {
      if(this.platform.is('cordova')){
        this.basepath = 'http://200.0.29.38:8080/platform';
      }

      this.urlEstaciones = this.basepath + "/api/public/meteorological";
      this.urlDetalleEstacion = this.basepath +'/api/public/meteorological/detail/';
      this.urlHistoriaVariable = this.basepath +'/api/variableHistoricos/detail/';
    }


    // Obtiene el detalle de las estación por {codigo}
    getDetalleEstacion(codigo: string){
      return this.http.get(this.urlDetalleEstacion + codigo + '/codigo')
      .do(res => console.log(res));
    }

    getHistoriaVariable(codEstacion: string, codVariable: string){
     
     return this.http.get(this.urlHistoriaVariable + codEstacion + '/' +
       codVariable);

      //return this.http.get(this.urlHistoriaVariable);
    }

    

    // Obtiene todas las estaciones del API REST
    getEstaciones() {
      return this.http.get(this.urlEstaciones);
    }
  }
