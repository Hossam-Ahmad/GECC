import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portoflio',
  templateUrl: './portoflio.component.html',
  styleUrls: ['./portoflio.component.scss']
})
export class PortoflioComponent implements OnInit {

  aboutHeight: any;
  constructor() {this.aboutHeight = (window.innerHeight) * ( 2 / 3 ) + 'px'; }

  ngOnInit() {
  }

}
