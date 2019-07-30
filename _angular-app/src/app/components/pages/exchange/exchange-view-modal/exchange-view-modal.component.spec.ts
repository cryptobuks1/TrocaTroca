import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeViewModalComponent } from './exchange-view-modal.component';

describe('ExchangeViewModalComponent', () => {
  let component: ExchangeViewModalComponent;
  let fixture: ComponentFixture<ExchangeViewModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangeViewModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeViewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
