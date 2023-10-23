import { Component } from '@angular/core';

@Component({
  selector: 'app-mhan-calculate',
  templateUrl: './mhan-calculate.component.html',
  styleUrls: ['./mhan-calculate.component.css']
})
export class MhanCalculateComponent {
  constructor() { }

  ngOnInit(): void {
  }

  numberOne = 10;
  numberTwo = 90;
  action = "+";
  result = 900;

  calculate = () => {
    if (this.action === "+") {
      this.result = this.numberOne + this.numberTwo;
    } else if (this.action === "-") {
      this.result = this.numberOne - this.numberTwo;
    } else if (this.action === "*") {
      this.result = this.numberOne * this.numberTwo;
    } else if (this.action === "/") {
      this.result = this.numberOne / this.numberTwo;
    }
    console.log(this.action);
    console.log(this.result);
  }
}