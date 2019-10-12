import { Component, OnInit, Input } from '@angular/core';
import { ContentService } from '../../services/content.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-upper-component',
  templateUrl: './upper-component.component.html',
  styleUrls: ['./upper-component.component.scss']
})
export class UpperComponentComponent implements OnInit {

  @Input() titleAr: string;
  @Input() titleEn: string;

  public aboutHeight: any;
  public sixthPageAr = '';
  public sixthPageEn = '';

  constructor(public contentService: ContentService, public languageService: LanguageService) {
     this.aboutHeight = (window.innerHeight) * ( 2 / 3) + 'px';
  }

  ngOnInit() {
    this.sixthPageAr = this.titleAr;
    this.sixthPageEn = this.titleEn;
    if (this.sixthPageAr === undefined) {
      this.contentService.hasPage().subscribe( data => {
        this.sixthPageAr = data[data.length - 1].payload.doc.data()["title_Ar"];
        this.sixthPageEn = data[data.length - 1].payload.doc.data()["title_En"];
      });
    }
  }

}
