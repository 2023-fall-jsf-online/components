import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JdhSodaComponent } from './jdh-soda.component';

describe('JdhSodaComponent', () => {
  let component: JdhSodaComponent;
  let fixture: ComponentFixture<JdhSodaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JdhSodaComponent]
    });
    fixture = TestBed.createComponent(JdhSodaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
