import { TestBed } from '@angular/core/testing';

import { ExchangeCancelService } from './exchange-cancel.service';

describe('ExchangeCancelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExchangeCancelService = TestBed.get(ExchangeCancelService);
    expect(service).toBeTruthy();
  });
});
