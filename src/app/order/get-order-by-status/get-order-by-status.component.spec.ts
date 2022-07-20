import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetOrderByStatusComponent } from './get-order-by-status.component';

describe('GetOrderByStatusComponent', () => {
  let component: GetOrderByStatusComponent;
  let fixture: ComponentFixture<GetOrderByStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetOrderByStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetOrderByStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
