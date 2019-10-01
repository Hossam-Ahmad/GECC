import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-update-about',
  templateUrl: './update-about.component.html',
  styleUrls: ['./update-about.component.scss']
})
export class UpdateAboutComponent implements OnInit {

  public Title;
  public KeyEn;
  public ValueEn = '';
  public KeyAr;
  public ValueAr = '';

  constructor(public route: ActivatedRoute, public router: Router, public contentService: ContentService) {
    this.route.queryParams.subscribe(params => {
      this.Title = params['title'];
      this.KeyEn = params['keyEn'];
      this.ValueEn = params['valueEn'];
      this.KeyAr = params['keyAr'];
      this.ValueAr = params['valueAr'];
    });
  }

  ngOnInit() {
  }

  update() {
    if (this.ValueAr !== '' && this.ValueEn !== '') {
      const params = {};
      params['keyEn'] = this.KeyEn;
      params['keyAr'] = this.KeyAr;
      params['valueEn'] = this.ValueEn;
      params['valueAr'] = this.ValueAr;

      this.contentService.updateAbout('N92b68l08EAHjC2XGXAr', params);
      this.router.navigateByUrl('/cpanel/edit_about');
    } else {
      alert('قم بإدخال كل البيانات');
    }
  }

}
