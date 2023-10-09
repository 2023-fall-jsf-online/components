import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IngredientServiceService {

  constructor() { }

  getIngredientsFromWebService () {
    const ingredientsFromWebService = [
      {
        name: 'Crust'
        , required: true
      }
      , {
        name: 'Marinara'
        , required: true
      }
      , {
        name: 'Cheese'
        , required: true
      }
      , {
        name: 'Olives'
        , required: false
      }
      , {
        name: 'Pepperoni'
        , required: false
      }
      , {
        name: 'Sausage'
        , required: false
      }
    ];

    return ingredientsFromWebService;
  }
}
