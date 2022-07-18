import { TestBed } from '@angular/core/testing';

import { FurnitureManagementService } from './furniture-management.service';

describe('FurnitureManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FurnitureManagementService = TestBed.get(FurnitureManagementService);
    expect(service).toBeTruthy();
  });
});
