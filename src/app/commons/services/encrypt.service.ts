import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class EncryptService {

  constructor() {

  }

  private tokenFromUI = 'T3l3f0n1cV2OI9vl20nv';

  public en(request) {
    const key = CryptoJS.enc.Utf8.parse(this.tokenFromUI);
    const ive = CryptoJS.enc.Utf8.parse(this.tokenFromUI);
    const encrypted = CryptoJS.AES.encrypt(
      JSON.stringify(request), key, {
      keySize: 16,
      iv: ive,
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    });

    return encrypted.toString().replace(/[/]/g, '|').replace(/[+]/g, '*');
  }

  public des(request) {

    const key = CryptoJS.enc.Utf8.parse(this.tokenFromUI);
    const ive = CryptoJS.enc.Utf8.parse(this.tokenFromUI);
    const decrypt  = CryptoJS.AES.decrypt(
      request.replace(/[|]/g, '/').replace(/[*]/g, '+'), key, {
      keySize: 16,
      iv: ive,
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    }).toString(CryptoJS.enc.Utf8);

    return decrypt.toString();
  }
}
