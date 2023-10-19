import { Component, OnInit } from '@angular/core';
import {IngredientServiceService} from '../ingredient-service.service'; // I forgot to leave off the word 'service' in generating the file :(

interface PizzaIngredientDisplay {
  name: string;
  checked: boolean
}

@Component({
  selector: 'app-pizza-gluer',
  templateUrl: './pizza-gluer.component.html',
  styleUrls: ['./pizza-gluer.component.css']
})
export class PizzaGluerComponent implements OnInit {
  
  // DI
  constructor(
    private ingredientSvc: IngredientServiceService // and the import name is messed up too :P
  ) { }

    availablePizzaIngredients: PizzaIngredientDisplay[] = []

  ngOnInit(): void {
    const pi = this.ingredientSvc.getIngredientsFromWebService(); // Pizza is pie and pizza is round. Appropriate name :)

    this.availablePizzaIngredients = pi.map(
      ingredient => ({
        name: ingredient.name
        , checked: false
      })
    );
  }

  get pizza() {
    const pizzaMustHave = [
      "Crust"
      , "Marinara"
      , "Cheese"
    ]
    const thisPizza = [
      ...pizzaMustHave
      , ...this.availablePizzaIngredients
          .filter(
            x => x.checked
            ).map(
              x => x.name
              )
    ]
    return thisPizza.join("+glue+")
    ;
  }

  checkAll() {
    this.availablePizzaIngredients = this.availablePizzaIngredients.map(
      x => ({
        ...x,checked: true
      })
    );
  }

  uncheckAll() {
    this.availablePizzaIngredients = this.availablePizzaIngredients.map(
      x => ({
        ...x
        , checked: false
      })
    )
  }
}
