import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaCrustsComponent } from './pizza-crusts.component';

describe('PizzaCrustsComponent', () => {
  let component: PizzaCrustsComponent;
  let fixture: ComponentFixture<PizzaCrustsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PizzaCrustsComponent]
    });
    fixture = TestBed.createComponent(PizzaCrustsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
