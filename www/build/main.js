webpackJsonp([6],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mapa_mapa__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__interpolacion_interpolacion__ = __webpack_require__(218);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__mapa_mapa__["a" /* MapaPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__interpolacion_interpolacion__["a" /* InterpolacionPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_2__about_about__["a" /* AboutPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\IonicApps\AppMonitorZ7\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Estaciones" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Mapa" tabIcon="locate"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Interpolación" tabIcon="grid"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Contacto" tabIcon="information-circle"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"D:\IonicApps\AppMonitorZ7\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartlivePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_estacion_estacion__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_stomp_service__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_stomp_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_stomp_service__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ChartlivePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChartlivePage = (function () {
    function ChartlivePage(navCtrl, navParams, estacionService, toastCtrl, stomp) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.estacionService = estacionService;
        this.toastCtrl = toastCtrl;
        this.stomp = stomp;
        this.ISTOffset = 330; // IST offset UTC +5:30
        this.optionsLive = {
            chart: {
                renderTo: 'grafico',
                type: 'spline',
                animation: Highcharts.svg,
                marginRight: 30
            },
            time: {
                timezone: 'America/Bogota'
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
                        var data = [], time = (new Date()).getTime(), i;
                        // Datos de ejemplo
                        for (i = -19; i <= 0; i += 1) {
                            data.push({
                                x: null,
                                y: null
                            });
                        }
                        return data;
                    }())
                }]
        };
        this.response = function (data) {
            console.log('Cod. estacion: ' + _this.codigoEstacion +
                'Cod. Variable: ' + _this.codigoVariable);
            if (_this.codigoEstacion == data.id) {
                var valor = data.var[_this.codigoVariable];
                console.log(valor);
                console.log(data);
                var toast = _this.toastCtrl.create({
                    message: 'LLego el valor.. ' + data.var.b,
                    duration: 2000
                });
                toast.present();
                _this.addPoint(Number(valor));
            }
        };
    }
    ChartlivePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChartlivePage');
    };
    ChartlivePage.prototype.ngOnInit = function () {
        this.codigoEstacion = this.navParams.get('codigoEstacion');
        this.codigoVariable = this.navParams.get('codigoVariable');
        this.setPropiedadesChartLive();
        this.establecerConexionMQTT();
    };
    /*--------------------------------GRAPH LIVE---------------------------*/
    ChartlivePage.prototype.setPropiedadesChartLive = function () {
        this.chartLive = new Highcharts.chart(this.optionsLive);
    };
    ChartlivePage.prototype.addPoint = function (point) {
        this.chartLive.series[0].addPoint([
            (new Date()).getTime(),
            point
        ], true, true);
    };
    ;
    /*--------------------------------END GRAPH LIVE---------------------------*/
    /*--------------------------------MQTT---------------------------*/
    ChartlivePage.prototype.establecerConexionMQTT = function () {
        var _this = this;
        //configuration
        this.stomp.configure({
            host: '/stomp',
            headers: {
                login: 'guest',
                passcode: 'guest'
            },
            debug: true,
            queue: { 'init': false }
        });
        //start connection
        this.stomp.startConnect().then(function () {
            _this.stomp.done('init');
            console.log('connected');
            //subscribe
            _this.subscription = _this.stomp.subscribe('/topic/plataforma.sensor.#', _this.response);
        });
    };
    ChartlivePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-chartlive',template:/*ion-inline-start:"D:\IonicApps\AppMonitorZ7\src\pages\chartlive\chartlive.html"*/'<!--\n  Generated template for the ChartlivePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Gráfico</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div id="grafico" style="min-width: 310px; height: 400px; margin: 0 auto"></div>\n</ion-content>\n'/*ion-inline-end:"D:\IonicApps\AppMonitorZ7\src\pages\chartlive\chartlive.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_estacion_estacion__["a" /* EstacionProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3_ng2_stomp_service__["StompService"]])
    ], ChartlivePage);
    return ChartlivePage;
}());

