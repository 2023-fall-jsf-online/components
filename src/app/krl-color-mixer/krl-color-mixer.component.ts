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
    console.log(this.rgbString);
  }

  addRed = () => {
    if (this.greenValue <= 255 && this.greenValue > 0) {
      this.greenValue = this.greenValue - Math.round(this.greenValue * .25);
    }
    if (this.blueValue <= 255 && this.blueValue > 0) {
      this.blueValue = this.blueValue - Math.round(this.blueValue * .25);
    }
    this.makeString();
  }

  addGreen = () => {
    if (this.redValue <= 255 && this.redValue > 0) {
      this.redValue = this.redValue - Math.round(this.redValue * .25);
    }
    if (this.blueValue <= 255 && this.blueValue > 0) {
      this.blueValue = this.blueValue - Math.round(this.blueValue * .25);
    }
    this.makeString();
  }

  addBlue = () => {
    if (this.greenValue <= 255 && this.greenValue > 0) {
      this.greenValue = this.greenValue - Math.round(this.greenValue * .25);
    }
    if (this.redValue <= 255 && this.redValue > 0) {
      this.redValue = this.redValue - Math.round(this.redValue * .25);
    }
    this.makeString();
  }

/*
  addWhite() : void {}
  addBlack() : void {}
  clearColor() : void {}
*/
}
