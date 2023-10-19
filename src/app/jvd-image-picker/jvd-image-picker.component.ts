import { Component } from '@angular/core';

@Component({
  selector: 'app-jvd-image-picker',
  templateUrl: './jvd-image-picker.component.html',
  styleUrls: ['./jvd-image-picker.component.css']
})
export class JvdImagePickerComponent {
  selectedImage: string | null = null;

  onFileSelected(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const file = inputElement.files?.item(0);
    if (file) {
      this.loadImage(file);
    }
  }

  loadImage(file: File): void {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.selectedImage = e.target?.result;
    };
    reader.readAsDataURL(file);
  }
}
