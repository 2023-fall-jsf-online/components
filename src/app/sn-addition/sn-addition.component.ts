import { Component } from '@angular/core';

@Component({
  selector: 'app-sn-addition',
  templateUrl: './sn-addition.component.html',
  styleUrls: ['./sn-addition.component.css']
})
export class SnAdditionComponent {
  numberOne = 10;
  numberTwo = 90;
  total = 100;

  add = () => this.total = this.numberOne + this.numberTwo;
}
