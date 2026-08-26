import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.services';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-produits',
  templateUrl: './produits.html',
})
export class Produits  implements OnInit{

  //utilisation du data binding pour afficher la liste des produits
  produits?: Produit[]; //model/Produit


  //private produitService : ProduitService => injection de dépendance
  constructor(private produitService : ProduitService) { }

  ngOnInit(): void {
        this.produits =  this.produitService.listeProduit();
  }

}
