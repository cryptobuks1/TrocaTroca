import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitNewModalComponent } from './unit-new-modal.component';

describe('UnitNewModalComponent', () => {
  let component: UnitNewModalComponent;
  let fixture: ComponentFixture<UnitNewModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitNewModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitNewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
