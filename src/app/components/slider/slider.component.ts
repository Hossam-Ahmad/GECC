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
  public sliders2 = [];
  max_chars : number;

  constructor(public contentService: ContentService, public languageService: LanguageService) {
    this.getSlider();
    if (window.innerWidth >= 800) {
      this.myInnerHeight = (window.innerHeight) + 'px';
      this.max_chars = 200;
    } else {
      this.myInnerHeight = (window.innerHeight * 25 / 100) + 'px';
      this.max_chars = 75;
    }
  }

  ngOnInit() {

  }

  getSlider() {
    this.contentService.getSlider().subscribe(data => {
      this.sliders = data;
      this.sliders2 = [];
      for(let index = 0;index < this.sliders.length;index++) {
        this.sliders2.push(this.sliders[index].payload.doc.data());
      }
    });
  }

  maxWord(word) {
    if (word) {
      if (word.length >= this.max_chars) {
        return word.substring(0, this.max_chars) + '...';
      } else {
        return word;
      }
    }
    return '';
  }

  more() {
    const scrollToTop = window.setInterval(() => {
        const pos = window.scrollY;
        if (pos < window.innerHeight) {
            window.scrollTo(0, pos + 20); // how far to scroll on each step
        } else {
            window.clearInterval(scrollToTop);
        }
    }, 16);
}

}
