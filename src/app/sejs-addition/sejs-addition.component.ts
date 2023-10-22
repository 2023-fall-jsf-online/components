import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sejs-addition',
  templateUrl: './sejs-addition.component.html',
  styleUrls: ['./sejs-addition.component.css']
})
export class SejsAdditionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  numberOne = 10;
  numberTwo = 90;
  total = 100;

  add = () => this.total = this.numberOne + this.numberTwo

}
