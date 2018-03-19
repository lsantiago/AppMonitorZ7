import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { EstacionProvider } from '../../providers/estacion/estacion';

import { StompService } from 'ng2-stomp-service';
//import moment from 'moment';

declare var Highcharts: any;
declare var moment: any;


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

  private chartHistory: any;


  private listaFechasRegistro: any = [];
  private listaValoresRegistro: Array<number> = [];

  // to graph
  private listaFechasRegistroASC: any = [];
  private listaValoresRegistroASC: Array<number> = [];


  



  private optionsHistory = {
    chart: {
      renderTo: 'graficoHistoria',
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
      categories: this.listaFechasRegistroASC,
      labels: {
        rotation: 270,
        step: 20,
        style: {
          fontSize: '10px'
        },
        formatter: function () {
          if (this.value.length > 10) {
            return this.value.substr(0, 10) + "...";
          } else {
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
    series: [{ name: 'Datos diarios', data: this.listaValoresRegistroASC }]
  }


  constructor(public navCtrl: NavController, public navParams: NavParams,
    public estacionService: EstacionProvider,
    public toastCtrl: ToastController,
    public stomp: StompService,
    private loadingCtrl: LoadingController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoriaPage');

  }

  ngOnInit() {
    const loading = this.loadingCtrl.create({
      content: 'Descargando datos.'
    });


    this.codigoEstacion = this.navParams.get('codigoEstacion');
    this.codigoVariable = this.navParams.get('codigoVariable');

    console.log('Obteniendo datos de estación: ' + this.codigoEstacion +
      ', variable: ' + this.codigoVariable);

    loading.present();

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

      loading.dismiss();

    }, (error) => { console.error(error); })


  }

  // ordena los registros antes de presentarlos
  ordenarRegistros(registros: any, orden: string) {
    if(orden == 'ascendente'){
      console.log("ASC to graph");
      registros.sort(function (a, b) {
        a = new Date(a.fechaPublicacion);
        b = new Date(b.fechaPublicacion);
        return a < b ? -1 : a > b ? 1 : 0;
      });
    }else if(orden == 'descendente'){
      console.log("DESC to history");
      registros.sort(function (a, b) {
        a = new Date(a.fechaPublicacion);
        b = new Date(b.fechaPublicacion);
        return a > b ? -1 : a < b ? 1 : 0;
      });
    }
    
  }



  /*--------------------------------GRAPH HISTORY---------------------------*/
  setPropiedadesChart() {
    this.chartHistory = new Highcharts.chart(this.optionsHistory);
  }

  capturarRegistros() {
    // to  history
    this.ordenarRegistros(this.registrosFull, 'descendente');
    for (let registro of this.registrosFull) {
      //console.log('Valor: ' + registro.valor + ', Fecha: ' + registro.fechaPublicacion);
      this.listaFechasRegistro.push(registro.fechaPublicacion);
      this.listaValoresRegistro.push(parseFloat(registro.valor));
    }

    // to graph
    this.ordenarRegistros(this.registrosFull, 'ascendente');
    for (let registro of this.registrosFull) {
      this.listaFechasRegistroASC.push(registro.fechaPublicacion);
      this.listaValoresRegistroASC.push(parseFloat(registro.valor));
    }


  }
  /*--------------------------------END OF GRAPH HISTORY---------------------------*/





}
