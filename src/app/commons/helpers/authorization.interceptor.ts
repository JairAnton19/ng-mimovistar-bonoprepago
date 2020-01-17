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

  dev:string = 'bWltb3Zpc3RhcjpnR3V5Vzd2WFJnVmV1THBz'
  cert:string= 'bWltb3Zpc3RhcnRlc3Q6UTQ5Y2tZUlZkS2NFWlk2SA=='
  prod: string= 'bWltb3Zpc3RhcnByb2Q6SEJQQmZiQjl6QVZNRVo0Sg=='

  constructor() {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    
    request = request.clone({
      setHeaders: {
        'Authorization': `Basic ${this.prod}`,
        'Content-Type': 'application/json'
      }
    });

    
    return next.handle(request);
  }
}