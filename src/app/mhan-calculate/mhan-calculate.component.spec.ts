import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MhanCalculateComponent } from './mhan-calculate.component';

describe('MhanCalculateComponent', () => {
  let component: MhanCalculateComponent;
  let fixture: ComponentFixture<MhanCalculateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MhanCalculateComponent]
    });
    fixture = TestBed.createComponent(MhanCalculateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
