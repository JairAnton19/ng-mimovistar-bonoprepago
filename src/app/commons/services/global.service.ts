import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { isNullOrUndefined } from 'util';
import { EncryptService } from '../../commons/services/encrypt.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ParamsRouting } from '../models/objParams.model';
import { ActivatedRoute } from '@angular/router';
import { JsonPipe } from '@angular/common';



// const apiURL: string = 'https://aks-mimovistar-ingress-cert.eastus2.cloudapp.azure.com/';

const helper = new JwtHelperService();
@Injectable({
  providedIn: 'root'
})

export class GlobalService {
  private REST_API_SERVER = 'https://aks-mimovistar-ingress-prod.eastus2.cloudapp.azure.com';

  constructor(private active: ActivatedRoute, private http: HttpClient, private encryptService: EncryptService) { }

  public globlalGet(url: string) {

    try {
      return this.http.get(`${this.REST_API_SERVER}/${url}`,
        {
           responseType: 'json'
        });
    } catch (error) {
      return error;
    }
  }

  public globlalPost(url: string, body: any) {
    try {
      return this.http.post(`${this.REST_API_SERVER}/${url}`, JSON.stringify(body),
        {
          responseType: 'json'}
          );
    } catch (error) {
      return error;
    }
  }

  public globalPostToken(url: string, body: any){
    try{
      console.log('globalPostToken')
      console.log(url)
      console.log(body)

      return this.http.post(url, body, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Cookie': 'buid=AQABAAEAAAAm-06blBE1TpVMil8KPQ41SwZ0MSw9gv-YMgNfgO7PHjnkyIceJZA_xJTTqakZIGFe_f0aBXulJAKkxPoDHwFab4ciE07AzyiTjeBEMwxVuwwijdvCGMm6BwJJULPIlDkgAA; esctx=AQABAAAAAAAm-06blBE1TpVMil8KPQ41KktrSTWuBFCXZ0Ij6HYPoDJ3C5QcJ0rQBQO5WrUTVemiApmoKRapUH18Dz2k_YKxvBR_DoN1iMahpN3Cq3wTKsB9VRdPPVr824KRD5tEtFeWebgRL8K_cusBQMR6uk-nO32MDm3wTAilo-D4uCcTA9O-P48vM1yZEgOEmXqmke0gAA; x-ms-gateway-slice=prod; stsservicecookie=ests; fpc=At2_T9Oe0dFPpg51EndsXyR4o6DGAQAAADdjbNYOAAAA'
        }
      })
    }
    catch(error){
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
    return decodedToken;
  }

  public getUrlNovum(token:any){
    let tokenOK = this.jwt(token)

    if(isNullOrUndefined(tokenOK)){ return false }
    sessionStorage.setItem("urlCallBack",tokenOK.callback_url)
    return true
  }

  public decodeToken(token: any){
    return this.jwt(token)
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

  public setBonoListPostpagoHogar(array: any){
    sessionStorage.setItem('bonoList', JSON.stringify(array))
  }

  public getBonoListPostpagoHogar(){
    let bonoList = sessionStorage.getItem('bonoList')
    return bonoList != null ? JSON.parse(bonoList) : ''
  }

  public setUrlJwt(url: any){
    sessionStorage.setItem('urlJwt', url)
  }

  public getUrlJwt(){
    let urlJwt = sessionStorage.get('urlJwt')
    return urlJwt != null ? urlJwt : ''
  }
}
