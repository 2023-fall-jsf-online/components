import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PizzaToppingsComponent } from './pizza-toppings/pizza-toppings.component';
/*import { PizzaComponent } from './pizza/pizza.component';*/

@NgModule({
  declarations: [
    AppComponent,
    PizzaToppingsComponent,
    /*PizzaComponent*/
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
