import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsListGeneratorComponent } from './bs-list-generator.component';

describe('BsListGeneratorComponent', () => {
  let component: BsListGeneratorComponent;
  let fixture: ComponentFixture<BsListGeneratorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BsListGeneratorComponent]
    });
    fixture = TestBed.createComponent(BsListGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
