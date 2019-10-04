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
  public features = [];
  public features2 = [];
  public services = [];
  public services2 = [];
  public portofolio = [];
  public portofolio2 = [];
  public imgFeatures = [
    '../../../assets/images/icon1.png',
    '../../../assets/images/icon2.png',
    '../../../assets/images/icon3.png',
    '../../../assets/images/icon4.png',
  ];
  public company = null;
  public senderName = ''; public senderEmail = ''; public senderMessage = '';
  public innerWidth = 800;
  public el;
  public el2;

  constructor(public contactService: ContactService, public contentService: ContentService, public languageService: LanguageService) {
    this.initData();
  }

  initData() {
    this.contentService.getFeatures().subscribe(data => {
      this.features = data;
      this.features2 = [];
      for(let index = 0;index < this.features.length;index++) {
        this.features2.push(this.features[index].payload.doc.data());
      }
    });
    this.contentService.getCompany().subscribe(data => {
      this.company = data[0];
    });
    this.contentService.getTopServices().subscribe(data => {
      this.services = data;
      this.services2 = [];
      for(let index = 0;index < this.services.length;index++) {
        this.services2.push(this.services[index].payload.doc.data());
      }
    });
    this.contentService.getTopPortfolio().subscribe(data => {
      this.portofolio = data;
      this.portofolio2 = [];
      for(let index = 0;index < this.portofolio.length;index++) {
        this.portofolio2.push(this.portofolio[index].payload.doc.data());
      }
    });
  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    if (window.innerWidth >= 800) {
      this.myInnerHeight = (window.innerHeight) + 'px';
    } else {
      this.el = document.getElementById('navbarid');
      this.el2 = document.getElementById('sliderbarid');
      this.myInnerHeight = this.el.getBoundingClientRect().height + this.el2.getBoundingClientRect().height + 'px';
    }
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
