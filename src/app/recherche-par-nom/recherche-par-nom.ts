import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.services';


@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-recherche-par-nom',
  styles: ``,
  templateUrl: './recherche-par-nom.html',

})
export class RechercheParNom implements OnInit {

  produits!: Produit[];
  nomProduit!: string;

  constructor(private produitService: ProduitService, private cdr: ChangeDetectorRef) {

  }

  ngOnInit(): void {
    this.produits = [];
  }

  rechercherProds() {

    if (this.nomProduit) {
      this.produitService.rechercherParNom(this.nomProduit).subscribe(prods => {
        this.produits = prods;
        console.log(prods)
      });
    } else {
      this.produitService.listeProduit().subscribe(prods => {
        console.log(prods);
        this.produits = prods;
        this.cdr.detectChanges(); // Forcer le rafraîchissement dès que l'API répond !
      });

    }
    

  }
}
