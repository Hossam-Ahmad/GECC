import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../services/content.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-portfolio',
  templateUrl: './edit-portfolio.component.html',
  styleUrls: ['./edit-portfolio.component.scss']
})
export class EditPortfolioComponent implements OnInit {

  public portfolio;
  public portfolio2 = [];

  constructor(public contentService: ContentService, public router: Router) {
    this.initData();
  }

  ngOnInit() {
  }

  initData() {
    this.contentService.getPortfolio().subscribe( data => {
      this.portfolio = data;
      this.portfolio2 = [];
      for (let index = 0; index < this.portfolio.length; index++) {
        this.portfolio2.push(this.portfolio[index].payload.doc.data());
      }
    });
  }

  addPortfolio() {
    this.router.navigateByUrl('/cpanel/add_portfolio');
  }

  update(index) {
    this.router.navigate(['/cpanel/update_portfolio'], { queryParams: {
      title_Ar: this.portfolio2[index].title_Ar,
      title_En: this.portfolio2[index].title_En,
      tag_Ar: this.portfolio2[index].tag_Ar,
      tag_En: this.portfolio2[index].tag_En,
      image1: this.portfolio2[index].image1,
      image2: this.portfolio2[index].image2,
      image3: this.portfolio2[index].image3,
      image4: this.portfolio2[index].image4,
      id: this.portfolio[index].payload.doc.id } });
  }

  remove(index) {
    this.contentService.removePortfolio(this.portfolio[index].payload.doc.id);
  }

}
