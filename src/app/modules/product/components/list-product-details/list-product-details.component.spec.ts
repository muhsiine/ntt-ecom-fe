import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductDetailsComponent } from './list-product-details.component';

describe('ListProductDetailsComponent', () => {
  let component: ListProductDetailsComponent;
  let fixture: ComponentFixture<ListProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProductDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
