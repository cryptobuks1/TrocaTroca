import { TestBed } from '@angular/core/testing';

import { StateHttpService } from './state-http.service';

describe('StateHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StateHttpService = TestBed.get(StateHttpService);
    expect(service).toBeTruthy();
  });
});
