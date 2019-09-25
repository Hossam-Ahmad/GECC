import { TranslateService } from '@ngx-translate/core';
import { Injectable } from '@angular/core';

@Injectable()
export class LanguageService {

    constructor(public translate: TranslateService) {}

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
