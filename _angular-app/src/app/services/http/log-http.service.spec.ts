import { TestBed } from '@angular/core/testing';

import { LogHttpService } from './log-http.service';

describe('LogHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LogHttpService = TestBed.get(LogHttpService);
    expect(service).toBeTruthy();
  });
});
