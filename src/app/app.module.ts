import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { MapaPage } from '../pages/mapa/mapa';
import { EstacionPage } from '../pages/estacion/estacion';
import { HistoriaPage } from '../pages/historia/historia';
import { TabsPage } from '../pages/tabs/tabs';
import { ChartlivePage } from '../pages/chartlive/chartlive';
import { InterpolacionPage } from '../pages/interpolacion/interpolacion';
import { PosicionEstacionPage } from '../pages/posicion-estacion/posicion-estacion';

import { LoginPage } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpClientModule } from '@angular/common/http';
import { EstacionProvider } from '../providers/estacion/estacion';

import { HttpModule } from '@angular/http';


import { StompService } from 'ng2-stomp-service';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { FIREBASE_CONFIG } from './app.firebase.config';
import { UserProvider } from '../providers/user/user';

import { ScreenOrientation } from '@ionic-native/screen-orientation';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    MapaPage,
    EstacionPage,
    HistoriaPage,
    ChartlivePage,
    TabsPage,
    LoginPage,
    InterpolacionPage,
    PosicionEstacionPage

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG.firebase),
    AngularFireAuthModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    MapaPage,
    EstacionPage,
    HistoriaPage,
    ChartlivePage,
    TabsPage,
    LoginPage,
    InterpolacionPage,
    PosicionEstacionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EstacionProvider,
    StompService,
    UserProvider,
    ScreenOrientation
  ]
})
export class AppModule {}
