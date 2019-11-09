import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitsComponent } from './components/produits/produits.component';
import { NewProduitComponent } from './components/new-produit/new-produit.component';
import { from } from 'rxjs';
import { EditProduitComponent } from './components/edit-produit/edit-produit.component';

@NgModule({
  declarations: [
    AppComponent,
    ProduitsComponent,
    NewProduitComponent,
    EditProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
