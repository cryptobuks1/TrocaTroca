import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeListAuthorizedComponent } from './exchange-list-authorized.component';

describe('ExchangeListAuthorizedComponent', () => {
  let component: ExchangeListAuthorizedComponent;
  let fixture: ComponentFixture<ExchangeListAuthorizedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangeListAuthorizedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeListAuthorizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
