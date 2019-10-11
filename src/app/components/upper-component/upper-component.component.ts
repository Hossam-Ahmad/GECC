import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../services/content.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-upper-component',
  templateUrl: './upper-component.component.html',
  styleUrls: ['./upper-component.component.scss']
})
export class UpperComponentComponent implements OnInit {

  public aboutHeight: any;
  public sixthPageAr = '';
  public sixthPageEn = '';

  constructor(public contentService: ContentService, public languageService: LanguageService) {
     this.aboutHeight = (window.innerHeight) * ( 2 / 3) + 'px';
     this.contentService.hasPage().subscribe( data => {
      this.sixthPageAr = data[data.length - 1].payload.doc.data()["title_Ar"];
      this.sixthPageEn = data[data.length - 1].payload.doc.data()["title_En"];
    });
  }

  ngOnInit() {
  }

}
