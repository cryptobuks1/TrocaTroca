import { TestBed } from '@angular/core/testing';

import { ExchangePendingService } from './exchange-pending.service';

describe('ExchangePendingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExchangePendingService = TestBed.get(ExchangePendingService);
    expect(service).toBeTruthy();
  });
});
