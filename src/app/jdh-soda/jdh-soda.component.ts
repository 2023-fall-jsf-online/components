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
  chosenSoda = ''

  ngOnInIt(): void {

  }

  pickCola = () => {
    return this.chosenSoda = this.availableColas[Math.floor(Math.random() * this.availableColas.length)]
  }
}
