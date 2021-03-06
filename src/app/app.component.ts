import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import { ContentService } from './services/content.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'website';

  constructor(public router: Router, public translate: TranslateService, public contentService: ContentService) {
    translate.addLangs(['ar', 'en']);
    translate.setDefaultLang('ar');
    const language = localStorage.getItem('language');
    if (language == null) {
      translate.use('ar');
    } else {
      translate.use(language);
    }
  }

  onActivate(event) {
    if (!this.router.url.toString().includes('#contact')) {
      const scrollToTop = window.setInterval(() => {
        const pos = window.pageYOffset;
        if (pos > 0) {
            window.scrollTo(0, pos - 20); // how far to scroll on each step
        } else {
            window.clearInterval(scrollToTop);
        }
      }, 16);
    }
}

}
