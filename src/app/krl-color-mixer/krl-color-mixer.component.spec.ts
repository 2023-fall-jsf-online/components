import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KrlColorMixerComponent } from './krl-color-mixer.component';

describe('KrlColorMixerComponent', () => {
  let component: KrlColorMixerComponent;
  let fixture: ComponentFixture<KrlColorMixerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KrlColorMixerComponent]
    });
    fixture = TestBed.createComponent(KrlColorMixerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
