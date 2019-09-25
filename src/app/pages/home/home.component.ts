import { Component, OnInit } from '@angular/core';
import {faArrowCircleLeft, faShuttleVan} from '@fortawesome/free-solid-svg-icons';
import { ContactService } from '../../services/contact.service';
import { ContentService } from '../../services/content.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  faCoffee = faShuttleVan;
  arrow = faArrowCircleLeft;
  myInnerHeight: any;
  features = [];
  public company = null;
  public senderName = ''; public senderEmail = ''; public senderMessage = '';

  constructor(public contactService: ContactService, public contentService: ContentService, public languageService: LanguageService) {
    if (window.innerWidth >= 800) {
      this.myInnerHeight = (window.innerHeight) + 'px';
    } else {
      this.myInnerHeight = (window.innerHeight * 25 / 100) + 'px';
    }
    this.initData();
  }

  initData() {
    this.contentService.getFeatures().subscribe(data => {
      this.features = data;
    });
    this.contentService.getCompany().subscribe(data => {
      this.company = data[0];
      console.log(this.company);
    });
  }

  ngOnInit() {
  }

  sendMessage(name, email, message) {
    if (name !== '' && email !== '' && message !== '') {
      this.contactService.sendMessage(name, email, message);
      this.senderName = '';
      this.senderEmail = '';
      this.senderMessage = '';
    } else {
      alert('قم بإدخال كل البيانات');
    }
  }

}
