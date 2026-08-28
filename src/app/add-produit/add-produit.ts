import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProduitService } from '../services/produit.services';
import { Produit } from '../model/produit.model';
import { Categorie } from '../model/categorie.model';
import { Route, Router } from '@angular/router';

@Component({
  imports: [FormsModule],
  selector: 'app-add-produit',
  templateUrl: './add-produit.html',
})
export class AddProduit implements OnInit {

  newProduit = new Produit();

  message?: string;

  categories!: Categorie[];
  newIdCat!: number;
  newCategorie!: Categorie;

  constructor(private produitService: ProduitService, private router: Router, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.produitService.listeCategories().subscribe(cats => {
      this.categories = cats;
      console.log(cats);
        this.cdr.detectChanges(); // Forcer le rafraîchissement dès que l'API répond !
    });
  }


  addProduit() {
    this.newProduit.categorie = this.categories.find(cat => cat.idCat == this.newIdCat)!;
    this.produitService.ajouterProduit(this.newProduit).subscribe(prod => {
        console.log(prod);
        this.router.navigate(['produits']);
      });
  }

}
