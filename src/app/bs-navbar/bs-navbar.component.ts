import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth'; 

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {

  constructor(private angularFireAuth: AngularFireAuth) {
    angularFireAuth.authState.subscribe( x => 
      console.log(x)
    )
   }

  logout(){ 
    this.angularFireAuth.auth.signOut()
  }

}
