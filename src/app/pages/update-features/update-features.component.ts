import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-features',
  templateUrl: './update-features.component.html',
  styleUrls: ['./update-features.component.scss']
})
export class UpdateFeaturesComponent implements OnInit {

  public id;
  public title_Ar = '';
  public title_En = '';
  public subtitle_Ar = '';
  public subtitle_En = '';

  constructor(public contentService: ContentService, public route: ActivatedRoute, public router: Router) {
    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.title_Ar = params['title_Ar'];
      this.title_En = params['title_En'];
      this.subtitle_Ar = params['subtitle_Ar'];
      this.subtitle_En = params['subtitle_En'];
      this.id = params['id'];
    });
   }

  ngOnInit() {
  }

  update() {
    if (this.title_Ar !== '' && this.title_En !== '' && this.subtitle_Ar !== '' && this.subtitle_En !== '') {
      const Update = {};
      Update['title_Ar'] = this.title_Ar;
      Update['title_En'] = this.title_En;
      Update['subtitle_Ar'] = this.subtitle_Ar;
      Update['subtitle_En'] = this.subtitle_En;
      this.contentService.updateFeatures(this.id, Update);
      this.router.navigateByUrl('/cpanel/edit_home');
    } else {
      alert('ادخل جميع البيانات');
    }
  }

}
