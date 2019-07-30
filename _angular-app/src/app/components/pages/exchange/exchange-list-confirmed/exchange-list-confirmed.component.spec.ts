import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeListConfirmedComponent } from './exchange-list-confirmed.component';

describe('ExchangeListConfirmedComponent', () => {
  let component: ExchangeListConfirmedComponent;
  let fixture: ComponentFixture<ExchangeListConfirmedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangeListConfirmedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeListConfirmedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
