import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { isNullOrUndefined } from 'util';
import { EncryptService } from '../../commons/services/encrypt.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ParamsRouting } from '../models/objParams.model';
import { ActivatedRoute } from '@angular/router';



// const apiURL: string = 'https://aks-mimovistar-ingress-dev.eastus2.cloudapp.azure.com';

const helper = new JwtHelperService();
@Injectable({
  providedIn: 'root'
})

export class GlobalService {
  private REST_API_SERVER = 'https://aks-mimovistar-ingress-prod.eastus2.cloudapp.azure.com/';

  constructor(private active: ActivatedRoute, private http: HttpClient, private encryptService: EncryptService) { }

  public globlalGet(url: string) {

    try {
      return this.http.get(`${this.REST_API_SERVER}/${url}`,
        {
          headers: new HttpHeaders({ 'Request-Id': '1' })
          , responseType: 'json'
        });
    } catch (error) {
      return error;
    }
  }

  public globlalPost(url: string, body: any) {
    try {
      return this.http.post(`${this.REST_API_SERVER}/${url}`, JSON.stringify(body),
        {
          headers: new HttpHeaders(
            {'Request-Id' : '1', 'Content-Type':'application/json'}),
          responseType: 'json'}
          );
    } catch (error) {
      return error;
    }
  }


  public setToken(tkn: any): void {
    sessionStorage.setItem('token', tkn);
  }

  private jwt(token: any) {
    let decodedToken;
    try {
      decodedToken = helper.decodeToken(token);
    } catch (error) {
      decodedToken = null;
    }
    console.log(decodedToken);
    return decodedToken;
  }

  public getToken(): boolean {
    const token = sessionStorage.getItem('token');
    const getDate = new Date();
    if (!isNullOrUndefined(token)) {
      const tokenOK = this.jwt(token);
      if (isNullOrUndefined(tokenOK)) { return false; }
      if (!tokenOK.exp) { return false; }
      if (new Date(tokenOK.exp * 1000) > getDate) {
        console.log('El token aun no expira');
        return true;
      } else {
        console.log('El token expiro');
        return false;
      }
    } else {
      return false;
    }
  }

  public getParams(array: any) {
    const obj: ParamsRouting = new ParamsRouting();
    this.active.queryParamMap.subscribe(async (params) => {
      if (params.keys.length > 0) {
        if (JSON.stringify(params.keys) === JSON.stringify(array)) {
          obj.value = true;
          obj.response = params;
          obj.coment = 'Los parametros son iguales';
        } else {
          obj.value = false;
          obj.response = null;
          obj.coment = 'Los parametros enviados no son iguales a los parametros de la ruta';
        }
      } else {
        obj.value = false;
        obj.response = null;
        obj.coment = 'No existe parametros en la ruta';
      }
    });
    console.log(obj);
    return obj;
  }

}
