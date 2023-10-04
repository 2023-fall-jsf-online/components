import { Component } from '@angular/core';
import { PizzaService } from '../pizza.service';

interface PizzaToppingDisplay {
  name: string;
  price: number;
  checked: boolean;
}

@Component({
  selector: 'app-pizza-toppings',
  templateUrl: './pizza-toppings.component.html',
  styleUrls: ['./pizza-toppings.component.css']
})
export class PizzaToppingsComponent {

  //Magic DI... Dependency injection... 

  constructor(
    private pizzaSvc: PizzaService
  ) { }

  avaliablePizzaToppings: PizzaToppingDisplay[] = [];

  ngOnInit(): void {
    const pt = this.pizzaSvc.getPizzaToppingsFromCloud();
    console.log(pt);

    this.avaliablePizzaToppings = pt.map(
      x => ({
        ...x, checked: false
      })
    );

    console.log(this.avaliablePizzaToppings);
  }
}
