import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-sixth-page',
  templateUrl: './update-sixth-page.component.html',
  styleUrls: ['./update-sixth-page.component.scss']
})
export class UpdateSixthPageComponent implements OnInit {

  public id;
  public title_Ar = '';
  public title_En = '';
  public subtitle_Ar = '';
  public subtitle_En = '';
  public image = '';

  constructor(public contentService: ContentService, public route: ActivatedRoute, public router: Router) {
    this.route.queryParams.subscribe(params => {
      this.title_Ar = params['title_Ar'];
      this.title_En = params['title_En'];
      this.subtitle_Ar = params['subtitle_Ar'];
      this.subtitle_En = params['subtitle_En'];
      this.image = params['image'];
      this.id = params['id'];
    });
   }

  ngOnInit() {
  }

  onUploaded(url: string) {
    this.image = url;
  }

  update() {
    if (this.title_Ar !== '' && this.title_En !== '' && this.subtitle_Ar !== '' && this.subtitle_En !== '' && this.image !== '') {
      const Update = {};
      Update['title_Ar'] = this.title_Ar;
      Update['title_En'] = this.title_En;
      Update['subtitle_Ar'] = this.subtitle_Ar;
      Update['subtitle_En'] = this.subtitle_En;
      Update['image'] = this.image;
      this.contentService.updateSixthPage(this.id, Update);
      this.router.navigateByUrl('/cpanel/edit_pagee');
    } else {
      alert('ادخل جميع البيانات');
    }
  }

}
