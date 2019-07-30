import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeNewModalComponent } from './exchange-new-modal.component';

describe('ExchangeNewModalComponent', () => {
  let component: ExchangeNewModalComponent;
  let fixture: ComponentFixture<ExchangeNewModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangeNewModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeNewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
