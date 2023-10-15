import { Component } from '@angular/core';

@Component({
  selector: 'app-ms-subtraction',
  templateUrl: './ms-subtraction.component.html',
  styleUrls: ['./ms-subtraction.component.css']
})
export class MsSubtractionComponent {

  numberOne = 3;
  numberTwo = 2;

  total = 1;

  subtract = () => this.total = this.numberOne - this.numberTwo

}
