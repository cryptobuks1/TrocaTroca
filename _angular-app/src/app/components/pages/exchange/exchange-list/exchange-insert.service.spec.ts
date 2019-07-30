import { TestBed } from '@angular/core/testing';

import { ExchangeInsertService } from './exchange-insert.service';

describe('ExchangeInsertService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExchangeInsertService = TestBed.get(ExchangeInsertService);
    expect(service).toBeTruthy();
  });
});
