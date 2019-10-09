import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../services/content.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-portoflio',
  templateUrl: './portoflio.component.html',
  styleUrls: ['./portoflio.component.scss']
})
export class PortoflioComponent implements OnInit {

  aboutHeight: any;
  public data;
  public data2 = [];
  constructor(public contentService: ContentService, public languageService: LanguageService) {
    this.aboutHeight = (window.innerHeight) * ( 2 / 3 ) + 'px';
    this.initData();
  }

  initData() {
    this.contentService.getPortfolio().subscribe(data  => {
      this.data = data;
      this.data2 = [];
      for (let index = 0; index < this.data.length; index++) {
        this.data2.push(this.data[index].payload.doc.data());
      }
    });
  }

  ngOnInit() {
  }

}
