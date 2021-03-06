import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  test: Date = new Date();

  constructor(public languageService: LanguageService) { }

  ngOnInit() {
  }

}
