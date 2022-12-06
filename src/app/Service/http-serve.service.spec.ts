import { TestBed } from '@angular/core/testing';

import { HttpServeService } from './http-serve.service';

describe('HttpServeService', () => {
  let service: HttpServeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpServeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
