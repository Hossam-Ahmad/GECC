import {environment} from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ContactService {

    constructor(public httpClient: HttpClient, public authService: AuthService) {}

    getMessages() {
        const params = new HttpParams()
            .append('token', this.authService.getToken())
            .append('action', 'getMessages');
        return this.httpClient.request('GET', environment.apiUrl, {responseType: 'json', params});
    }

    sendMessage(senderName, senderEmail, senderMessage) {
        const params = new HttpParams()
            .append('action', 'sendMessage')
            .append('senderName', senderName)
            .append('senderEmail', senderEmail)
            .append('senderMessage', senderMessage);
        return this.httpClient.request('POST', environment.apiUrl, {responseType: 'json', params});
    }

}
