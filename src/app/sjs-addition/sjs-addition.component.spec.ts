
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SjsAdditionComponent } from './sjs-addition.component';

describe('SjsAdditionComponent', () => {
  let component: SjsAdditionComponent;
  let fixture: ComponentFixture<SjsAdditionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SjsAdditionComponent]
    });
    fixture = TestBed.createComponent(SjsAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
