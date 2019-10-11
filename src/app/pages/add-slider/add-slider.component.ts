import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-slider',
  templateUrl: './add-slider.component.html',
  styleUrls: ['./add-slider.component.scss']
})
export class AddSliderComponent implements OnInit {

  public title_Ar;
  public title_En;
  public subtitle_Ar;
  public subtitle_En;
  public image;

  constructor(public contentService: ContentService, public router: Router) { }

  ngOnInit() {
  }

  onUploaded(url: string) {
    this.image = url;
  }

  add() {
    if (this.title_Ar !== '' && this.title_En !== '' && this.subtitle_Ar !== '' && this.subtitle_En !== '') {
      const Update = {};
      Update['title_Ar'] = this.title_Ar;
      Update['title_En'] = this.title_En;
      Update['subtitle_Ar'] = this.subtitle_Ar;
      Update['subtitle_En'] = this.subtitle_En;
      Update['image'] = this.image === undefined ? '' : this.image;
      this.contentService.addSlider(Update);
      this.router.navigateByUrl('/cpanel/edit_home');
    } else {
      alert('ادخل جميع البيانات');
    }
  }

}
