import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngbd-carousel-basic',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  subtitle = `
  ابجد هوز ابجد هوز ابجد هوز ابجد هوز ابجد هوز ابجد هوز ابجد هوز ابجد هوز

  ابجد هوز ابجد هوز ابجد هوز ابجد هوز ابجد هوز ابجد هوز ابجد هوز ابجد هوز ابجد هوز ابجد هوز

  ابجد هوز ابجد هوز ابجد هوز ابجد هوز ابجد هوز ابجد هوز ابجد هوز ابجد هوز
  `;

  max_chars;

  myInnerHeight: any;
  images = [
    '../../../assets/images/background2.jpg',
    '../../../assets/images/background2.jpg',
    '../../../assets/images/background2.jpg',
  ];

  constructor() {
    if(window.innerWidth >= 800){
      this.myInnerHeight = (window.innerHeight) + 'px';
      this.max_chars = 200;
    }else{
      this.max_chars = 75;
      this.myInnerHeight = (window.innerHeight*25/100) + 'px';
    }
  }

  ngOnInit() {
  }

}