//# sourceMappingURL=chartlive.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstacionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_estacion_estacion__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__historia_historia__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chartlive_chartlive__ = __webpack_require__(126);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the EstacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EstacionPage = (function () {
    function EstacionPage(navCtrl, navParams, estacionService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.estacionService = estacionService;
        this.loadingCtrl = loadingCtrl;
        this.loadCompleted = false;
        this.variablesEstacion = [];
        this.datosEstacion = [];
    }
    EstacionPage.prototype.ngOnInit = function () {
        this.codigoEstacion = this.navParams.get('codigoEstacion');
        console.log("Station Code in EstationPage: " + this.codigoEstacion);
        var loading = this.loadingCtrl.create({
            content: 'Obteniendo variables'
        });
        loading.present();
        this.getDatosEstacion(this.codigoEstacion);
        loading.dismiss();
    };
    EstacionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EstacionPage');
    };
    EstacionPage.prototype.getHistoria = function (codigoEstacion, codigoVariable) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__historia_historia__["a" /* HistoriaPage */], { codigoEstacion: codigoEstacion, codigoVariable: codigoVariable });
    };
    EstacionPage.prototype.showLiveVariable = function (codigoEstacion, codigoVariable) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__chartlive_chartlive__["a" /* ChartlivePage */], { codigoEstacion: codigoEstacion, codigoVariable: codigoVariable });
    };
    // Obtiene variables medioambientales
    EstacionPage.prototype.getDatosEstacion = function (codigoEstacion) {
        var _this = this;
        this.estacionService.getDetalleEstacion(codigoEstacion).subscribe(function (data) {
            _this.datosEstacion = data;
            _this.variablesEstacion = _this.datosEstacion.variables;
            _this.ordenarListaVariables();
            // extracción de coordenadas
            console.log('Latitid: ' + _this.datosEstacion.latitud);
            console.log('Longitud: ' + _this.datosEstacion.longitud);
            // Obtiene datos de la primera variable del sensor
            //console.log('Primera variable: ' + this.variablesEstacion[0].nombre);
        }, function (error) {
            console.error(error);
        });
        this.loadCompleted = true;
    };
    EstacionPage.prototype.ordenarListaVariables = function () {
        this.variablesEstacion.sort(function (a, b) {
            if (a.nombre < b.nombre)
                return -1;
            if (a.nombre > b.nombre)
                return 1;
            return 0;
        });
    };
    EstacionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-estacion',template:/*ion-inline-start:"D:\IonicApps\AppMonitorZ7\src\pages\estacion\estacion.html"*/'<!--\n  Generated template for the EstacionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Lista de variables</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-spinner *ngIf="!loadCompleted" name="crescent" class="posts-load-spinner"></ion-spinner>\n\n  <!-- LISTA DE VARIABLES -->\n  <ion-list>\n    <ion-item *ngFor="let variable of variablesEstacion">\n      <ion-label>\n        <h2 Vertical Timeline>\n          <i class={{variable.icono}}></i> {{ variable.nombre }}</h2>\n        <!-- <p ion-text color="dynamicColor" style="font-size: 12px;">{{variable.fechaRegistro}}</p> -->\n      </ion-label>\n\n      <ion-note item-end>\n        <button ion-button icon-only (click)="showLiveVariable(variable.codigoEstacion, variable.codigoVariable)">\n          <ion-icon name="ios-pulse-outline">\n          </ion-icon>\n        </button>\n        <button ion-button icon-only (click)="getHistoria(variable.codigoEstacion, variable.codigoVariable)">\n          <ion-icon name="list-box"></ion-icon>\n        </button>\n        <!-- <p ion-text color="dark">{{variable.valor}}{{variable.unidad}}</p> -->\n      </ion-note>\n\n    </ion-item>\n  </ion-list>\n  <!-- END LISTA DE VARIABLES -->\n</ion-content>\n'/*ion-inline-end:"D:\IonicApps\AppMonitorZ7\src\pages\estacion\estacion.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__providers_estacion_estacion__["a" /* EstacionProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* LoadingController */]])
    ], EstacionPage);
    return EstacionPage;
}());

