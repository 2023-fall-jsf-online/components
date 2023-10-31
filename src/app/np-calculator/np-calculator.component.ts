import { Component } from '@angular/core';

@Component({
  selector: 'app-np-calculator',
  templateUrl: './np-calculator.component.html',
  styleUrls: ['./np-calculator.component.css']
})
export class NpCalculatorComponent {

  constructor() { }

  ngOnInit(): void {
  }

  numberOne = 100;
  numberTwo = 27;
  option = "+";
  total = 127;

calculator = () => {
  if (this.option == "+") {
    this.total = this.numberOne + this.numberTwo;
  } else if (this.option == "-") {
  this.total = this.numberOne - this.numberTwo;
  } else if (this.option == "/") {
    this.total = this.numberOne / this.numberTwo;
  } else if (this.option == "x") {
    this.total = this.numberOne * this.numberTwo;
    }
  }
}
