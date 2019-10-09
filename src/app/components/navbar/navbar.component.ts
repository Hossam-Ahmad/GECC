import { Component, OnInit, ViewChild } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { Router } from '@angular/router';
import { NavbarComponent as navmdb } from '../../../../node_modules/angular-bootstrap-md/lib/free/navbars/navbar.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @ViewChild('navbarid', {static: false}) navRef: navmdb;

  status = '/';
  language = '';

  clickEvent(e) {
      this.status = e;
      if (this.navRef.shown) {
        this.navRef.toggle();
      }
  }

  constructor(public translate: TranslateService, public router: Router) { }

  ngOnInit() {
    this.status = this.router.url;
    this.language = localStorage.getItem('language');
  }

  changeLanguage(language) {
    this.language = language;
    this.translate.use(language);
    localStorage.setItem('language', language);
    if (this.navRef.shown) {
      this.navRef.toggle();
    }
  }

  contact() {
    if (this.navRef.shown) {
      this.navRef.toggle();
    }
    const el: HTMLElement|null = document.getElementById('contact');
    if (el) {
      setTimeout(() =>
        el.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'}), 0);
    }
  }

  login() {

  }

}
