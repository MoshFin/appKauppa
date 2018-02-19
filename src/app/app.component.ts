import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { AUTH_PROVIDERS } from 'angularfire2/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private authService: AuthService, private router: Router) {

    authService.user$.subscribe( user =>{
      if(user) router.navigateByUrl(localStorage.getItem('returnUrl'));
    });
 

  }
}
