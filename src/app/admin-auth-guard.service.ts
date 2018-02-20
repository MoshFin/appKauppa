import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import 'rxjs/add/operator/map'

import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/observable';

@Injectable()
export class AdminAuthGuard implements CanActivate {
  
  constructor(
    private authService: AuthService) { }

  canActivate(): Observable<boolean> {
    return this.authService.AppUser$
    .map(user => user.isAdmin)
  }

}
