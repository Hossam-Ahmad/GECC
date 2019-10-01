import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-edit-clients',
  templateUrl: './edit-clients.component.html',
  styleUrls: ['./edit-clients.component.scss']
})
export class EditClientsComponent implements OnInit {

  public clients;
  public clients2 = [];

  constructor(public contentService: ContentService) {
    this.initData();
  }

  ngOnInit() {
  }

  initData() {
    this.contentService.getClients().subscribe( data => {
      this.clients = data;
      this.clients2 = [];
      for (let index = 0; index < this.clients.length; index++) {
        this.clients2.push(this.clients[index].payload.doc.data());
      }
    });
  }

  onUploaded(url: string) {
    this.contentService.addClient(url);
  }

  remove(index) {
    this.contentService.removeClient(this.clients[index].payload.doc.id);
  }

}
