import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cpanel',
  templateUrl: './cpanel.component.html',
  styleUrls: ['./cpanel.component.scss']
})
export class CpanelComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  isLogin() {
    return this.router.url === '/cpanel/login';
  }

  isMobile() {
    return window.innerWidth < 800;
  }

}