//# sourceMappingURL=estacion.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoriaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_estacion_estacion__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_screen_orientation__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_stomp_service__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_stomp_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_stomp_service__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the HistoriaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HistoriaPage = (function () {
    function HistoriaPage(navCtrl, navParams, estacionService, toastCtrl, stomp, loadingCtrl, screenOrientation) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.estacionService = estacionService;
        this.toastCtrl = toastCtrl;
        this.stomp = stomp;
        this.loadingCtrl = loadingCtrl;
        this.screenOrientation = screenOrientation;
        this.summary = "grafico"; // default button
        this.datosHistoriaVariable = [];
        this.registrosFull = [];
        this.listaFechasRegistro = [];
        this.listaValoresRegistro = [];
        // to graph
        this.listaFechasRegistroASC = [];
        this.listaValoresRegistroASC = [];
        // orientación de la pantalla
        //private screenOrientation: ScreenOrientation;
        this.optionsHistory = {
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
                        }
                        else {
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
        };
        // cambio de orientación de pantalla
        console.log('Orientación de la pantalla: ' + this.screenOrientation.type);
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    }
    HistoriaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HistoriaPage');
    };
    HistoriaPage.prototype.ngOnInit = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Descargando datos.'
        });
        //this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
        this.codigoEstacion = this.navParams.get('codigoEstacion');
        this.codigoVariable = this.navParams.get('codigoVariable');
        console.log('Obteniendo datos de estación: ' + this.codigoEstacion +
            ', variable: ' + this.codigoVariable);
        loading.present();
        this.estacionService.getHistoriaVariable(this.codigoEstacion, this.codigoVariable).subscribe(function (data) {
            _this.datosHistoriaVariable = data;
            _this.registrosFull = _this.datosHistoriaVariable.summary;
            console.log('Mínimo: ', _this.datosHistoriaVariable.minimo.valor);
            _this.minReg = _this.datosHistoriaVariable.minimo.valor;
            _this.maxReg = _this.datosHistoriaVariable.maximo.valor;
            _this.unidad = _this.datosHistoriaVariable.variableDTO.unidad;
            _this.detalle = _this.datosHistoriaVariable.variableDTO.nombre;
            _this.capturarRegistros();
            _this.setPropiedadesChart();
            loading.dismiss();
        }, function (error) { console.error(error); });
    };
    // ordena los registros antes de presentarlos
    HistoriaPage.prototype.ordenarRegistros = function (registros, orden) {
        if (orden == 'ascendente') {
            console.log("ASC to graph");
            registros.sort(function (a, b) {
                a = new Date(a.fechaPublicacion);
                b = new Date(b.fechaPublicacion);
                return a < b ? -1 : a > b ? 1 : 0;
            });
        }
        else if (orden == 'descendente') {
            console.log("DESC to history");
            registros.sort(function (a, b) {
                a = new Date(a.fechaPublicacion);
                b = new Date(b.fechaPublicacion);
                return a > b ? -1 : a < b ? 1 : 0;
            });
        }
    };
    /*--------------------------------GRAPH HISTORY---------------------------*/
    HistoriaPage.prototype.setPropiedadesChart = function () {
        this.chartHistory = new Highcharts.chart(this.optionsHistory);
    };
    HistoriaPage.prototype.capturarRegistros = function () {
        // to  history
        this.ordenarRegistros(this.registrosFull, 'descendente');
        for (var _i = 0, _a = this.registrosFull; _i < _a.length; _i++) {
            var registro = _a[_i];
            //console.log('Valor: ' + registro.valor + ', Fecha: ' + registro.fechaPublicacion);
            this.listaFechasRegistro.push(registro.fechaPublicacion);
            this.listaValoresRegistro.push(parseFloat(registro.valor));
        }
        // to graph
        this.ordenarRegistros(this.registrosFull, 'ascendente');
        for (var _b = 0, _c = this.registrosFull; _b < _c.length; _b++) {
            var registro = _c[_b];
            this.listaFechasRegistroASC.push(registro.fechaPublicacion);
            this.listaValoresRegistroASC.push(parseFloat(registro.valor));
        }
    };
    HistoriaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-historia',template:/*ion-inline-start:"D:\IonicApps\AppMonitorZ7\src\pages\historia\historia.html"*/'<!-- <!--\n  Generated template for the HistoriaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Detalle histórico</ion-title>\n  </ion-navbar>\n\n  <ion-segment [(ngModel)]="summary">\n    <ion-segment-button value="grafico">\n      Gráfico\n    </ion-segment-button>\n    <ion-segment-button value="registros">\n      Registros\n    </ion-segment-button>\n\n  </ion-segment>\n\n</ion-header>\n\n\n<ion-content class="weather">\n  <div [ngSwitch]="summary">\n\n    <div *ngSwitchCase="\'grafico\'">\n      <ion-grid class="more-info">\n        <ion-row>\n          <ion-col col-4>\n            <ion-row>\n              Descripción\n            </ion-row>\n            <ion-row>{{detalle}}</ion-row>\n          </ion-col>\n          <ion-col col-4>\n            <ion-row>\n              Mín. / Máx.\n            </ion-row>\n            <ion-row>{{minReg}} / {{maxReg}}</ion-row>\n          </ion-col>\n          <ion-col col-4>\n            <ion-row>\n              Unidad\n            </ion-row>\n            <ion-row>\n              {{unidad}}\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n\n\n      <div id="graficoHistoria" style="min-width: 310px; height: 400px; margin: 0 auto">\n      </div>\n\n\n    </div>\n\n    <ion-list *ngSwitchCase="\'registros\'">\n      <ion-list-header>\n        <h2>Fecha publicación </h2>\n        <ion-note item-end>\n          <h2 style="padding-right: 0.5cm">Valor({{unidad}})</h2>\n        </ion-note>\n      </ion-list-header>\n      <button ion-item *ngFor="let registro of registrosFull">\n        {{ registro.fechaPublicacion | date :  "y.MM.dd HH:mm" }}\n        <ion-badge item-end>{{ registro.valor }}</ion-badge>\n      </button>\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\IonicApps\AppMonitorZ7\src\pages\historia\historia.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_estacion_estacion__["a" /* EstacionProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_stomp_service__["StompService"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_screen_orientation__["a" /* ScreenOrientation */]])
    ], HistoriaPage);
    return HistoriaPage;
}());

