import { TestBed } from '@angular/core/testing';

import { ExchangeHttpService } from './exchange-http.service';

describe('ExchangeHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExchangeHttpService = TestBed.get(ExchangeHttpService);
    expect(service).toBeTruthy();
  });
});
