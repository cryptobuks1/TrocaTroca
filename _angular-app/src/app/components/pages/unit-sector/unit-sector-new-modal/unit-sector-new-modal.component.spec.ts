import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitSectorNewModalComponent } from './unit-sector-new-modal.component';

describe('UnitSectorNewModalComponent', () => {
  let component: UnitSectorNewModalComponent;
  let fixture: ComponentFixture<UnitSectorNewModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitSectorNewModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitSectorNewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