//# sourceMappingURL=historia.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_user_user__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(afAuth, navCtrl, navParams, toastCtrl, userProvider) {
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.userProvider = userProvider;
        this.user = {};
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.login = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.afAuth.auth.signInWithEmailAndPassword(user.username, user.password)];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            //this.navCtrl.setRoot('HomePage');
                            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
                            console.log("Ingreso correctament...");
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        this.lanzarToast(e_1.message);
                        console.error(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.logear = function (user) {
        var _this = this;
        this.userProvider.login(user.username, user.password)
            .then(function (result) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
            console.log("Bienvenido.");
        })
            .catch(function (error) {
            console.log(error);
            _this.lanzarToast('Datos incorrectos');
        });
    };
    LoginPage.prototype.register = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var result, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.afAuth.auth.createUserWithEmailAndPassword(user.username, user.password)];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            //this.navCtrl.setRoot('HomePage');
                            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
                            console.log("Ingreso correctament...");
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        e_2 = _a.sent();
                        this.lanzarToast(e_2.message);
                        console.error(e_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.lanzarToast = function (sms) {
        var toast = this.toastCtrl.create({
            message: sms,
            duration: 2000
        });
        toast.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"D:\IonicApps\AppMonitorZ7\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Monitor Z7</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="has-header" padding="true" style="background: url(../assets/imgs/bg1.jpg) center; background-size: cover;">\n	<div class="app-icon"></div>\n	<ion-item>\n		<ion-label floating>Username</ion-label>\n		<ion-input type="text" [(ngModel)]="user.username"></ion-input>\n	</ion-item>\n\n	<ion-item>\n		<ion-label floating>Password</ion-label>\n		<ion-input type="password" [(ngModel)]="user.password"></ion-input>\n	</ion-item>\n\n	<button ion-button (click)="logear(user)">Login</button>\n	<button ion-button color="light" (click)="register(user)">Register</button>\n</ion-content>\n'/*ion-inline-end:"D:\IonicApps\AppMonitorZ7\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_0__providers_user_user__["a" /* UserProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_estacion_estacion__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the MapaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MapaPage = (function () {
    function MapaPage(platform, estacionService, navParams) {
        this.platform = platform;
        this.estacionService = estacionService;
        this.navParams = navParams;
        // datos de todas las estaciones
        this.estaciones = [];
        this.locations = [];
    }
    MapaPage.prototype.ngOnInit = function () {
    };
    MapaPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.estaciones = _this.estacionService.listaEstaciones;
            for (var _i = 0, _a = _this.estaciones; _i < _a.length; _i++) {
                var estacion = _a[_i];
                if (estacion.latitud != null) {
                    _this.locations.push({ name: estacion.nombre, lat: estacion.latitud, lng: estacion.longitud });
                }
            }
            var mapEle = _this.mapElement.nativeElement;
            var map = new google.maps.Map(mapEle, {
                center: _this.locations[0],
                zoom: 6
            });
            var markers = [];
            _this.locations.forEach(function (markerData) {
                var infoWindow = new google.maps.InfoWindow({
                    content: "<h5>" + markerData.name + "</h5>"
                });
                var marker = new google.maps.Marker({
                    position: markerData,
                    map: map,
                    animation: google.maps.Animation.DROP,
                    title: markerData.name
                });
                markers.push(marker);
                marker.addListener('click', function () {
                    infoWindow.open(map, marker);
                });
            });
            var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'assets/imgs/cluster/m' });
            google.maps.event.addListenerOnce(map, 'idle', function () {
                google.maps.event.trigger(map, 'resize');
                mapEle.classList.add('show-map');
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('mapCanvas'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], MapaPage.prototype, "mapElement", void 0);
    MapaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-mapa',template:/*ion-inline-start:"D:\IonicApps\AppMonitorZ7\src\pages\mapa\mapa.html"*/'<!--\n  Generated template for the MapaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Ubicación - Estaciones</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div style="height: 100%; width: 100%" #mapCanvas id="map_canvas"></div>\n</ion-content>\n'/*ion-inline-end:"D:\IonicApps\AppMonitorZ7\src\pages\mapa\mapa.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__providers_estacion_estacion__["a" /* EstacionProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], MapaPage);
    return MapaPage;
}());

//# sourceMappingURL=mapa.js.map

/***/ }),

/***/ 142:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 142;

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/chartlive/chartlive.module": [
		424,
		5
	],
	"../pages/estacion/estacion.module": [
		425,
		4
	],
	"../pages/historia/historia.module": [
		426,
		3
	],
	"../pages/login/login.module": [
		427,
		2
	],
	"../pages/mapa/mapa.module": [
		428,
		1
	],
	"../pages/register/register.module": [
		429,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 184;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
  */
var UserProvider = (function () {
    function UserProvider(http) {
        this.http = http;
        this.API_URL = 'platform/api/';
    }
    UserProvider.prototype.login = function (username, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var data = 'j_username=' + username +
                '&j_password=' + password +
                '&remember-me=' + 'true' + '&submit=Login';
            _this.http.post(_this.API_URL + 'authentication', data, {
                headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/x-www-form-urlencoded'), responseType: 'text'
            })
                .subscribe(function (result) {
                console.log('Camino correcto');
                resolve(result);
            }, function (error) {
                console.log(error);
                reject(error);
            });
        });
    };
    UserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], UserProvider);
    return UserProvider;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_estacion_estacion__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutPage = (function () {
    function AboutPage(navCtrl, estacionService) {
        this.navCtrl = navCtrl;
        this.estacionService = estacionService;
        console.log(this.estacionService.listaEstaciones);
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-about',template:/*ion-inline-start:"D:\IonicApps\AppMonitorZ7\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding style="background-image: url(\'../assets/imgs/bg12.jpg\');">\n  <ion-list class=" ">\n\n    <br/>\n    <!-- Profile Cover Page -->\n    <div class="support-nav col-md-3">\n      <div class="panel">\n        <div class="user-heading round">\n          <a href="#">\n            <img src="../assets/imgs/dp1.png">\n          </a>\n          <p style="color: #ffffff;">Santiago Quiñones</p>\n          <p>Email: lsquinones@utpl.edu.ec</p>\n\n        </div>\n      </div>\n    </div>\n\n\n\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\IonicApps\AppMonitorZ7\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_estacion_estacion__["a" /* EstacionProvider */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_estacion_estacion__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__estacion_estacion__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__posicion_estacion_posicion_estacion__ = __webpack_require__(217);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = (function () {
    function HomePage(navCtrl, estacionService, changeDetectorRef, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.estacionService = estacionService;
        this.changeDetectorRef = changeDetectorRef;
        this.loadingCtrl = loadingCtrl;
        this.estaciones = [];
        this.searchQuery = '';
        this.items = [];
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var loading = this.loadingCtrl.create({
            content: 'Obteniendo estaciones'
        });
        loading.present();
        // Extrae lista de estaciones medioambientales
        this.extraerEstaciones();
        loading.dismiss();
    };
    HomePage.prototype.initializeItems = function () {
        this.items = this.estaciones;
    };
    // Envía el código de la estación a EstacionPage
    HomePage.prototype.showEstacion = function (codigoEstacion) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__estacion_estacion__["a" /* EstacionPage */], { codigoEstacion: codigoEstacion });
    };
    // Ubica a la estación en el mapa
    HomePage.prototype.ubicarEstacion = function (nombre, latitud, longitud, slidingItem) {
        slidingItem.close();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__posicion_estacion_posicion_estacion__["a" /* PosicionEstacionPage */], { nombre: nombre, latitud: latitud, longitud: longitud });
    };
    // Extrae la lista de estaciones
    HomePage.prototype.extraerEstaciones = function () {
        var _this = this;
        this.estacionService.getEstaciones()
            .subscribe(function (data) {
            _this.estaciones = data;
            _this.items = _this.estaciones;
            // datos para toda la aplicación
            _this.estacionService.listaEstaciones = _this.estaciones;
        }, function (error) {
            console.error(error);
        });
    };
    HomePage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        console.log('Tarjet value: ' + val);
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            if (val && val.trim() != '') {
                this.items = this.items.filter(function (item) {
                    return (item.nombre.toLowerCase().indexOf(val.toLowerCase()) > -1);
                });
            }
        }
    };
    HomePage.prototype.ionChange = function () {
        this.changeDetectorRef.detectChanges();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"D:\IonicApps\AppMonitorZ7\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar no-border-bottom>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n\n    <!-- <ion-segment>\n      <ion-segment-button value="all">\n        Todos\n      </ion-segment-button>\n      <ion-segment-button value="favorites">\n        Favoritos\n      </ion-segment-button>\n    </ion-segment>\n    \n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon ios="ios-options-outline" md="md-options"></ion-icon>\n      </button>\n    </ion-buttons>\n  -->\n\n  </ion-navbar>\n\n\n\n\n\n  <ion-toolbar no-border-top>\n    <ion-searchbar color="primary" (input)="getItems($event)" (ionClear)="getItems($event)" placeholder="Buscar"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n\n  <!-- LISTA DE ESTACIONES -->\n  <ion-list>\n\n    <ion-item-sliding *ngFor="let item of items" #slidingItem>\n\n      <button ion-item (click)="showEstacion(item.codigo)">\n        <h3>\n          <ion-icon name="cube" item-start></ion-icon>{{item.nombre}}</h3>\n        <p>\n          Topico: {{item.topico}} &mdash; {{item.ultimaActualizacion | date :  "y.MM.dd HH:mm"}}\n        </p>\n\n      </button>\n\n\n      <ion-item-options side="left" (ionSwipe)="ubicarEstacion(item.nombre, item.latitud, item.longitud, slidingItem)">\n        <button ion-button expandable color="secondary" (clic)="ubicarEstacion(item.nombre, item.latitud, item.longitud, slidingItem)">\n          Ubicar\n        </button>\n      </ion-item-options>\n\n      <ion-item-options side="right">\n        <button ion-button color="favorite">\n          Favorito\n        </button>\n        <button ion-button color="danger">\n          Remover\n        </button>\n\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n\n\n    <!--  \n    <button ion-item *ngFor="let item of items" (click)="getEstacion(item.codigo)">\n        \n      \n      <h2><ion-icon name="cube" item-start></ion-icon>{{ item.nombre | uppercase }}</h2>\n      <p>Ultima actualización: {{ item.ultimaActualizacion }}</p>\n      <!-- <p>{{ item.latitud }} {{ item.longitud }}</p>\n      </button>-->\n\n\n  </ion-list>\n  <!-- END LISTA DE ESTACIONES -->\n\n\n  <!-- \n <ion-list *ngIf="!isfiltered">\n    <ion-item *ngFor="let museum of museumList" (click)="itemTapped($event, museum)">\n      <h2><ion-icon ios="ios-pin" md="md-pin"></ion-icon>{{museum.name}}</h2>\n      <p>State name: {{museum.state}}</p>\n    </ion-item>\n  </ion-list>\n-->\n\n\n  <!--\n  \n  <h2>Lista de usuarios!</h2>\n  <ion-list>\n    <ion-item *ngFor="let user of users">\n      <ion-avatar item-start>\n        <img [src]="user.picture.medium">\n      </ion-avatar>\n      <h2>{{ user.name.first | uppercase }}</h2>\n      <p>{{ user.email }}</p>\n    </ion-item>\n  </ion-list>\n\n  \n  \n  \n-->\n\n\n\n</ion-content>\n'/*ion-inline-end:"D:\IonicApps\AppMonitorZ7\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_estacion_estacion__["a" /* EstacionProvider */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PosicionEstacionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the PosicionEstacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PosicionEstacionPage = (function () {
    function PosicionEstacionPage(platform, navCtrl, navParams) {
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.locations = [];
        // datos enviados desde HomePage
        this.nombre = this.navParams.get('nombre');
        this.latitud = this.navParams.get('latitud');
        this.longitud = this.navParams.get('longitud');
        console.log("Llegaron los datos: ");
        console.log(this.nombre + " " + this.latitud + ' ' + this.longitud);
    }
    PosicionEstacionPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.locations.push({ name: _this.nombre, lat: _this.latitud, lng: _this.longitud });
            var mapEle = _this.mapElement.nativeElement;
            var map = new google.maps.Map(mapEle, {
                center: _this.locations[0],
                zoom: 10
            });
            var markers = [];
            _this.locations.forEach(function (markerData) {
                var infoWindow = new google.maps.InfoWindow({
                    content: "<h5>" + markerData.name + "</h5>"
                });
                var marker = new google.maps.Marker({
                    position: markerData,
                    map: map,
                    animation: google.maps.Animation.DROP,
                    title: markerData.name
                });
                markers.push(marker);
                marker.addListener('click', function () {
                    infoWindow.open(map, marker);
                });
            });
            var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'assets/imgs/cluster/m' });
            google.maps.event.addListenerOnce(map, 'idle', function () {
                google.maps.event.trigger(map, 'resize');
                mapEle.classList.add('show-map');
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('mapCanvas'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], PosicionEstacionPage.prototype, "mapElement", void 0);
    PosicionEstacionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-posicion-estacion',template:/*ion-inline-start:"D:\IonicApps\AppMonitorZ7\src\pages\posicion-estacion\posicion-estacion.html"*/'<!--\n  Generated template for the PosicionEstacionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{nombre | lowercase}}</ion-title>\n    \n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div style="height: 100%; width: 100%" #mapCanvas id="map_canvas"></div>\n</ion-content>\n'/*ion-inline-end:"D:\IonicApps\AppMonitorZ7\src\pages\posicion-estacion\posicion-estacion.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], PosicionEstacionPage);
    return PosicionEstacionPage;
}());

