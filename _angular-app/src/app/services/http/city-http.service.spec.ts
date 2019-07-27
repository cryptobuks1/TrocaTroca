import { TestBed } from '@angular/core/testing';

import { CityHttpService } from './city-http.service';

describe('CityHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CityHttpService = TestBed.get(CityHttpService);
    expect(service).toBeTruthy();
  });
});
