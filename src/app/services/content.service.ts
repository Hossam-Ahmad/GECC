import {environment} from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ContentService {

    constructor(public httpClient: HttpClient) {}

}
