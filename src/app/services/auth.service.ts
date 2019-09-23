import {environment} from '../../environments/environment';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService implements CanActivate {

    constructor(public httpClient: HttpClient, public router: Router) {}

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

    login(email: string, password: string) {
      let headers = new HttpHeaders();
      headers = headers.append('Access-Control-Allow-Origin', '*');
      headers = headers.append('Access-Control-Allow-Headers', '*');
      headers = headers.append('Access-Control-Allow-Methods', '*');
      headers = headers.append('Access-Control-Allow-Credentials', '*');
      headers = headers.append('Access-Control-Max-Age', '86400');
      headers = headers.append('Content-Type', 'application/json');
      headers = headers.append('Access-Control-Expose-Headers', 'Authorization');

      const params = new HttpParams()
        .append('username_login', email)
        .append('password_login', password)
        .append('action', 'login');
      return this.httpClient.request('GET', environment.apiUrl, {responseType: 'json', params, headers});
    }

    logout() {
        localStorage.clear();
        this.router.navigate(['/cpanel/login']);
    }

}
