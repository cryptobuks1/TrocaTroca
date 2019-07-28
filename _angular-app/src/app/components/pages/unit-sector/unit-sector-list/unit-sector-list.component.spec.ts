import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitSectorListComponent } from './unit-sector-list.component';

describe('UnitSectorListComponent', () => {
  let component: UnitSectorListComponent;
  let fixture: ComponentFixture<UnitSectorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitSectorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitSectorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
