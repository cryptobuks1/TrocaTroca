import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeAuthorizeModalComponent } from './exchange-authorize-modal.component';

describe('ExchangeAuthorizeModalComponent', () => {
  let component: ExchangeAuthorizeModalComponent;
  let fixture: ComponentFixture<ExchangeAuthorizeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangeAuthorizeModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeAuthorizeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
