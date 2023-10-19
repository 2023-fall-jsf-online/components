import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaGluerComponent } from './pizza-gluer.component';

describe('PizzaGluerComponent', () => {
  let component: PizzaGluerComponent;
  let fixture: ComponentFixture<PizzaGluerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PizzaGluerComponent]
    });
    fixture = TestBed.createComponent(PizzaGluerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
