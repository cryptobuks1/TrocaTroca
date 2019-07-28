import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitSearchFormComponent } from './unit-search-form.component';

describe('UnitSearchFormComponent', () => {
  let component: UnitSearchFormComponent;
  let fixture: ComponentFixture<UnitSearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitSearchFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
