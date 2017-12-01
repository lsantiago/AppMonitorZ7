import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EstacionPage } from './estacion';

@NgModule({
  declarations: [
    EstacionPage,
  ],
  imports: [
    IonicPageModule.forChild(EstacionPage),
  ],
})
export class EstacionPageModule {}
