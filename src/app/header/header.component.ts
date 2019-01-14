import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isAuth: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged( //Méthode onAuthStateChanged() permettant d'observer l'état de l'authentification de l'user 
      (user) => {                      // => A chaque changement d'état, on exécute la fonction passé en paramètre
        if (user) {                    // Si l'utilisateur est bien authentifié, onAuthStateChanged réçoit un objet de type firebase.user
          this.isAuth = true;
        } else {
          this.isAuth = false;
        }
      }
    );
  }

  onSignOut() {
    this.authService.signOutUser();
  }

}
