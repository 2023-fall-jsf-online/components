import { Component } from '@angular/core';
import { PizzaService } from '../pizza.service';

interface PizzaCrustDisplay {
  name: string;
  price: number;
  checked: boolean;
}


@Component({
  selector: 'app-pizza-crusts',
  templateUrl: './pizza-crusts.component.html',
  styleUrls: ['./pizza-crusts.component.css']
})
export class PizzaCrustsComponent {
  constructor(
    private pizzaSvc: PizzaService
  ) { }

  // available crust types
  availablePizzaCrusts: PizzaCrustDisplay[] = [];




  ngOnInit(): void {
    const pc = this.pizzaSvc.getPizzaCrustsFromCloud();
    // console.log(pc);

    this.availablePizzaCrusts = pc.map(
      x => ({
        ...x
        , checked: false
      })
    );
    console.log(this.availablePizzaCrusts);
  }

  get totalPrice() {
    return this.availablePizzaCrusts
      .filter(
        x => x.checked
      )
      .reduce(
          (acc, x) => acc + x.price
          , 0);
  }

  checkAll = () => this.availablePizzaCrusts = this.availablePizzaCrusts.map(
    x => ({
      ...x
      , checked: true
    })
  );

  uncheckAll = () => this.availablePizzaCrusts = this.availablePizzaCrusts.map(
    x => ({
      ...x
      , checked: false
    })
  );
  
}
