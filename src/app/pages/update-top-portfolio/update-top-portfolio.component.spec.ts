import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTopPortfolioComponent } from './update-top-portfolio.component';

describe('UpdateTopPortfolioComponent', () => {
  let component: UpdateTopPortfolioComponent;
  let fixture: ComponentFixture<UpdateTopPortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateTopPortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTopPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
