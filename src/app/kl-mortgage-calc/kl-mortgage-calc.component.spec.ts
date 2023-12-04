import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KlMortgageCalcComponent } from './kl-mortgage-calc.component';

describe('KlMortgageCalcComponent', () => {
  let component: KlMortgageCalcComponent;
  let fixture: ComponentFixture<KlMortgageCalcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KlMortgageCalcComponent]
    });
    fixture = TestBed.createComponent(KlMortgageCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
