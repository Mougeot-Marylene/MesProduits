import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
  produits!: Produit[]; //model/Produit
  
  //private produitService : ProduitService => injection de dépendance
  //rafraîchissement : pour le rafraîchissement
  constructor(private produitService: ProduitService, private cdr: ChangeDetectorRef) {

  }

  // subscribe => je m'inscrit à cet observable dans la methdoe (listeProduit()), pour recupèrer la donnée
  ngOnInit(): void {
    this.chargerProduits();
  }

  chargerProduits() {
    this.produitService.listeProduit().subscribe(prods => {
      this.produits = prods;
      this.cdr.detectChanges(); // Forcer le rafraîchissement dès que l'API répond !
    });
  }


  supprimerProduit(p: Produit) {
    let conf = confirm("Etes-vous sûr ?");
    
    if (conf)
      this.produitService.supprimerProduit(p.idProduit).subscribe(() => {
        console.log("produit supprimé");
        this.chargerProduits();
      });
  }



}
