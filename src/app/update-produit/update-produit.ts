import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProduitService } from '../services/produit.services';
import { Produit } from '../model/produit.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Categorie } from '../model/categorie.model';

@Component({
  imports: [FormsModule, CommonModule],
  selector: 'app-update-produit',
  styles: ``,
  templateUrl: './update-produit.html',
})
export class UpdateProduit implements OnInit {

  currentProduit = new Produit();
  categories!: Categorie[];
  updatedCatId!: number;

  constructor(private activatedRoute: ActivatedRoute, private produitService: ProduitService, private router: Router, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {

    this.produitService.listeCategories().subscribe(cats => {
      this.categories = cats;
    });

    this.produitService.consulterProduit(this.activatedRoute.snapshot.params['id']).subscribe(prod => {
      this.currentProduit = prod;
      this.updatedCatId = this.currentProduit.categorie.idCat; // ← initialise avec la catégorie actuelle du produit
      this.cdr.detectChanges(); // Forcer le rafraîchissement dès que l'API répond !
    });


  }

  updateProduit() {
    this.currentProduit.categorie = this.categories.
      find(cat => cat.idCat == this.updatedCatId)!;
    this.produitService.modifierProduit(this.currentProduit).subscribe(prod => {
      this.router.navigate(['produits']);
    }
    );
  }


}
