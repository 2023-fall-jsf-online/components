import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor() { }

  getPizzaToppingsFromCloud() {
    const toppingFromWebService = [
      {name: 'Olives', price: 2.25}
      , {name: 'Pepperoni', price: 1.50}
      , {name: 'Sausage', price: 1.75}
    ];
    return toppingFromWebService;
  }
}
