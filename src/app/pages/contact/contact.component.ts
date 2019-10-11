import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public messages;
  public messages2 = [];
  constructor(public contactService: ContactService) {
    this.contactService.getMessages().subscribe(data => {
      this.messages = data;
      this.messages2 = [];
      for(let i=0;i<this.messages.length;i++) {
        this.messages2.push(this.messages[i].payload.doc.data());
      }
    });
   }

  ngOnInit() {

  }

  remove(index) {
    this.contactService.removeMessage(this.messages[index].payload.doc.id);
  }

}
