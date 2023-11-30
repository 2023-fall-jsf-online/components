import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NpCalculatorComponent } from './np-calculator.component';

describe('NpCalculatorComponent', () => {
  let component: NpCalculatorComponent;
  let fixture: ComponentFixture<NpCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NpCalculatorComponent]
    });
    fixture = TestBed.createComponent(NpCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
