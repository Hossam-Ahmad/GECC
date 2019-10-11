import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../services/content.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-services',
  templateUrl: './edit-services.component.html',
  styleUrls: ['./edit-services.component.scss']
})
export class EditServicesComponent implements OnInit {

  public services;
  public services2 = [];
  public showLabel = 'إظهار';
  public hideLabel = 'إخفاء';

  constructor(public contentService: ContentService, public router: Router) {
    this.initData();
  }

  ngOnInit() {
  }

  initData() {
    this.contentService.getServices().subscribe( data => {
      this.services = data;
      this.services2 = [];
      for (let index = 0; index < this.services.length; index++) {
        this.services2.push(this.services[index].payload.doc.data());
      }
    });
  }

  update(index) {
    this.router.navigate(['/cpanel/update_services'], { queryParams: {
      title_Ar: this.services2[index].title_Ar,
      title_En: this.services2[index].title_En,
      details_Ar: this.services2[index].details_Ar,
      details_En: this.services2[index].details_En,
      id: this.services[index].payload.doc.id } });
  }

  addService() {
    this.router.navigateByUrl('/cpanel/add_services');
  }

  remove(index) {
    this.contentService.removeService(this.services[index].payload.doc.id);
  }

  toggle(index) {
    if (this.services2[index].show) {
      this.contentService.hideService(this.services[index].payload.doc.id);
    } else {
      this.contentService.showService(this.services[index].payload.doc.id);
    }
  }

}
