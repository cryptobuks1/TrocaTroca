import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityNewModalComponent } from './city-new-modal.component';

describe('CityNewModalComponent', () => {
  let component: CityNewModalComponent;
  let fixture: ComponentFixture<CityNewModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityNewModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityNewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
