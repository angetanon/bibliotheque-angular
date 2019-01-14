import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    const config = {
      apiKey: "AIzaSyDBN58uUbC4_nigxsRnx6sZO55m3q1QZio",
      authDomain: "bibliotheque-angular-ange.firebaseapp.com",
      databaseURL: "https://bibliotheque-angular-ange.firebaseio.com",
      projectId: "bibliotheque-angular-ange",
      storageBucket: "bibliotheque-angular-ange.appspot.com",
      messagingSenderId: "156541666955"
    }
    firebase.initializeApp(config);
  }
}
