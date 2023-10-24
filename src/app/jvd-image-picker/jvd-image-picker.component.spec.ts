import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JvdImagePickerComponent } from './jvd-image-picker.component';

describe('JvdImagePickerComponent', () => {
  let component: JvdImagePickerComponent;
  let fixture: ComponentFixture<JvdImagePickerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JvdImagePickerComponent]
    });
    fixture = TestBed.createComponent(JvdImagePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
