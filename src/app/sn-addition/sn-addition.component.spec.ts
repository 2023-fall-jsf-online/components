import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnAdditionComponent } from './sn-addition.component';

describe('SnAdditionComponent', () => {
  let component: SnAdditionComponent;
  let fixture: ComponentFixture<SnAdditionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SnAdditionComponent]
    });
    fixture = TestBed.createComponent(SnAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
