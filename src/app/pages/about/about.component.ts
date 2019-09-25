import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  aboutHeight: any;
   items = [' ضمان نتائج منصفة ومعتمدة ودقيقة وواضحة ذات شفافيه ومتماسكة ومتواصلة للاختبارات وعمليات المعمل .',
   'نقوم باستخدام أشخاص مهنيين ذو اختصاص وطرق اختبار مطابقة حسب المعايير المحلية والدولية .',
   ' ضمان نتائج منصفة ومعتمدة ودقيقة وواضحة ذات شفافيه ومتماسكة ومتواصلة للاختبارات وعمليات المعمل .',
   'نقوم باستخدام أشخاص مهنيين ذو اختصاص وطرق اختبار مطابقة حسب المعايير المحلية والدولية .'];

  constructor() {
    this.aboutHeight = (window.innerHeight) * ( 2 / 3) + 'px';
  }

  ngOnInit() {
  }

}