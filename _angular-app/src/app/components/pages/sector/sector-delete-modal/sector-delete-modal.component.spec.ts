import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorDeleteModalComponent } from './sector-delete-modal.component';

describe('SectorDeleteModalComponent', () => {
  let component: SectorDeleteModalComponent;
  let fixture: ComponentFixture<SectorDeleteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectorDeleteModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectorDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
