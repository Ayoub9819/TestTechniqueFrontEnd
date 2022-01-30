import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMangagementComponent } from './product-mangagement.component';

describe('ProductMangagementComponent', () => {
  let component: ProductMangagementComponent;
  let fixture: ComponentFixture<ProductMangagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductMangagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductMangagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
