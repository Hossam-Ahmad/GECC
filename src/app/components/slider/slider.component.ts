import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngbd-carousel-basic',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  myInnerHeight: any;
  images = [
    '../../../assets/images/background2.jpg',
    '../../../assets/images/background2.jpg',
    '../../../assets/images/background2.jpg',
  ];

  constructor() {
    if(window.innerWidth >= 800){
      this.myInnerHeight = (window.innerHeight) + 'px';
    }else{
      this.myInnerHeight = (window.innerHeight*25/100) + 'px';
    }
    // this.myInnerHeight = (window.innerHeight - 74) + 'px';
  }

  ngOnInit() {
  }

}
