import {Component} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user: Observable<firebase.User>;
  items: FirebaseListObservable<any[]>;
  msgVal = '';

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
    this.items = af.list('/test_results', {
      query: {
        limitToLast: 10
      }
    });

    this.user = this.afAuth.authState;

  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider)
      .then((user) => localStorage.setItem('user', user.user.displayName));
  }

  logout() {
    this.afAuth.auth.signOut().then(() => localStorage.removeItem('user'));
  }

  Send(message: string) {
    this.items.push({message: message, user: localStorage.getItem('user')});
    this.msgVal = '';
  }
}
