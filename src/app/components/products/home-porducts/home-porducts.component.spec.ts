import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePorductsComponent } from './home-porducts.component';

describe('HomePorductsComponent', () => {
  let component: HomePorductsComponent;
  let fixture: ComponentFixture<HomePorductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePorductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePorductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
