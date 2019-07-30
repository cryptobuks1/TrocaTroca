import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeListCadastradasComponent } from './exchange-list-cadastradas.component';

describe('ExchangeListCadastradasComponent', () => {
  let component: ExchangeListCadastradasComponent;
  let fixture: ComponentFixture<ExchangeListCadastradasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangeListCadastradasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeListCadastradasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
