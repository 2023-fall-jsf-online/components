import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor() { }

  getPizzaToppingsFromTheCloud() {
    const toppingsFromWebService = [
      {
        name: 'Sausage'
        , price: 1.75
      }
      , {
        name: 'Pepperoni'
        , price: 1.50
      }
      , {
        name: 'Extra Cheese'
        , price: 2.00
      }
    ];

    return toppingsFromWebService;
  }
}
