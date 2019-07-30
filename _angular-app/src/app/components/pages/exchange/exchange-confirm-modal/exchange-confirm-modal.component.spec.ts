import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeConfirmModalComponent } from './exchange-confirm-modal.component';

describe('ExchangeConfirmModalComponent', () => {
  let component: ExchangeConfirmModalComponent;
  let fixture: ComponentFixture<ExchangeConfirmModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangeConfirmModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeConfirmModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
