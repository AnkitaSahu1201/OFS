import { TestBed } from '@angular/core/testing';

import { CustomershoppingService } from './customershopping.service';

describe('CustomershoppingService', () => {
  let service: CustomershoppingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomershoppingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
