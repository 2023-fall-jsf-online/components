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

}
