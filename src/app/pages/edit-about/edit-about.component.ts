import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../services/content.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-about',
  templateUrl: './edit-about.component.html',
  styleUrls: ['./edit-about.component.scss']
})
export class EditAboutComponent implements OnInit {

  public about;

  constructor(public contentService: ContentService, public router: Router) {
    this.initData();
  }

  ngOnInit() {
  }

  initData() {
    this.contentService.getAbout().subscribe( data => {
      this.about = data[0];
    });
  }

  edit(Title, KeyEn, ValueEn, KeyAr, ValueAr) {
    this.router.navigate(['/cpanel/update_about'], { queryParams: {
      title: Title,
      keyEn: KeyEn,
      valueEn: ValueEn,
      keyAr: KeyAr,
      valueAr: ValueAr } });
  }

}
