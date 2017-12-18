import { Component } from '@angular/core';

import { MapaPage } from '../mapa/mapa';
import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { InterpolacionPage } from '../interpolacion/interpolacion';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MapaPage;
  tab3Root = InterpolacionPage;
  tab4Root = AboutPage;


  constructor() {

  }
}
