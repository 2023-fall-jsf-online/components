import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PizzaToppingsComponent } from './pizza-toppings/pizza-toppings.component';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { JcdMultiplyComponent } from './jcd-multiply/jcd-multiply.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { KrlColorMixerComponent } from './krl-color-mixer/krl-color-mixer.component';

import { TjsMultiplicationComponent } from './tjs-multiplication/tjs-multiplication.component';


@NgModule({
  declarations: [
    AppComponent,
    PizzaToppingsComponent,
    JcdMultiplyComponent,
    KrlColorMixerComponent
    , TjsMultiplicationComponent
  ],
  imports: [
    BrowserModule
    , FormsModule
    , BrowserAnimationsModule
    , MatCardModule
    , MatButtonModule
    , MatCheckboxModule
    , MatFormFieldModule
    , MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
