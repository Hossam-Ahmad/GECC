import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-top-services',
  templateUrl: './update-top-services.component.html',
  styleUrls: ['./update-top-services.component.scss']
})
export class UpdateTopServicesComponent implements OnInit {

  public title_Ar;
  public title_En;
  public image;
  public id;

  constructor(public contentService: ContentService, public route: ActivatedRoute, public router: Router) {
    this.route.queryParams.subscribe(params => {
      this.title_Ar = params['title_Ar'];
      this.title_En = params['title_En'];
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
    if (this.title_Ar !== '' && this.title_En !== '') {
      const Update = {};
      Update['title_Ar'] = this.title_Ar;
      Update['title_En'] = this.title_En;
      Update['image'] = this.image === undefined ? '' : this.image;
      this.contentService.updateTopServices(this.id, Update);
      this.router.navigateByUrl('/cpanel/edit_home');
    } else {
      alert('ادخل جميع البيانات');
    }
  }

}
