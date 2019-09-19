import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upper-component',
  templateUrl: './upper-component.component.html',
  styleUrls: ['./upper-component.component.scss']
})
export class UpperComponentComponent implements OnInit {

  aboutHeight: any;
  constructor() { this.aboutHeight = (window.innerHeight) * ( 2 / 3) + 'px'; }

  ngOnInit() {
  }

}
