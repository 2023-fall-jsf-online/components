import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor() { }

  getPizzaToppingsViaCloud() {
    // Imaginary web service call
    const toppingsViaCloud = [
      {
        name: 'Olives',
        price: 2.25
      },
      {
        name: 'Pepperoni',
        price: 1.25
      },
      {
        name: 'Sausage',
        price: 1.75
      }
    ];

    return toppingsViaCloud;
  }
}
