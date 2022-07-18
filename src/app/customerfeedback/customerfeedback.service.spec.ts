import { TestBed } from '@angular/core/testing';

import { CustomerfeedbackService } from './customerfeedback.service';

describe('CustomerfeedbackService', () => {
  let service: CustomerfeedbackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerfeedbackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
