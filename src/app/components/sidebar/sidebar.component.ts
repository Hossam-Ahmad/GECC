import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/cpanel/dashboard', title: 'الصفحات',  icon: 'dashboard', class: ''},
    { path: '/cpanel/contact', title: 'التواصل',  icon: 'person', class: ''},
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(public router: Router, public authService: AuthService) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

  isMobileMenu() {
      if (window.screen.width > 991) {
          return false;
      }
      return true;
  }

  logout() {
    this.authService.logout();
  }
}
