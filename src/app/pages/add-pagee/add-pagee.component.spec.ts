import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPageeComponent } from './add-pagee.component';

describe('AddPageeComponent', () => {
  let component: AddPageeComponent;
  let fixture: ComponentFixture<AddPageeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPageeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPageeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
