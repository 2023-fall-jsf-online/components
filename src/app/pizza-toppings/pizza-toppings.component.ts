import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';
//note in demo command was import component but then the
// file in the demo here was different than mine ven though I created it the same - 
//demo had import {Component, OnInit} and had the constructor and ngOnIT in there where mine d
// did not have those items. 

interface pizzaToppingDisplay {
  name: string; 
  price: number; 
  checked: boolean;
}

@Component({
  selector: 'app-pizza-toppings',
  templateUrl: './pizza-toppings.component.html',
  styleUrls: ['./pizza-toppings.component.css']
})
export class PizzaToppingsComponent implements OnInit {

  // magic DI . . dependency injection. . 

  constructor(
    private pizzaSvc: PizzaService
  )  {}

  availablePizzaToppings: pizzaToppingDisplay[] =[];

  ngOnInit(): void {

    const pt = this.pizzaSvc.getPizzaToppingsFromTheCloud(); 
    console.log(pt);

    this.availablePizzaToppings = pt.map(
      x => ({
        ...x 
        , checked: false
      })
    );

    console.log(this.availablePizzaToppings);
  }

}
