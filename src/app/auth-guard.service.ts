import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import'rxjs/add/operator/map';
import { Observable } from '@firebase/util';
import { User } from 'firebase';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,
  private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    return this.authService.user$.map(
      user => {
        if (user) return true;
        this.router.navigate(['/login'], { queryParams: {routerUrl: state.url}});
        return false;
      }
    )
  }
  
 
  


}
