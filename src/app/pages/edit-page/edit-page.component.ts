import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {

  public sliders;
  public features;
  public services;
  public portfolio;
  public company;


  constructor(public contentService: ContentService) {
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

}
