import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// const apiURL: string = 'https://aks-mimovistar-ingress-dev.eastus2.cloudapp.azure.com';

@Injectable({
  providedIn: 'root'
})

export class GlobalService {

  private REST_API_SERVER = 'https://aks-mimovistar-ingress-dev.eastus2.cloudapp.azure.com/';

  constructor(private http: HttpClient) { }

  public globlalGet(url: string) {

    try {
      return this.http.get(`${this.REST_API_SERVER}/${url}`,
      { headers: new HttpHeaders({ 'Request-Id': '1' })
      , responseType: 'json' });
    } catch (error) {
      return error;
    }
  }
}
