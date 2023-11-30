import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsSubtractionComponent } from './ms-subtraction.component';

describe('MsSubtractionComponent', () => {
  let component: MsSubtractionComponent;
  let fixture: ComponentFixture<MsSubtractionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MsSubtractionComponent]
    });
    fixture = TestBed.createComponent(MsSubtractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
