import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangePendingModalComponent } from './exchange-pending-modal.component';

describe('ExchangePendingModalComponent', () => {
  let component: ExchangePendingModalComponent;
  let fixture: ComponentFixture<ExchangePendingModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangePendingModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangePendingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
