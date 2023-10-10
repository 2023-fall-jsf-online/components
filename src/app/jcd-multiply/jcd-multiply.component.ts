import { Component } from '@angular/core';

@Component({
  selector: 'app-jcd-multiply',
  templateUrl: './jcd-multiply.component.html',
  styleUrls: ['./jcd-multiply.component.css']
})
export class JcdMultiplyComponent {

  numberOne = 10;
  numberTwo = 10;
  total= 100;

  multiply = () => this.total = this.numberOne * this.numberTwo;

}
