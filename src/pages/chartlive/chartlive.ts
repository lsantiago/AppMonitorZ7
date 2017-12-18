import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { EstacionProvider } from '../../providers/estacion/estacion';

import { StompService } from 'ng2-stomp-service';

declare var Highcharts: any;
declare var moment: any;


/**
 * Generated class for the ChartlivePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chartlive',
  templateUrl: 'chartlive.html',
})
export class ChartlivePage {
  private codigoEstacion: string;
  private codigoVariable: string;

  private subscription : any;

  private chartLive: any;
  private ISTOffset = 330;   // IST offset UTC +5:30
  private optionsLive = {
  	chart: {
        renderTo: 'grafico',
        type: 'spline',
        animation: Highcharts.svg, // don't animate in old IE
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
                  time = (new Date()).getTime(),
                  i;

              for (i = -19; i <= 0; i += 1) {
                data.push({
                  x: time + i * 1000,
                  y: Math.random() + 0.0002
                });
              }
              return data;
            }())
      }]
  }
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
  	public estacionService: EstacionProvider,
    public toastCtrl: ToastController,
    public stomp: StompService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChartlivePage');
  }

  ngOnInit(){
  	this.codigoEstacion = this.navParams.get('codigoEstacion');
  	this.codigoVariable = this.navParams.get('codigoVariable');

  	this.setPropiedadesChartLive();
  	this.establecerConexionMQTT();
  }

  /*--------------------------------GRAPH LIVE---------------------------*/
  setPropiedadesChartLive(){
    this.chartLive = new Highcharts.chart(this.optionsLive);
  }  

  addPoint(point) {
    this.chartLive.series[0].addPoint(
          [
            (new Date()).getTime(),
            point
          ],true,true
      );
  };

  /*--------------------------------END GRAPH LIVE---------------------------*/

  /*--------------------------------MQTT---------------------------*/
  establecerConexionMQTT(){
    //configuration
    this.stomp.configure({
      host:'/stomp',
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
  	console.log('Cod. estacion: '+ this.codigoEstacion +
  		'Cod. Variable: '+ this.codigoVariable);

  	if(this.codigoEstacion == data.id){
  		var valor = data.var[this.codigoVariable];
  		console.log(valor);

  		console.log(data);
  		let toast = this.toastCtrl.create({
  			message: 'LLego el valor.. ' + data.var.b,
  			duration: 2000
  		});
  		toast.present();

  		this.addPoint(Number(valor));
  	}
    
  }

  
  /*--------------------------------END MQTT---------------------------*/
}
