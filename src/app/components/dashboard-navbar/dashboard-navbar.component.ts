import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-navbar',
  templateUrl: './dashboard-navbar.component.html',
  styleUrls: ['./dashboard-navbar.component.scss']
})
export class DashboardNavbarComponent implements OnInit {

  status = '/';

  constructor(public router: Router) { }

  ngOnInit() {
    this.status = this.router.url;
  }

  clickEvent(e) {
    this.status = e;
  }

}
