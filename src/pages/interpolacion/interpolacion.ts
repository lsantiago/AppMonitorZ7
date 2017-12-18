import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';





/**
 * Generated class for the InterpolacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-interpolacion',
  templateUrl: 'interpolacion.html',
})
export class InterpolacionPage {
  strUpdatePageUrl: any;

  constructor(public navCtrl: NavController, 
  	public navParams: NavParams,
  	public sanitizer: DomSanitizer) {
  	

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InterpolacionPage');
    this.strUpdatePageUrl = this.updatePageUrl();


    var iframe = document.getElementById('iframeInterpolacion');

    console.log(iframe.textContent);
  }

  updatePageUrl() {
        // Appending an ID to a YouTube URL is safe.
        // Always make sure to construct SafeValue objects as
        // close as possible to the input data, so
        // that it's easier to check if the value is safe.
        let dangerousVideoUrl = 'http://200.0.29.38:8080/sos-samples/idw/idwEstation.html';
        return this.sanitizer.bypassSecurityTrustResourceUrl(dangerousVideoUrl);
    }

}
