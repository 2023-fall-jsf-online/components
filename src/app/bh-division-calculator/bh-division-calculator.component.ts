import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bh-division-calculator',
  templateUrl: './bh-division-calculator.component.html',
  styleUrls: ['./bh-division-calculator.component.css']
})
export class BhDivisionCalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  numberOne = 50;
  numberTwo = 2;
  total = 25;

  divide = () => this.total = this.numberOne / this.numberTwo;

}
