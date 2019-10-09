import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-services',
  templateUrl: './add-services.component.html',
  styleUrls: ['./add-services.component.scss']
})
export class AddServicesComponent implements OnInit {

  public title_Ar = '';
  public title_En = '';
  public details_Ar = '';
  public details_En = '';

  constructor(public contentService: ContentService, public router: Router) { }

  ngOnInit() {
  }

  add() {
    if (this.title_Ar !== '' && this.title_En !== '' && this.details_Ar !== '' && this.details_En !== '') {
      const Update = {};
      Update['title_Ar'] = this.title_Ar;
      Update['title_En'] = this.title_En;
      Update['details_Ar'] = this.details_Ar;
      Update['details_En'] = this.details_En;
      this.contentService.addServices(Update);
      this.router.navigateByUrl('/cpanel/edit_services');
    } else {
      alert('ادخل جميع البيانات');
    }
  }

}
