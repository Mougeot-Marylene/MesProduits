import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../services/produit.services';
import { CommonModule } from '@angular/common';
import { Produit } from '../model/produit.model';
import { RouterLink } from '@angular/router';

@Component({
  imports: [CommonModule, RouterLink],
  selector: 'app-produits',
  templateUrl: './produits.html',
})
export class Produits implements OnInit {

  //utilisation du data binding pour afficher la liste des produits
  produits?: Produit[]; //model/Produit


  //private produitService : ProduitService => injection de dépendance
  constructor(private produitService: ProduitService) { }

  ngOnInit(): void {
    this.produits = this.produitService.listeProduit();
  }

  public supprimerProduit(prod: Produit) {
    let conf = confirm("Êtes-vous sûr ?");

    if (conf) {      
      this.produitService.supprimerProduit(prod);
    }
  }

  

}
