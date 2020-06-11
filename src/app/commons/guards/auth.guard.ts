import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';
import { GlobalService } from '../services/global.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: GlobalService) { }
  canActivate() {
    /*if (this.authService.getToken()) {
      return true;
    } else {
      this.router.navigate(['/recarga-error'], { replaceUrl: true } );
      return false;
    }*/return true;
  }
}
