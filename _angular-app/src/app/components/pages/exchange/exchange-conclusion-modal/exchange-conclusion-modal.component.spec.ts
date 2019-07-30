import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeConclusionModalComponent } from './exchange-conclusion-modal.component';

describe('ExchangeConclusionModalComponent', () => {
  let component: ExchangeConclusionModalComponent;
  let fixture: ComponentFixture<ExchangeConclusionModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangeConclusionModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeConclusionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
