import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.services';


@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-recherche-par-nom',
  styles: ``,
  templateUrl: './recherche-par-nom.html',

})
export class RechercheParNom {

  produits: Produit[] = []; // tableau vide par défaut, rempli plus tard par onChange()
  nomProduit!: string;

  constructor(private produitService: ProduitService, private cdr: ChangeDetectorRef) {

  }

  ngOnInit(): void {
    this.produitService.listeProduit().subscribe(prods => {
      console.log(prods);
      this.produits = prods;
    });

    //this.produits = [];
  }

  rechercherProds() {
    this.produitService.rechercherParNom(this.nomProduit).subscribe(prods => {
        this.produits = prods;
        console.log(prods)
      });
  }
}
