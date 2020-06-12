import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable(
)

export class AuthorizationInterceptor implements HttpInterceptor {

  dev:string = 'bWltb3Zpc3RhcjpnR3V5Vzd2WFJnVmV1THBz' //'bWltb3Zpc3RhcjpnR3V5Vzd2WFJnVmV1THBz'
  cert:string= 'bWltb3Zpc3RhcnRlc3Q6UTQ5Y2tZUlZkS2NFWlk2SA==' //'bWltb3Zpc3RhcjpnR3V5Vzd2WFJnVmV1THBz' 
  prod: string= 'bWltb3Zpc3RhcnByb2Q6SEJQQmZiQjl6QVZNRVo0Sg==' //'bWltb3Zpc3RhcjpnR3V5Vzd2WFJnVmV1THBz'

  subscriptionDev: string = '2dc510c8323c494c843d86bb74f3d07a';
  subscriptionCert: string = '010682286a2f45ebae76575c637b6b1f';

  constructor() {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
  cert:string= 'bWltb3Zpc3RhcnRlc3Q6UTQ5Y2tZUlZkS2NFWlk2SA==' //'bWltb3Zpc3RhcjpnR3V5Vzd2WFJnVmV1THBz' 
        'Authorization': `Basic ${this.cert}`,
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': `${this.subscriptionCert}`
      }
    })

    return next.handle(request);
  }
}
