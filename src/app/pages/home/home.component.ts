import { Component, OnInit } from '@angular/core';
import {faArrowCircleLeft, faShuttleVan} from '@fortawesome/free-solid-svg-icons';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  faCoffee = faShuttleVan;
  arrow = faArrowCircleLeft;
  myInnerHeight: any;
  innerWidth = 800;
  public senderName = ''; public senderEmail = ''; public senderMessage = '';

  constructor(public contactService: ContactService) {
    if(window.innerWidth >= 800){
      this.myInnerHeight = (window.innerHeight) + 'px';
    }else{
      this.myInnerHeight = (window.innerHeight*25/100) + 'px';
    }
  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }

  sendMessage(name, email, message) {
    if (name !== '' && email !== '' && message !== '') {
      this.contactService.sendMessage(name, email, message).subscribe(result => {
        this.senderName = '';
        this.senderEmail = '';
        this.senderMessage = '';
      });
    } else {
      alert('قم بإدخال كل البيانات');
    }
  }

}
