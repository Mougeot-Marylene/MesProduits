import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { Produit } from '../model/produit.model';
import { FormsModule } from '@angular/forms';
import { Categorie } from '../model/categorie.model';
import { ProduitService } from '../services/produit.services';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-recherche-par-categorie',
  styles: ``,
  templateUrl: './recherche-par-categorie.html',
})
export class RechercheParCategorie {

  produits: Produit[] = []; // tableau vide par défaut, rempli plus tard par onChange()
  categories: Categorie[] = [];
  IdCategorie!: number;

  constructor(private produitService: ProduitService, private cdr: ChangeDetectorRef) {

  }

  ngOnInit(): void {
    this.produitService.listeCategories().
      subscribe(cats => {
        this.categories = cats;
        this.cdr.detectChanges(); // Forcer le rafraîchissement dès que l'API répond !
      });
  }


  onChange() {
    this.produitService.rechercherParCategorie(this.IdCategorie).
      subscribe(prods => {
        this.produits = prods;
        this.cdr.detectChanges();
      });
  }
}
