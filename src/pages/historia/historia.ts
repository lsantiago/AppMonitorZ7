import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { EstacionProvider } from '../../providers/estacion/estacion';

declare var SockJS: any;
declare var Stomp: any

// opciones MQTT
var username = "guest",
    password = "guest",
    vhost    = "/",
    url      = 'http://' + '200.0.29.38:8080' + '/stomp',
    queue    = "/topic/plataforma.sensor.#";

var ws: any;
var client: any;

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

  summary: string = "grafico"; // default button

  private codigoEstacion: string;
  private codigoVariable: string;
  private datosHistoriaVariable: any = [];
  private registrosFull: any = [];
  private minReg;
  private maxReg;
  private unidad;
  private detalle;

  private chartOptions: any;

  private listaFechasRegistro: any = [];
  private listaValoresRegistro: Array<number> = [];


 

  constructor(public navCtrl: NavController, public navParams: NavParams,
  	public estacionService: EstacionProvider,
    public toastCtrl: ToastController) {

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
      this.registrosFull = this.datosHistoriaVariable.summary;

      console.log('Mínimo: ', this.datosHistoriaVariable.minimo.valor);
      this.minReg = this.datosHistoriaVariable.minimo.valor;
      this.maxReg = this.datosHistoriaVariable.maximo.valor;
      this.unidad = this.datosHistoriaVariable.variableDTO.unidad;
      this.detalle = this.datosHistoriaVariable.variableDTO.nombre;
      this.capturarRegistros();
      this.setPropiedadesChart();

      this.establecerConexionMQTT();
    },(error) => {console.error(error);})




  }


  /*--------------------------------GRAPH---------------------------*/
  setPropiedadesChart(){
    this.chartOptions = {
      chart: {
        type: 'spline'
      },
      title: {
        text: '',
        align: 'left',
        x: 25
      },
      subtitle: {
        text: 'Esta gráfica representa la recopilación de los ultimos 360 registros, equivalentes a las 6 últimas horas de captura de datos.',
        align: 'left',
        x: 25
      },
      xAxis: {
        categories: this.listaFechasRegistro,
        labels: {
          rotation: 270,
          step: 20,
          style: {
            fontSize: '10px'
          },
          formatter: function(){
            if (this.value.length > 10){
              return this.value.substr(0,10) + "...";
            }else{
              return this.value;   
            }                        
          }
        }
      },
      yAxis: {
        title: {
          text: "Valor"
        }
      },
      series: [{name: 'Datos diarios', data: this.listaValoresRegistro}] 
    }
  }
  /*--------------------------------END OF GRAPH---------------------------*/

  /*--------------------------------MQTT---------------------------*/
  capturarRegistros(){
    for(let registro of this.registrosFull){
      //console.log('Valor: ' + registro.valor + ', Fecha: ' + registro.fechaPublicacion);
      this.listaFechasRegistro.push(registro.fechaPublicacion);
      this.listaValoresRegistro.push(parseFloat(registro.valor)); 
    }

  }


  establecerConexionMQTT(){

    console.log("START");
    ws = new SockJS(url)
    client = Stomp.over(ws);
    client.connect(
      username,
      password,
      this.onConnect,
      this.on_connection_error,
      vhost
      );
  }

  onConnect() {
    console.log("onConnect");
    client.subscribe(queue, this.response);

    //this._client.subscribe("world", "asd");
  }

  on_message(m) {
    //console.log('Llego este mensaje.. ' + m);
    let toast = this.toastCtrl.create({
      message: 'LLego un mensaje!',
      duration: 2000
    });
    toast.present();
  }

  public response = (data) => {
    console.log(data)
  }

  on_connection_error(e) {
    console.log("Error",e); 
  }
  /*--------------------------------END MQTT---------------------------*/

}
