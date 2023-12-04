import { Component } from '@angular/core';

@Component({
  selector: 'app-ltp-addition',
  templateUrl: './ltp-addition.component.html',
  styleUrls: ['./ltp-addition.component.css']
})
export class LtpAdditionComponent {

  numberOne = 10; 
  numberTwo = 90;
  total = 100;

  add = () => this.total = this.numberOne + this.numberTwo;
}
