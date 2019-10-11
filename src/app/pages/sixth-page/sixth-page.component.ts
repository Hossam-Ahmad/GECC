import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../services/content.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-sixth-page',
  templateUrl: './sixth-page.component.html',
  styleUrls: ['./sixth-page.component.scss']
})
export class SixthPageComponent implements OnInit {

  services = [];
  services2 = [];

  constructor(public contentService: ContentService, public languageService: LanguageService) {
    this.contentService.hasPage().subscribe( data => {
      this.services = data;
      this.services2 = [];
      for (let index = 0; index < this.services.length - 1; index++) {
        this.services2.push(this.services[index].payload.doc.data());
      }
    });
   }

  ngOnInit() {
  }

}
