import { TestBed } from '@angular/core/testing';

import { TurnHttpService } from './turn-http.service';

describe('TurnHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TurnHttpService = TestBed.get(TurnHttpService);
    expect(service).toBeTruthy();
  });
});
