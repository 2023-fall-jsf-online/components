import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor() { }

  getPizzaToppings() {
    // Pretend to get pizza toppings from web service call
    const toppings = [
      {
        name: 'Pepperoni',
        price: 1.25
      },
      {
        name: 'Sausage',
        price: 2.50
      },
      {
        name: 'Pineapple',
        price: 3.75
      }
    ];

    return toppings;
  }
}
