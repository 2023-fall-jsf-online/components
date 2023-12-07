import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LtpAdditionComponent } from './ltp-addition.component';

describe('LtpAdditionComponent', () => {
  let component: LtpAdditionComponent;
  let fixture: ComponentFixture<LtpAdditionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LtpAdditionComponent]
    });
    fixture = TestBed.createComponent(LtpAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
