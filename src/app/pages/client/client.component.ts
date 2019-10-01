import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  aboutHeight: any;
  logos = [];
  logos2 = [];
  constructor(public contentService: ContentService) {
    this.aboutHeight = (window.innerHeight) * ( 2 / 3) + 'px';
    this.contentService.getClients().subscribe(data => {
      this.logos = data;
      for (let index = 0; index < this.logos.length; index++) {
        this.logos2.push(this.logos[index].payload.doc.data());
      }
    });
  }

  ngOnInit() {
    
  }
}
