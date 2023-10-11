import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-krl-color-mixer',
  templateUrl: './krl-color-mixer.component.html',
  styleUrls: ['./krl-color-mixer.component.css']
})
export class KrlColorMixerComponent implements OnInit{

  redValue : number = 255;
  greenValue : number = 255;
  blueValue : number = 255;
  rgbString : string = "";

  ngOnInit() : void {
    this.makeString();
  }

  makeString = () => {
    this.rgbString = `background-color:rgb(${this.redValue},${this.greenValue},${this.blueValue})`;
  }

  addRed = () => {
    if (this.greenValue <= 255 && this.greenValue > 0) {
      this.greenValue = this.greenValue - 10;
    }
    if (this.blueValue <= 255 && this.blueValue > 0) {
      this.blueValue = this.blueValue - 10;
    }
    this.makeString();
  }

  addGreen = () => {
    if (this.redValue <= 255 && this.redValue > 0) {
      this.redValue = this.redValue - 10;
    }
    if (this.blueValue <= 255 && this.blueValue > 0) {
      this.blueValue = this.blueValue - 10;
    }
    this.makeString();
  }

  addBlue = () => {
    if (this.greenValue <= 255 && this.greenValue > 0) {
      this.greenValue = this.greenValue - 10;
    }
    if (this.redValue <= 255 && this.redValue > 0) {
      this.redValue = this.redValue - 10;
    }
    this.makeString();
  }

  addWhite = () => {
    if (this.redValue < 255) this.redValue = this.redValue + 10;
    if (this.greenValue < 255) this.greenValue = this.greenValue + 10;
    if (this.blueValue < 255) this.blueValue = this.blueValue + 10;
    this.makeString();
  }

  addBlack = () => {
    if (this.redValue > 0) this.redValue = this.redValue - 10;
    if (this.greenValue > 0) this.greenValue = this.greenValue - 10;
    if (this.blueValue > 0) this.blueValue = this.blueValue - 10;
    this.makeString();
  }
  
  clearColor() : void {}
}
