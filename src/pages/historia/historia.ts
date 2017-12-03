import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EstacionProvider } from '../../providers/estacion/estacion';

/**
 * Generated class for the HistoriaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-historia',
  templateUrl: 'historia.html',
})
export class HistoriaPage {
  private codigoEstacion: string;
  private codigoVariable: string;
  private datosHistoriaVariable: any = [];
  private registros: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
  	public estacionService: EstacionProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoriaPage');
  }

  ngOnInit(){
  	this.codigoEstacion = this.navParams.get('codigoEstacion');
  	this.codigoVariable = this.navParams.get('codigoVariable');

  	console.log('Obteniendo datos de estación: ' + this.codigoEstacion + 
  		', variable: ' + this.codigoVariable);

  	this.estacionService.getHistoriaVariable(this.codigoEstacion, this.codigoVariable).subscribe(data => {
  		this.datosHistoriaVariable = data;
      this.registros = this.datosHistoriaVariable.summary;
  		console.log('Mínimo: ', this.datosHistoriaVariable.minimo.valor);
      this.showRegistros();
  	},(error) => {console.error(error);})

    
  }

  showRegistros(){
    for(let registro of this.registros){
      console.log('Valor: ' + registro.valor + ', Fecha: ' + registro.fechaRegistro);
    }

  }

  
}
