import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../services/content.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-home',
  templateUrl: './edit-home.component.html',
  styleUrls: ['./edit-home.component.scss']
})
export class EditHomeComponent implements OnInit {

  public sliders;
  public sliders2 = [];
  public features;
  public features2 = [];
  public services;
  public services2 = [];
  public portfolio;
  public portfolio2 = [];
  public company;

  constructor(public contentService: ContentService, public router: Router) {
    this.initData();
  }

  ngOnInit() {
  }

  initData() {
    this.contentService.getSlider().subscribe( data => {
      this.sliders = data;
      this.sliders2 = [];
      for(let index = 0;index < this.sliders.length;index++) {
        this.sliders2.push(this.sliders[index].payload.doc.data());
      }
    });
    this.contentService.getFeatures().subscribe( data => {
      this.features = data;
      this.features2 = [];
      for(let index = 0;index < this.features.length;index++) {
        this.features2.push(this.features[index].payload.doc.data());
      }
    });
    this.contentService.getTopServices().subscribe( data => {
      this.services = data;
      this.services2 = [];
      for(let index = 0;index < this.services.length;index++) {
        this.services2.push(this.services[index].payload.doc.data());
      }
    });
    this.contentService.getTopPortfolio().subscribe( data => {
      this.portfolio = data;
      this.portfolio2 = [];
      for(let index = 0;index < this.portfolio.length;index++) {
        this.portfolio2.push(this.portfolio[index].payload.doc.data());
      }
    });
    this.contentService.getCompany().subscribe( data => {
      this.company = data[0];
    });
  }

  updateSliders(index) {
    this.router.navigate(['/cpanel/update_slider'], { queryParams: {
      id: this.sliders[index].payload.doc.id,
      title_Ar: this.sliders2[index].title_Ar,
      title_En: this.sliders2[index].title_En,
      subtitle_Ar: this.sliders2[index].subtitle_Ar,
      subtitle_En: this.sliders2[index].subtitle_En,
      image: this.sliders2[index].image } });
  }

  deleteSliders(index) {
    this.contentService.deleteSlider(this.sliders[index].payload.doc.id);
  }

  updateTopServices(index) {
    this.router.navigate(['/cpanel/update_top_services'], { queryParams: {
      id: this.services[index].payload.doc.id,
      title_Ar: this.services2[index].title_Ar,
      title_En: this.services2[index].title_En,
      image: this.services2[index].image} });
  }

  updatePortfolio(index) {
    this.router.navigate(['/cpanel/update_top_portfolio'], { queryParams: {
      id: this.portfolio[index].payload.doc.id,
      title_Ar: this.portfolio2[index].title_Ar,
      title_En: this.portfolio2[index].title_En,
      tag_Ar: this.portfolio2[index].tag_Ar,
      tag_En: this.portfolio2[index].tag_En,
      image: this.portfolio2[index].image} });
  }

  updateFeatures(index) {
    this.router.navigate(['/cpanel/update_features'], { queryParams: {
      id: this.features[index].payload.doc.id,
      title_Ar: this.features2[index].title_Ar,
      title_En: this.features2[index].title_En,
      subtitle_Ar: this.features2[index].subtitle_Ar,
      subtitle_En: this.features2[index].subtitle_En,
      image: this.features2[index].image } });
  }

  addFeature() {
    this.router.navigateByUrl('/cpanel/add_features');
  }

  removeFeatures(index) {
    this.contentService.removeFeatures(this.features[index].payload.doc.id);
  }

  updateCompany(Title, KeyEn, ValueEn, KeyAr, ValueAr) {
    this.router.navigate(['/cpanel/update_company'], { queryParams: {
      title: Title,
      keyEn: KeyEn,
      valueEn: ValueEn,
      keyAr: KeyAr,
      valueAr: ValueAr } });
  }

}
