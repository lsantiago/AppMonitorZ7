import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';

import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { TabsPage } from '../tabs/tabs';

import { ToastController } from 'ionic-angular';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user = {} as User;

  constructor(private afAuth: AngularFireAuth, 
  	public navCtrl: NavController, public navParams: NavParams, 
  	public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  async login(user: User) {
    try {
      const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      if (result) {
        //this.navCtrl.setRoot('HomePage');
        this.navCtrl.push(TabsPage)
        console.log("Ingreso correctament...");
      }  
    }
    catch (e) {
      this.lanzarToast(e.message);
      console.error(e);
    }
  }
 
  async register(user: User) {
    try {
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(
        user.email,
        user.password
      );
      if (result) {
        //this.navCtrl.setRoot('HomePage');
        this.navCtrl.push(TabsPage);
        console.log("Ingreso correctament...");
      }
    } catch (e) {
      this.lanzarToast(e.message);	
      console.error(e);
    }
  }

  lanzarToast(sms){
  	let toast = this.toastCtrl.create({
  			message: sms,
  			duration: 2000
  		});
  		toast.present();
  }

}
