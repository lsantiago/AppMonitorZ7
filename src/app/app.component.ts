import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';

import { MenuController } from 'ionic-angular';
/*import { ChartlivePage } from '../pages/chartlive/chartlive';
import { InterpolacionPage } from '../pages/interpolacion/interpolacion';*/


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  constructor(public menuCtrl: MenuController, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  cerrarSesion(){
    console.log("Dirigiendo a la página de login..");
    this.rootPage = LoginPage;
    this.menuCtrl.close();
  }
}
