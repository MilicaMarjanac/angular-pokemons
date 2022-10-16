import { Injectable } from '@angular/core';
import { Router, CanActivate, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, public authService: AuthService) { }

  canActivate(): boolean | UrlTree {
    if (!this.authService.isUserLoggedIn) {
      const queryParam = window.location.pathname.split('/')[2];
      this.router.navigate(['auth'], {
        queryParams: { queryParamUrl: queryParam },
      });
      return false;
    }
    return true;
  }
}
