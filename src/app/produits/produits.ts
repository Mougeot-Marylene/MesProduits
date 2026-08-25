import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-produits',
  templateUrl: './produits.html',
})
export class Produits {

  //utilisation du data binding pour afficher la liste des produits
  produits : string[]; 

  /**
   *
   */
  constructor() {
    this.produits =  ["PC Asus", " Imprimante Espon", "Tablette samsung"]
    
  }
}
