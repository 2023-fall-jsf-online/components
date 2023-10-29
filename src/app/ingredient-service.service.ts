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

  // added pizza crust option
  getCrustsFromWebService () {
    const crustsFromWebService = [
      {
        name: 'Original'        
      }, 
      {
        name: 'Stuffed'        
      },
      {
        name: 'Gluten-Free'       
      },
      {
        name: 'Thin'        
      },
      {
        name: 'Deep Dish'        
      }
    ];
    
    return crustsFromWebService;
  }
    
    
}
