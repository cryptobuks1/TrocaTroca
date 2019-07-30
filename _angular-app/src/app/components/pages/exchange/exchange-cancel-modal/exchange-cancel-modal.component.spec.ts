import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeCancelModalComponent } from './exchange-cancel-modal.component';

describe('ExchangeCancelModalComponent', () => {
  let component: ExchangeCancelModalComponent;
  let fixture: ComponentFixture<ExchangeCancelModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangeCancelModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeCancelModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
