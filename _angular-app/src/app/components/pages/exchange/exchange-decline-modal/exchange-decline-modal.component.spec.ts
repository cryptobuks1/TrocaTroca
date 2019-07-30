import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeDeclineModalComponent } from './exchange-decline-modal.component';

describe('ExchangeDeclineModalComponent', () => {
  let component: ExchangeDeclineModalComponent;
  let fixture: ComponentFixture<ExchangeDeclineModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangeDeclineModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeDeclineModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
