import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-top-portfolio',
  templateUrl: './update-top-portfolio.component.html',
  styleUrls: ['./update-top-portfolio.component.scss']
})
export class UpdateTopPortfolioComponent implements OnInit {

  public title_Ar;
  public title_En;
  public tag_Ar;
  public tag_En;
  public image;
  public id;

  constructor(public contentService: ContentService, public route: ActivatedRoute, public router: Router) {
    this.route.queryParams.subscribe(params => {
      this.title_Ar = params['title_Ar'];
      this.title_En = params['title_En'];
      this.tag_Ar = params['tag_Ar'];
      this.tag_En = params['tag_En'];
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
    if (this.title_Ar !== '' && this.title_En !== '' && this.tag_Ar !== '' && this.tag_En !== '') {
      const Update = {};
      Update['title_Ar'] = this.title_Ar;
      Update['title_En'] = this.title_En;
      Update['tag_Ar'] = this.tag_Ar;
      Update['tag_En'] = this.tag_En;
      Update['image'] = this.image === undefined ? '' : this.image;
      this.contentService.updateTopPortfolio(this.id, Update);
      this.router.navigateByUrl('/cpanel/edit_home');
    } else {
      alert('ادخل جميع البيانات');
    }
  }

}
