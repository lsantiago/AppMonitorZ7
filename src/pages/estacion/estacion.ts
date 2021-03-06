import { Component } from '@angular/core';
import { EstacionProvider } from '../../providers/estacion/estacion';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HistoriaPage } from '../historia/historia';
import { ChartlivePage } from '../chartlive/chartlive';

/**
 * Generated class for the EstacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-estacion',
  templateUrl: 'estacion.html',
})
export class EstacionPage {
  loadCompleted: boolean = false;
  private variablesEstacion: any = [];
  private codigoEstacion: string;
  private datosEstacion: any = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public estacionService: EstacionProvider,
    private loadingCtrl: LoadingController) {

  }

  ngOnInit() {
    this.codigoEstacion = this.navParams.get('codigoEstacion');
    console.log("Station Code in EstationPage: " + this.codigoEstacion);

    
    const loading = this.loadingCtrl.create({
      content: 'Obteniendo variables'
    });

    loading.present();

    this.getDatosEstacion(this.codigoEstacion);

    loading.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EstacionPage');
  }

  getHistoria(codigoEstacion, codigoVariable) {
    this.navCtrl.push(HistoriaPage, { codigoEstacion, codigoVariable })
  }

  showLiveVariable(codigoEstacion, codigoVariable) {
    this.navCtrl.push(ChartlivePage, { codigoEstacion, codigoVariable })
  }



  // Obtiene variables medioambientales
  getDatosEstacion(codigoEstacion: string) {
    this.estacionService.getDetalleEstacion(codigoEstacion).subscribe(data => { // Success
      this.datosEstacion = data;
      this.variablesEstacion = this.datosEstacion.variables;

      this.ordenarListaVariables();

      // extracción de coordenadas
      console.log('Latitid: ' + this.datosEstacion.latitud);
      console.log('Longitud: ' + this.datosEstacion.longitud);

      // Obtiene datos de la primera variable del sensor
      //console.log('Primera variable: ' + this.variablesEstacion[0].nombre);
    },
      (error) => {
        console.error(error);
      })

    this.loadCompleted = true;
  }

  
  ordenarListaVariables() {
    this.variablesEstacion.sort(function (a, b) {
      if (a.nombre < b.nombre)
        return -1;
      if (a.nombre > b.nombre)
        return 1;
      return 0;
    });
  }

}
