import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorEditModalComponent } from './sector-edit-modal.component';

describe('SectorEditModalComponent', () => {
  let component: SectorEditModalComponent;
  let fixture: ComponentFixture<SectorEditModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectorEditModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectorEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
