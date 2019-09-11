import {environment} from '../../environments/environment';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient, HttpParams } from '@angular/common/http';

export class LanguageService {

    constructor(public httpClient: HttpClient, public translate: TranslateService) {}

    getCurrentLanguage() {
        if (localStorage.getItem('language') != null) {
            return localStorage.getItem('language');
        } else {
            localStorage.setItem('language', 'ar');
            return 'ar';
        }
    }

    changeLanguage(language) {
        localStorage.setItem('language', language);
        this.translate.use(language);
    }

}
