import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorSearchFormComponent } from './sector-search-form.component';

describe('SectorSearchFormComponent', () => {
  let component: SectorSearchFormComponent;
  let fixture: ComponentFixture<SectorSearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectorSearchFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectorSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
