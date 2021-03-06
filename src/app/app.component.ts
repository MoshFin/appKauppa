import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { AUTH_PROVIDERS } from 'angularfire2/auth';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private authService: AuthService, 
    private router: Router,
    private userService: UserService) {

    authService.user$.subscribe( user =>{

      if(!user) return;
      this.userService.save(user);
      let returnUrl = localStorage.getItem('returnUrl')
      if(!returnUrl) return; 
      
      localStorage.removeItem('returnUrl');
      router.navigateByUrl(returnUrl);
      
    });
 

  }
}
