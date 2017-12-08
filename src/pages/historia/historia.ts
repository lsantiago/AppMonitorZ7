import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { EstacionProvider } from '../../providers/estacion/estacion';

import { StompService } from 'ng2-stomp-service';
import moment from 'moment';





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
  private chartLive: any;

  private listaFechasRegistro: any = [];
  private listaValoresRegistro: Array<number> = [];


  private subscription : any;


  private _chart: any;

  private ISTOffset = 330;   // IST offset UTC +5:30
  private  options = {
    chart: {
        type: 'spline',
        marginRight: 30
      },
      title: {
        text: 'Live Sensor data'
      },
      xAxis: {
        type: 'datetime',
        tickPixelInterval: 150
      },
      yAxis: {
        title: {
          text: 'Value'
        }
      },
      legend: {
        enabled: false
      },
      exporting: {
        enabled: false
      },
      series: [{
        name: 'Sensor data'
      }]
    
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,
  	public estacionService: EstacionProvider,
    public toastCtrl: ToastController,
    public stomp: StompService) {

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

      this.setPropiedadesChartLive();

      this.establecerConexionMQTT();
      
    },(error) => {console.error(error);})
  }




  /*--------------------------------GRAPH HISTORY---------------------------*/
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

  capturarRegistros(){
    for(let registro of this.registrosFull){
      //console.log('Valor: ' + registro.valor + ', Fecha: ' + registro.fechaPublicacion);
      this.listaFechasRegistro.push(registro.fechaPublicacion);
      this.listaValoresRegistro.push(parseFloat(registro.valor)); 
    }

  }
  /*--------------------------------END OF GRAPH HISTORY---------------------------*/

  /*--------------------------------GRAPH LIVE---------------------------*/
  
  

  
  
  setPropiedadesChartLive(){
    this.chartLive = {
      chart: {
        type: 'spline',
        marginRight: 30
      },
      title: {
        text: 'Live Sensor data'
      },
      xAxis: {
        type: 'datetime',
        tickPixelInterval: 150
      },
      yAxis: {
        title: {
          text: 'Value'
        }
      },
      legend: {
        enabled: false
      },
      exporting: {
        enabled: false
      },
      series: [{
        name: 'Sensor data',
        data: (function () {
              var data = [],
                  time = moment().valueOf(),
                  i;

              for (i = -19; i <= 0; i += 1) {
                data.push({
                  x: time + i * 1000,
                  y: null
                });
              }
              return data;
            }())
      }]
    }
  }  

  addPoint(point) {
    setInterval(() => this.chartLive.series[0].addPoint(
      [moment().valueOf(),point, true,true]));

    
  };

  /*--------------------------------END GRAPH LIVE---------------------------*/


  /*--------------------------------MQTT---------------------------*/
  establecerConexionMQTT(){
    //configuration
    this.stomp.configure({
      host:'http://200.0.29.38:8080/stomp',
      headers: {
        login: 'guest',
        passcode: 'guest'
      },
      debug:true,
      queue:{'init':false}
    });

    //start connection
    this.stomp.startConnect().then(() => {
      this.stomp.done('init');
      console.log('connected');
      
      //subscribe
      this.subscription = this.stomp.subscribe('/topic/plataforma.sensor.#', this.response);

    });
    
  }

  public response = (data) => {
    console.log(data);
    let toast = this.toastCtrl.create({
      message: 'LLego el valor.. ' + data.var.b,
      duration: 2000
    });
    toast.present();

    this.addPoint(Number(data.var.b));
  }

  
  /*--------------------------------END MQTT---------------------------*/

}
