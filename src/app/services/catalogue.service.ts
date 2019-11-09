import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 import { Produit } from 'src/model/produit.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

 // http://localhost:8080/produits?page=0&size05

  baseUrl = "http://localhost:8080/produits";
  constructor(private http:HttpClient) { }

  getContacts(page:number,size:number){
    return this.http.get(this.baseUrl+"?page="+page+"&size="+size);
  }

 
  getProduitByKeyWord(mc:string,page:number,size:number){
    return this.http.get(this.baseUrl+"/search/byDesignationPage?mc="+mc+"&page="+page+"&size="+size)
  }

  deleteResource(url){
    return this.http.delete(url);
  }

  saveProduits(produit){
    return this.http.post(this.baseUrl,produit);
  }

  getResource(url):Observable<Produit>{
    return this.http.get(url);
  }


  updateResource(url,data){
    return this.http.put(url,data);
  }





}
