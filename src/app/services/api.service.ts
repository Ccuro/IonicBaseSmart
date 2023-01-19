import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private httpClient: HttpClient, private router: Router) {}
  urlApi: string = 'https://cognito-idp.us-east-1.amazonaws.com';
  urlApiSys: string = 'https://sn85xnx7dh.execute-api.us-east-1.amazonaws.com';

  getQuery(query: string, headers: HttpHeaders) {
    const url = `${ this.urlApi + query }`;
    return this.httpClient.get(url, {headers: headers});
  }

  postQuery(query: string, params: any, headers: HttpHeaders) {
    const url = `${ this.urlApi + query }`;
    return this.httpClient.post(url, params, {headers: headers});
  }
  
  getQuerySys(query: string, headers: HttpHeaders) {
    const url = `${ this.urlApiSys + query }`;
    return this.httpClient.get(url, {headers: headers});
  }

  postQuerySys(query: string, params: any, headers: HttpHeaders) {
    const url = `${ this.urlApiSys + query }`;
    return this.httpClient.post(url, params, {headers: headers});
  }

  LoginUser(data: object, headers: HttpHeaders) {
    return this.postQuery('/', data, headers).pipe(
      map(data => {
        return data;
      })
    );
  }
  
  ConsultaDispositivo(data: object, headers: HttpHeaders) {
    return this.getQuerySys('/dev/devices/'+localStorage.getItem('username'), headers).pipe(
      map(data => {
        return data;
      })
    );
  }
  
  ConsultaDispositivoParking(data: object, headers: HttpHeaders, serie:string) {
    return this.getQuerySys('/dev/devices/'+localStorage.getItem('username')+'?serie='+serie, headers).pipe(
      map(data => {
        return data;
      })
    );
  }
  
  ConsultaDispositivoPole(data: object, headers: HttpHeaders, serie:string) {
    return this.getQuerySys('/dev/devices/'+localStorage.getItem('username')+'?serie='+serie, headers).pipe(
      map(data => {
        return data;
      })
    );
  }
  EnvPostDispositivoPole(data: object, headers: HttpHeaders, serie:string) {
    return this.postQuerySys('/dev/devices/'+localStorage.getItem('username')+'?serie='+serie,data, headers).pipe(
      map(data => {
        return data;
      })
    );
  }
}