//# sourceMappingURL=posicion-estacion.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterpolacionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the InterpolacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InterpolacionPage = (function () {
    function InterpolacionPage(navCtrl, navParams, sanitizer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sanitizer = sanitizer;
    }
    InterpolacionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InterpolacionPage');
        this.strUpdatePageUrl = this.updatePageUrl();
        var iframe = document.getElementById('iframeInterpolacion');
        console.log(iframe.textContent);
    };
    InterpolacionPage.prototype.updatePageUrl = function () {
        // Appending an ID to a YouTube URL is safe.
        // Always make sure to construct SafeValue objects as
        // close as possible to the input data, so
        // that it's easier to check if the value is safe.
        var dangerousVideoUrl = 'http://200.0.29.38:8080/sos-samples/idw/idwEstation.html';
        return this.sanitizer.bypassSecurityTrustResourceUrl(dangerousVideoUrl);
    };
    InterpolacionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-interpolacion',template:/*ion-inline-start:"D:\IonicApps\AppMonitorZ7\src\pages\interpolacion\interpolacion.html"*/'<!--\n  Generated template for the InterpolacionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Iterpolación Variables</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div id="div100" class="video-container">\n    <iframe id="iframeInterpolacion" [src]="strUpdatePageUrl" frameborder="0" allowfullscreen></iframe>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\IonicApps\AppMonitorZ7\src\pages\interpolacion\interpolacion.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
    ], InterpolacionPage);
    return InterpolacionPage;
}());

