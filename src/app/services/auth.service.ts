import {environment} from '../../environments/environment';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class AuthService implements CanActivate {

    constructor(public httpClient: HttpClient, public router: Router, public fs: AngularFirestore) {}

    isAuthenticated() {
        return localStorage.getItem('token') != null;
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.isAuthenticated()) {
          if (route.url.toString() === 'login') {
            this.router.navigate(['/cpanel/dashboard']);
            return false;
          } else {
            return true;
          }
        } else {
          if (route.url.toString() !== 'login') {
            this.router.navigate(['/cpanel/login']);
            return false;
          } else {
            return true;
          }
        }
    }

    setToken(token) {
        localStorage.setItem('token', token);
    }

    getToken() {
        return localStorage.getItem('token');
    }

    login() {
      return this.fs.collection('data').valueChanges();
    }

    logout() {
        localStorage.clear();
        this.router.navigate(['/cpanel/login']);
    }

}
