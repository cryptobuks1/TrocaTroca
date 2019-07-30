import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeSearchFormComponent } from './exchange-search-form.component';

describe('ExchangeSearchFormComponent', () => {
  let component: ExchangeSearchFormComponent;
  let fixture: ComponentFixture<ExchangeSearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangeSearchFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
