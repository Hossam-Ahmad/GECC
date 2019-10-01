import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.scss']
})
export class UpdateCompanyComponent implements OnInit {

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
      const params = {};
      if (this.ValueAr !== '') {
        params['keyAr'] = this.KeyAr;
        params['valueAr'] = this.ValueAr;
      }
      params['keyEn'] = this.KeyEn;
      params['valueEn'] = this.ValueEn;
      this.contentService.updateCompany('WUgnGd4w3OVVADBNNZps', params);
      this.router.navigateByUrl('/cpanel/edit_home');
  }

}
