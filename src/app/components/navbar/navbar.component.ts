import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  status = 'home';

  clickEvent(e) {
      this.status = e;
  }

  constructor() { }

  ngOnInit() {
  }

}
