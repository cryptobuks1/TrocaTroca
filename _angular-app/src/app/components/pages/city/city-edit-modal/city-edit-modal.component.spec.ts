import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityEditModalComponent } from './city-edit-modal.component';

describe('CityEditModalComponent', () => {
  let component: CityEditModalComponent;
  let fixture: ComponentFixture<CityEditModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityEditModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
