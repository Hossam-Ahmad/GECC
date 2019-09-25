import {environment} from '../../environments/environment';
import { HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { formatDate } from '@angular/common';
@Injectable()
export class ContactService {

    constructor(public httpClient: HttpClient, public authService: AuthService, public fs: AngularFirestore) {}

    getMessages() {
        return this.fs.collection('contacts').valueChanges();
    }

    sendMessage(senderName, senderEmail, senderMessage) {
        const now = new Date();
        this.fs.collection('contacts').add({
            name : senderName,
            email : senderEmail,
            datetime : formatDate(now, 'dd/MM/yyyy hh:mm:ss a', 'en-US'),
            message : senderMessage
        });
    }

}
