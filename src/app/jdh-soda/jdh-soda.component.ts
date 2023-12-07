import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jdh-soda',
  templateUrl: './jdh-soda.component.html',
  styleUrls: ['./jdh-soda.component.css']
})
export class JdhSodaComponent {
  constructor() {

  }

  availableColas = ['Coke', 'Pepsi', 'RC Cola']
  availableCitrus = ['Mountain Dew', 'Sprite', '7up']
  availableOther = ['Barqs', 'Red Bull', 'Dr. Pepper']
  chosenSoda = ''

  ngOnInIt(): void {

  }

  pickCola = () => {
    return this.chosenSoda = this.availableColas[Math.floor(Math.random() * this.availableColas.length)]
  }

  pickCitrus = () => {
    return this.chosenSoda = this.availableCitrus[Math.floor(Math.random() * this.availableColas.length)]
  }

  pickOther = () => {
    return this.chosenSoda = this.availableOther[Math.floor(Math.random() * this.availableColas.length)]
  }
}
