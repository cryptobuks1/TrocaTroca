import { TestBed } from '@angular/core/testing';

import { ChartHttpService } from './chart-http.service';

describe('ChartHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChartHttpService = TestBed.get(ChartHttpService);
    expect(service).toBeTruthy();
  });
});
