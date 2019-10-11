import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSixthPageComponent } from './edit-sixth-page.component';

describe('EditSixthPageComponent', () => {
  let component: EditSixthPageComponent;
  let fixture: ComponentFixture<EditSixthPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSixthPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSixthPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
