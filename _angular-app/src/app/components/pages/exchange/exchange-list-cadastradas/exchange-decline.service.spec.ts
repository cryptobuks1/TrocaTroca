import { TestBed } from '@angular/core/testing';

import { ExchangeDeclineService } from './exchange-decline.service';

describe('ExchangeDeclineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExchangeDeclineService = TestBed.get(ExchangeDeclineService);
    expect(service).toBeTruthy();
  });
});
