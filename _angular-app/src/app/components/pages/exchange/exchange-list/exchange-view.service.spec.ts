import { TestBed } from '@angular/core/testing';

import { ExchangeViewService } from './exchange-view.service';

describe('ExchangeViewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExchangeViewService = TestBed.get(ExchangeViewService);
    expect(service).toBeTruthy();
  });
});
