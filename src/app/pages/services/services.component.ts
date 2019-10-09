import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../services/content.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  images = [
    "../../../assets/images/servisePic.png",
    "../../../assets/images/services.png",
    "../../../assets/images/servPic2.png",
    "../../../assets/images/servPic3.png",
  ];
  services = [];
  services2 = [];

  constructor(public contentService: ContentService, public languageService: LanguageService) {
    this.contentService.getServices().subscribe(data => {
      this.services = data;
      this.services2 = [];
      for (let index = 0; index < this.services.length; index++) {
        this.services2.push(this.services[index].payload.doc.data());
      }
    });
  }

  ngOnInit() {

  }

}
