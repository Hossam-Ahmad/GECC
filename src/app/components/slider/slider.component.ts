import { Component, OnInit  } from '@angular/core';
import { ContentService } from '../../services/content.service';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'ngbd-carousel-basic',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {

  myInnerHeight: any;
  public sliders = [];

  constructor(public contentService: ContentService, public languageService: LanguageService) {
    this.getSlider();
    if (window.innerWidth >= 800) {
      this.myInnerHeight = (window.innerHeight) + 'px';
    } else {
      this.myInnerHeight = (window.innerHeight * 25 / 100) + 'px';
    }
  }

  ngOnInit() {

  }

  getSlider() {
    this.contentService.getSlider().subscribe(data => {
      this.sliders = data;
    });
  }

}
