import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTopServicesComponent } from './update-top-services.component';

describe('UpdateTopServicesComponent', () => {
  let component: UpdateTopServicesComponent;
  let fixture: ComponentFixture<UpdateTopServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateTopServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTopServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