//# sourceMappingURL=interpolacion.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(282);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_mapa_mapa__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_estacion_estacion__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_historia_historia__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_chartlive_chartlive__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_interpolacion_interpolacion__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_posicion_estacion_posicion_estacion__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_login_login__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_common_http__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_estacion_estacion__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_http__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ng2_stomp_service__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ng2_stomp_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_ng2_stomp_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_angularfire2__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_angularfire2_auth__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__app_firebase_config__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_user_user__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_screen_orientation__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_mapa_mapa__["a" /* MapaPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_estacion_estacion__["a" /* EstacionPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_historia_historia__["a" /* HistoriaPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_chartlive_chartlive__["a" /* ChartlivePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_interpolacion_interpolacion__["a" /* InterpolacionPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_posicion_estacion_posicion_estacion__["a" /* PosicionEstacionPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/chartlive/chartlive.module#ChartlivePageModule', name: 'ChartlivePage', segment: 'chartlive', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/estacion/estacion.module#EstacionPageModule', name: 'EstacionPage', segment: 'estacion', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/historia/historia.module#HistoriaPageModule', name: 'HistoriaPage', segment: 'historia', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mapa/mapa.module#MapaPageModule', name: 'MapaPage', segment: 'mapa', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_19__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_21_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_23__app_firebase_config__["a" /* FIREBASE_CONFIG */].firebase),
                __WEBPACK_IMPORTED_MODULE_22_angularfire2_auth__["b" /* AngularFireAuthModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_mapa_mapa__["a" /* MapaPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_estacion_estacion__["a" /* EstacionPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_historia_historia__["a" /* HistoriaPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_chartlive_chartlive__["a" /* ChartlivePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_interpolacion_interpolacion__["a" /* InterpolacionPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_posicion_estacion_posicion_estacion__["a" /* PosicionEstacionPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_18__providers_estacion_estacion__["a" /* EstacionProvider */],
                __WEBPACK_IMPORTED_MODULE_20_ng2_stomp_service__["StompService"],
                __WEBPACK_IMPORTED_MODULE_24__providers_user_user__["a" /* UserProvider */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_screen_orientation__["a" /* ScreenOrientation */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstacionProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { Http, Response } from '@angular/http';





/*
  Generated class for the EstacionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
  */
var EstacionProvider = (function () {
    //private urlHistoriaVariable: string = 'assets/data/data.json';
    function EstacionProvider(http, platform) {
        this.http = http;
        this.platform = platform;
        this.basepath = 'platform';
        // recurso global, se actualiza en home.ts
        this.listaEstaciones = [];
        if (this.platform.is('cordova')) {
            this.basepath = 'http://200.0.29.38:8080/platform';
        }
        this.urlEstaciones = this.basepath + "/api/public/meteorological";
        this.urlDetalleEstacion = this.basepath + '/api/public/meteorological/detail/';
        this.urlHistoriaVariable = this.basepath + '/api/variableHistoricos/detail/';
    }
    // Obtiene el detalle de las estación por {codigo}
    EstacionProvider.prototype.getDetalleEstacion = function (codigo) {
        return this.http.get(this.urlDetalleEstacion + codigo + '/codigo')
            .do(function (res) { return console.log(res); });
    };
    EstacionProvider.prototype.getHistoriaVariable = function (codEstacion, codVariable) {
        return this.http.get(this.urlHistoriaVariable + codEstacion + '/' +
            codVariable);
        //return this.http.get(this.urlHistoriaVariable);
    };
    // Obtiene todas las estaciones del API REST
    EstacionProvider.prototype.getEstaciones = function () {
        return this.http.get(this.urlEstaciones);
    };
    EstacionProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Platform */]])
    ], EstacionProvider);
    return EstacionProvider;
}());

