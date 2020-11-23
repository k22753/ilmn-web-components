import { TestBed } from '@angular/core/testing';

import { WebComponentsLibService } from './web-components-lib.service';

describe('WebComponentsLibService', () => {
  let service: WebComponentsLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebComponentsLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
