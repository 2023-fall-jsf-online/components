import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IngredientServiceService {

  constructor() { }

  getIngredientsFromWebService () {
    const ingredientsFromWebService = [
      {
        name: 'Olives'
      }
      , {
        name: 'Pepperoni'
      }
      , {
        name: 'Sausage'
      }
    ];

    return ingredientsFromWebService;
  }
}
