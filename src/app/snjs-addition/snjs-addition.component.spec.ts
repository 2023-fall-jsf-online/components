import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SNJSAdditionComponent } from './snjs-addition.component';

describe('SNJSAdditionComponent', () => {
  let component: SNJSAdditionComponent;
  let fixture: ComponentFixture<SNJSAdditionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SNJSAdditionComponent]
    });
    fixture = TestBed.createComponent(SNJSAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