//# sourceMappingURL=estacion.js.map

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(129);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*import { ChartlivePage } from '../pages/chartlive/chartlive';
import { InterpolacionPage } from '../pages/interpolacion/interpolacion';*/
var MyApp = (function () {
    function MyApp(menuCtrl, platform, statusBar, splashScreen) {
        this.menuCtrl = menuCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.cerrarSesion = function () {
        console.log("Dirigiendo a la página de login..");
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        this.menuCtrl.close();
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\IonicApps\AppMonitorZ7\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <!-- <ion-title>Menu</ion-title> -->\n    </ion-toolbar>\n  </ion-header>\n  <ion-content padding>\n    <ion-list>\n\n      <button ion-item (click)="cerrarSesion()">\n          <h3><ion-icon name="exit" item-start></ion-icon> Cerrar sesión</h3>\n      </button>\n\n    </ion-list>\n    <!-- <button ion-button menuClose="left">Close Left Menu</button> -->\n  </ion-content>\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content></ion-nav>\n'/*ion-inline-end:"D:\IonicApps\AppMonitorZ7\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-contact',template:/*ion-inline-start:"D:\IonicApps\AppMonitorZ7\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\IonicApps\AppMonitorZ7\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FIREBASE_CONFIG; });
var FIREBASE_CONFIG = {
    production: false,
    firebase: {
        apiKey: "AIzaSyDl74geCWDBw_UmpPN_fhbpbtiRTcrr_JU",
        authDomain: "monitorz7-73b0f.firebaseapp.com",
        databaseURL: "https://monitorz7-73b0f.firebaseio.com",
        projectId: "monitorz7-73b0f",
        storageBucket: "monitorz7-73b0f.appspot.com",
        messagingSenderId: "817404458800"
    }
};
//# sourceMappingURL=app.firebase.config.js.map

/***/ })

},[260]);
//# sourceMappingURL=main.js.map