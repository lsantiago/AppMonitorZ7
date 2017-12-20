import { HttpClient} from '@angular/common/http';
//import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';


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
    
    // recurso global, se actualiza en home.ts
    listaEstaciones: any = []
    
    private urlEstaciones: string = "platform/api/public/meteorological";
    private urlDetalleEstacion: string = 'platform/api/public/meteorological/detail/';
    
    //private urlHistoriaVariable: string = 'platform/api/variableHistoricos/detail/';
    private urlHistoriaVariable: string = 'assets/data/data.json';
    

    constructor(public http: HttpClient) {
    }

    // Demo para llamara a API REST
    getUsers() {
      return this.http.get('https://randomuser.me/api/?results=25')
      .do(res => console.log(res))  ;
    }

    // Obtiene el detalle de las estación por {codigo}
    getDetalleEstacion(codigo: string){
      return this.http.get(this.urlDetalleEstacion + codigo + '/codigo')
      .do(res => console.log(res));
    }

    getHistoriaVariable(codEstacion: string, codVariable: string){
     /*return this.http.get(this.urlHistoriaVariable + codEstacion + '/' +
       codVariable)
     .do(res => console.log(res)); */
     return this.http.get(this.urlHistoriaVariable);
    }

    

    // Obtiene todas las estaciones del API REST
    getEstaciones() {
      return this.http.get(this.urlEstaciones)
      .do(res => console.log(res));

    }
  }
