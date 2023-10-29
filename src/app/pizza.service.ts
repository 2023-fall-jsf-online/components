import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor() { }

  getPizzaToppingsFromTheCloud() {
    // Pretend we make a web service call here.
    const toppingsFromWebService = [
      {
        name: 'Olives'
        , price: 2.25
      }
      , {
        name: 'Pepperoni'
        , price: 1.50
      }
      , {
        name: 'Sausage'
        , price: 1.75
      }
    ];

    return toppingsFromWebService;
  }

  // added pizza crusts
  getPizzaCrustsFromCloud() {
    const crustsFromWebService = [
      {
        name: 'Original'
        , price: 0
      }, 
      {
        name: 'Stuffed'
        , price: 2.00
      },
      {
        name: 'Gluten-Free'
        , price: 2.00
      },
      {
        name: 'Thin'
        , price: 1.25
      },
      {
        name: 'Deep Dish'
        , price: 4.00
      }
    ];
    return crustsFromWebService;
  }
}
