import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFurnitureByCartComponent } from './view-furniture-by-cart.component';

describe('ViewFurnitureByCartComponent', () => {
  let component: ViewFurnitureByCartComponent;
  let fixture: ComponentFixture<ViewFurnitureByCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFurnitureByCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFurnitureByCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
