import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FurnitureManagementComponent } from './furniture-management.component';

describe('FurnitureManagementComponent', () => {
  let component: FurnitureManagementComponent;
  let fixture: ComponentFixture<FurnitureManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FurnitureManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FurnitureManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
