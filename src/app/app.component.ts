import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'website';

  constructor(public router: Router, public translate: TranslateService) {
    translate.addLangs(['ar', 'en']);
    translate.setDefaultLang('ar');
    translate.use('ar');
  }
}
