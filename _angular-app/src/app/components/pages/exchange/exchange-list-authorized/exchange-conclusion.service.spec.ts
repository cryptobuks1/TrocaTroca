import { TestBed } from '@angular/core/testing';

import { ExchangeConclusionService } from './exchange-conclusion.service';

describe('ExchangeConclusionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExchangeConclusionService = TestBed.get(ExchangeConclusionService);
    expect(service).toBeTruthy();
  });
});
