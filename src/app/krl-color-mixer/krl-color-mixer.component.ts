import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-krl-color-mixer',
  templateUrl: './krl-color-mixer.component.html',
  styleUrls: ['./krl-color-mixer.component.css']
})
export class KrlColorMixerComponent implements OnInit{

  redValue : number = 0;
  greenValue : number = 0;
  blueValue : number = 0;

  ngOnInit() : void {
    
  }

  addRed() : void {
    if (this.redValue >= 0 && this.redValue < 255) {
      this.redValue += 5;
      console.log(this.redValue);
    }
  }

  addGreen() : void {
    if (this.greenValue >= 0 && this.greenValue < 255) {
      this.greenValue += 5;
      console.log(this.greenValue);
    }
  }

  addBlue() : void {
    if (this.blueValue >= 0 && this.blueValue < 255) {
      this.blueValue += 5;
      console.log(this.blueValue);
    }
  }

  addWhite() : void {}
  addBlack() : void {}
  clearColor() : void {}

}
