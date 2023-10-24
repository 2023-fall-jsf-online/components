import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JcdMultiplyComponent } from './jcd-multiply.component';

describe('JcdMultiplyComponent', () => {
  let component: JcdMultiplyComponent;
  let fixture: ComponentFixture<JcdMultiplyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JcdMultiplyComponent]
    });
    fixture = TestBed.createComponent(JcdMultiplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
