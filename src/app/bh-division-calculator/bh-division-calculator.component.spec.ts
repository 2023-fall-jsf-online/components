import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BhDivisionCalculatorComponent } from './bh-division-calculator.component';

describe('BhDivisionCalculatorComponent', () => {
  let component: BhDivisionCalculatorComponent;
  let fixture: ComponentFixture<BhDivisionCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BhDivisionCalculatorComponent]
    });
    fixture = TestBed.createComponent(BhDivisionCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
