import { TestBed } from '@angular/core/testing';

import { ExchangeAuthorizeService } from './exchange-authorize.service';

describe('ExchangeAuthorizeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExchangeAuthorizeService = TestBed.get(ExchangeAuthorizeService);
    expect(service).toBeTruthy();
  });
});
