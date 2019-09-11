import { Component, OnInit } from '@angular/core';
import {faArrowCircleLeft, faShuttleVan} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  faCoffee = faShuttleVan;
  arrow = faArrowCircleLeft;
  myInnerHeight: any;

  constructor() {
    this.myInnerHeight = (window.innerHeight) + 'px';
  }

  ngOnInit() {
  }

}
