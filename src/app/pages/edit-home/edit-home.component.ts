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
  public features;
  public features2;
  public services;
  public portfolio;
  public company;

  constructor(public contentService: ContentService, public router: Router) {
    this.initData();
  }

  ngOnInit() {
  }

  initData() {
    this.contentService.getSlider().subscribe( data => {
      this.sliders = data;
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
    });
    this.contentService.getTopPortfolio().subscribe( data => {
      this.portfolio = data;
    });
    this.contentService.getCompany().subscribe( data => {
      this.company = data[0];
    });
  }

  updateFeatures(index) {
    this.router.navigate(['/cpanel/update_features'], { queryParams: {
      id: this.features[index].payload.doc.id,
      title_Ar: this.features2[index].title_Ar,
      title_En: this.features2[index].title_En,
      subtitle_Ar: this.features2[index].subtitle_Ar,
      subtitle_En: this.features2[index].subtitle_En } });
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
