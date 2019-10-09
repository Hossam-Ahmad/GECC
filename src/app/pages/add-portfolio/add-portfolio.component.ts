import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-portfolio',
  templateUrl: './add-portfolio.component.html',
  styleUrls: ['./add-portfolio.component.scss']
})
export class AddPortfolioComponent implements OnInit {

  public title_Ar = '';
  public title_En = '';
  public tag_Ar = '';
  public tag_En = '';
  public image1 = '';
  public image2 = '';
  public image3 = '';
  public image4 = '';

  constructor(public contentService: ContentService, public router: Router) { }

  ngOnInit() {
  }

  onUploaded1(url: string) {
    this.image1 = url;
  }

  onUploaded2(url: string) {
    this.image2 = url;
  }

  onUploaded3(url: string) {
    this.image3 = url;
  }

  onUploaded4(url: string) {
    this.image4 = url;
  }

  add() {
    if (this.title_Ar !== '' && this.title_En !== '' && this.tag_Ar !== '' && this.tag_En !== '') {
      const Update = {};
      Update['title_Ar'] = this.title_Ar;
      Update['title_En'] = this.title_En;
      Update['tag_Ar'] = this.tag_Ar;
      Update['tag_En'] = this.tag_En;
      Update['image1'] = this.image1 === undefined ? '' : this.image1;
      Update['image2'] = this.image2 === undefined ? '' : this.image2;
      Update['image3'] = this.image3 === undefined ? '' : this.image3;
      Update['image4'] = this.image4 === undefined ? '' : this.image4;
      this.contentService.addPortfolio(Update);
      this.router.navigateByUrl('/cpanel/edit_portfolio');
    } else {
      alert('ادخل جميع البيانات');
    }
  }

}
