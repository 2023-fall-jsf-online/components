import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PizzaToppingsComponent } from './pizza-toppings/pizza-toppings.component';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { KrlColorMixerComponent } from './krl-color-mixer/krl-color-mixer.component';

import { TjsMultiplicationComponent } from './tjs-multiplication/tjs-multiplication.component';

import { MhanCalculateComponent } from './mhan-calculate/mhan-calculate.component';

import { PizzaGluerComponent } from './pizza-gluer/pizza-gluer.component';
import { JvdImagePickerComponent } from './jvd-image-picker/jvd-image-picker.component';

import { MsSubtractionComponent } from './ms-subtraction/ms-subtraction.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaToppingsComponent,
    KrlColorMixerComponent
    , TjsMultiplicationComponent
    , MhanCalculateComponent 
    , PizzaGluerComponent
    , MsSubtractionComponent
    , JvdImagePickerComponent
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
