import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';


export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  emailVerified: boolean;
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: User | null = null

  constructor(public afAuth: AngularFireAuth, public firestore: AngularFirestore, public router: Router) {

    this.afAuth.authState.subscribe((user: any) => {
      if (user) {
        this.userData = user || null;
        localStorage.setItem('user', JSON.stringify(this.userData))
      } else {
        localStorage.setItem('user', 'null');
      }
      JSON.parse(localStorage.getItem('user')!)
    });

  }

  setUserData(user: any) {

    const userRef: AngularFirestoreDocument<any> = this.firestore.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    };

    return userRef.set(userData, { merge: true });

  }

  signUp(email: string, password: string) {
    return this.afAuth
    .createUserWithEmailAndPassword(email, password)
    .then((result) => {
      this.setUserData(result.user)
    })
  }

  isLoggedIn = (): boolean => {
    const user = JSON.parse(localStorage.getItem('user')!);

    return user !== null && user.emailVerified !== false ? true : false;
  }
}
