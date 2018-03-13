
import { HttpHeaders, HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
  */
  @Injectable()
  export class UserProvider {

  	private API_URL = 'platform/api/';	

  	constructor(public http: HttpClient) { }

  	login(username: string, password: string){
  		return new Promise((resolve, reject) => {

  			var data = 'j_username=' + username +
  			'&j_password=' + password +
  			'&remember-me=' + 'true' + '&submit=Login';

  			this.http.post(this.API_URL + 'authentication', data, {
  				headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'), responseType: 'text'
  			})
  			.subscribe((result: any) => {
  				console.log('Camino correcto');
  				resolve(result);
  			},
  			(error) => {

  				console.log(error);
  				reject(error);
  			});
  		});

  	}
  }