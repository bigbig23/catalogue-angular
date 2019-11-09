import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProduitsComponent } from './components/produits/produits.component';
import { NewProduitComponent } from './components/new-produit/new-produit.component';
import { EditProduitComponent } from './components/edit-produit/edit-produit.component';


const routes: Routes = [
  {path:'produits',component:ProduitsComponent},
  {path:'new-produit',component:NewProduitComponent},
  {path:'',redirectTo:'/produits',pathMatch:'full'},
  {path:'edit-produit/:id',component:EditProduitComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
