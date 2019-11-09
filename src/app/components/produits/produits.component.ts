import { Component, OnInit } from '@angular/core';
import { CatalogueService } from 'src/app/services/catalogue.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

  produits:any;
  currentPage:number=0;
  size:number=5;
  motcle:string=""
  totalPages:number;
  pages:Array<number>;
  currentMotCle: string="";
  constructor(private cata:CatalogueService,private rouer:Router) { }

  ngOnInit() {
  }

  getProduits(){
    this.cata.getContacts(this.currentPage,this.size).subscribe((data:any) =>{
      this.produits = data;
      this.totalPages = data['page'].totalPages;
      this.pages = new Array<number>(this.totalPages);
    },error =>{
      console.log(error)
    })
  }

  goToPage(i){
    this.currentPage = i;
    //this.getProduits();
    this.chercherProduits();
   }

  chercherMotCle(form:any){
    this.currentPage = 0;
    this.currentMotCle = form.motCle;
    this.chercherProduits();

  }

  chercherProduits(){
   // console.log(form)
    this.cata.getProduitByKeyWord(this.currentMotCle,this.currentPage, this.size).subscribe(data =>{
    this.produits = data;
    this.totalPages = data['page'].totalPages;
    this.pages = new Array<number>(this.totalPages);
   },error =>{
     console.log(error)
   })
  }


  onDeleteProduit(p){
    let confirm = window.confirm('Are you sure you want delete it ?');
    if(confirm==true){
      //console.log(p)
      this.cata.deleteResource(p._links.self.href).subscribe(data =>{
        this.chercherProduits();
      },err =>{
        console.log(err)
      })
    }
  }


  editProduit(p){
    //console.log(p)
    let url = p._links.self.href;
    this.rouer.navigate(["/edit-produit/"+btoa(url)]);
  }

}
