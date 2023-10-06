import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';


@Component({
  selector: 'app-pizza-toppings',
  templateUrl: './pizza-toppings.component.html',
  styleUrls: ['./pizza-toppings.component.css']
})
export class PizzaToppingsComponent implements OnInit {

  constructor(private pizzaService: PizzaService) {

  }

  ngOnInit(): void {
    const pizzaToppings = this.pizzaService.getPizzaToppingsFromTheCloud();
    
  }

}
