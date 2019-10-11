import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../services/content.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-sixth-page',
  templateUrl: './edit-sixth-page.component.html',
  styleUrls: ['./edit-sixth-page.component.scss']
})
export class EditSixthPageComponent implements OnInit {

  public services;
  public services2 = [];
  public title_Ar = '';

  constructor(public contentService: ContentService, public router: Router) {
    this.initData();
  }

  ngOnInit() {
  }

  initData() {
    this.contentService.hasPage().subscribe( data => {
      this.services = data;
      this.services2 = [];
      for (let index = 0; index < this.services.length - 1; index++) {
        this.services2.push(this.services[index].payload.doc.data());
      }
      this.title_Ar = this.services[this.services.length - 1].payload.doc.data()['title_Ar'];
    });
  }

  update(index) {
    this.router.navigate(['/cpanel/update_pagee'], { queryParams: {
      title_Ar: this.services2[index].title_Ar,
      title_En: this.services2[index].title_En,
      subtitle_Ar: this.services2[index].subtitle_Ar,
      subtitle_En: this.services2[index].subtitle_En,
      image : this.services2[index].image,
      id: this.services[index].payload.doc.id } });
  }

  remove(index) {
    this.contentService.removeSixthPageItem(this.services[index].payload.doc.id);
  }

  addService() {
    this.router.navigateByUrl('/cpanel/add_pagee');
  }

}
