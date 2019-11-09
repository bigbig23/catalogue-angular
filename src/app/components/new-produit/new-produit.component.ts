import { Component, OnInit } from '@angular/core';
import { CatalogueService } from 'src/app/services/catalogue.service';
import { Router } from '@angular/router';
import { Produit } from 'src/model/produit.model';

@Component({
  selector: 'app-new-produit',
  templateUrl: './new-produit.component.html',
  styleUrls: ['./new-produit.component.css']
})
export class NewProduitComponent implements OnInit {

  currentProduits:Produit;

  mode:number=1;
  constructor(private cata:CatalogueService,private router:Router) { }

  ngOnInit() {
  }


  saveProduit(form){
    //console.log(form)
    this.cata.saveProduits(form).subscribe((data:any) =>{
     this.currentProduits = data;
      //this.router.navigate(['produits'])
      this.mode=2;
    },err =>{
      console.log(err)
    })

  }

  nouveauProduit(){
    this.mode=1;
  }

}
