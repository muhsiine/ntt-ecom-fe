import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPorductsComponent } from './add-porducts.component';

describe('AddPorductsComponent', () => {
  let component: AddPorductsComponent;
  let fixture: ComponentFixture<AddPorductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPorductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPorductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
