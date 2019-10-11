import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSixthPageComponent } from './update-sixth-page.component';

describe('UpdateSixthPageComponent', () => {
  let component: UpdateSixthPageComponent;
  let fixture: ComponentFixture<UpdateSixthPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateSixthPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSixthPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
