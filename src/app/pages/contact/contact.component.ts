import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public messages;
  constructor(public contactService: ContactService) {
    this.contactService.getMessages().subscribe(data => {
      this.messages = data;
    });
   }

  ngOnInit() {
    
  }

}
