import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorNewModalComponent } from './sector-new-modal.component';

describe('SectorNewModalComponent', () => {
  let component: SectorNewModalComponent;
  let fixture: ComponentFixture<SectorNewModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectorNewModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectorNewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
