import { TestBed } from '@angular/core/testing';

import { ExchangeConfirmService } from './exchange-confirm.service';

describe('ExchangeConfirmService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExchangeConfirmService = TestBed.get(ExchangeConfirmService);
    expect(service).toBeTruthy();
  });
});
