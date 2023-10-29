import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kl-mortgage-calc',
  templateUrl: './kl-mortgage-calc.component.html',
  styleUrls: ['./kl-mortgage-calc.component.css']
})
export class KlMortgageCalcComponent implements OnInit {

    constructor() {}

    ngOnInit(): void { }    
    
    // inputs
    loanAmount = 245000;
    loanTerm = 30;
    interestRate = 7.5;    

    /**         
     * @returns monthly payment based on the above inputs
     */
    calculate = () => {      
      const monthlyInterest = (this.interestRate * 0.01) / 12; // changes percentage to decimal -> / 12
      const numPayments = this.loanTerm * 12;
      const payment = 
          (this.loanAmount * monthlyInterest) / ( 1 - Math.pow(1 + monthlyInterest, -numPayments));
      return payment;
    }   

}