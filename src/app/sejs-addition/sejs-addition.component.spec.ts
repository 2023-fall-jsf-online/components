import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SejsAdditionComponent } from './sejs-addition.component';

describe('SejsAdditionComponent', () => {
  let component: SejsAdditionComponent;
  let fixture: ComponentFixture<SejsAdditionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SejsAdditionComponent]
    });
    fixture = TestBed.createComponent(SejsAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
