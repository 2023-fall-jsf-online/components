import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';

interface PizzaToppingDisplay {
  name: string
  , price: number
  , checked: boolean
}

@Component({
  selector: 'app-pizza-toppings',
  templateUrl: './pizza-toppings.component.html',
  styleUrls: ['./pizza-toppings.component.css']
})
export class PizzaToppingsComponent implements OnInit {

  availablePizzaToppings: PizzaToppingDisplay[] = [];

  totalPrice = 0;

  constructor(private pizzaService: PizzaService) {

  }

  ngOnInit(): void {
    const pizzaToppings = this.pizzaService.getPizzaToppingsFromTheCloud();
    this.availablePizzaToppings = pizzaToppings.map(pt => ({
      ...pt,
      checked: false
    }))
  }

  calculateTotal() {
    this.totalPrice = this.availablePizzaToppings
        .filter(pt => pt.checked)
        .reduce(
          (acc, n) => acc + n.price,
          0
        )
  }
}
