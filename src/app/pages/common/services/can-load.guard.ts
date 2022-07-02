import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionToken } from 'src/app/config/session/sessionToken';

@Injectable({
  providedIn: 'root'
})
export class CanLoadGuard implements CanActivate {
  constructor(private router: Router) { }

  private redireToLogin() {
    this.router.navigate(['/login']);
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      //TODO validación de sesión valida
    const validSession = SessionToken.getToken();
    console.log(validSession);
    
    if (Object.keys(validSession).length === 0) {
      this.redireToLogin();
      return false;
    }
    return true;
  }

}
