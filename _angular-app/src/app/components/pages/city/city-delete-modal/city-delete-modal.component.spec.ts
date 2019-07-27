import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityDeleteModalComponent } from './city-delete-modal.component';

describe('CityDeleteModalComponent', () => {
  let component: CityDeleteModalComponent;
  let fixture: ComponentFixture<CityDeleteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityDeleteModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
