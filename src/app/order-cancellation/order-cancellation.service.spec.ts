import { TestBed } from '@angular/core/testing';

import { OrderCancellationService } from './order-cancellation.service';

describe('OrderCancellationService', () => {
  let service: OrderCancellationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderCancellationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
