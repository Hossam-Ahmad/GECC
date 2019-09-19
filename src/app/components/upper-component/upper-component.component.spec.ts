import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpperComponentComponent } from './upper-component.component';

describe('UpperComponentComponent', () => {
  let component: UpperComponentComponent;
  let fixture: ComponentFixture<UpperComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpperComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpperComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
