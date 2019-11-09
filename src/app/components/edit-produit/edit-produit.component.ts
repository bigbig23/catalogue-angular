import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CatalogueService } from 'src/app/services/catalogue.service';
import { Produit } from 'src/model/produit.model';

@Component({
  selector: 'app-edit-produit',
  templateUrl: './edit-produit.component.html',
  styleUrls: ['./edit-produit.component.css']
})
export class EditProduitComponent implements OnInit {

  resourceId;
  currentProduit: Produit;
  constructor(private router:Router,private activatedRoute:ActivatedRoute,private cata:CatalogueService) { 

   // this.resourceId = atob(this.activatedRoute.snapshot.params.id)
  }

  ngOnInit() {
    //et url = atob(this.activatedRoute.snapshot.params.id)
    //console.log(url)
    this.getResource();

  }


  getResource(){
    this.resourceId = atob(this.activatedRoute.snapshot.params.id)
    this.cata.getResource(this.resourceId).subscribe(data =>{
      this.currentProduit = data;
    },err =>{
      console.log(err)
    })
  }



  updateProduit(form:any){
    this.cata.updateResource(this.resourceId,form).subscribe(data =>{
      alert('data has been updated successfully!')
      this.router.navigateByUrl("/produits")
    },err =>{
      console.log(err)
    })
  }


}
