import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../services/content.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  aboutHeight: any;
  items;
  public data;
  public targetsAr = [];
  public targetsEn = [];

  constructor(public contentService: ContentService, public languageService: LanguageService) {
    this.aboutHeight = (window.innerHeight) * ( 2 / 3) + 'px';
    this.initData();
  }

  initData() {
    this.contentService.getAbout().subscribe(data => {

      // this.about_Ar = data[0]['about_Ar'];
      // this.about_En = data[0]['about_En'];
      // this.our_message_Ar = data[0]['our_message_Ar'];
      // this.our_message_En = data[0]['our_message_En'];
      // this.our_mission_Ar = data[0]['our_mission_Ar'];
      // this.our_mission_En = data[0]['our_mission_En'];
      // this.out_vision_Ar = data[0]['out_vision_Ar'];
      // this.out_vision_En = data[0]['out_vision_En'];

      this.data = data[0];

      // Filteration targets
      this.items = data[1];
      for (const key in this.items) {
        if (key in this.items) {
          if (key.includes('Ar')) {
            this.targetsAr.push(this.items[key]);
          } else {
            this.targetsEn.push(this.items[key]);
          }
        }
      }
    });
  }

  ngOnInit() {
  }

}
