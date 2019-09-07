import {environment} from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';

export class AuthService {

    constructor(public httpClient: HttpClient) {}

    login(email: string, password: string) {
        const params = new HttpParams()
            .append('email', email)
            .append('password', password)
            .append('action', 'login');
        return this.httpClient.request('GET', environment.apiUrl, {responseType: 'json', params});
    }

}
