import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-update-services',
  templateUrl: './update-services.component.html',
  styleUrls: ['./update-services.component.scss']
})
export class UpdateServicesComponent implements OnInit {

  public id;
  public title_Ar = '';
  public title_En = '';
  public details_Ar = '';
  public details_En = '';

  constructor(public contentService: ContentService, public route: ActivatedRoute, public router: Router) {
    this.route.queryParams.subscribe(params => {
      this.title_Ar = params['title_Ar'];
      this.title_En = params['title_En'];
      this.details_Ar = params['details_Ar'];
      this.details_En = params['details_En'];
      this.id = params['id'];
    });
   }

  ngOnInit() {
  }

  update() {
    if (this.title_Ar !== '' && this.title_En !== '' && this.details_Ar !== '' && this.details_En !== '') {
      const Update = {};
      Update['title_Ar'] = this.title_Ar;
      Update['title_En'] = this.title_En;
      Update['details_Ar'] = this.details_Ar;
      Update['details_En'] = this.details_En;
      this.contentService.updateServices(this.id, Update);
      this.router.navigateByUrl('/cpanel/edit_services');
    } else {
      alert('ادخل جميع البيانات');
    }
  }

}
