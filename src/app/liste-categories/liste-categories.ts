import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ProduitService } from '../services/produit.services';
import { Categorie } from '../model/categorie.model';
import { UpdateCategorie } from "../update-categorie/update-categorie";

@Component({
  imports: [UpdateCategorie],
  selector: 'app-liste-categories',
  styles: ``,
  templateUrl: './liste-categories.html',
})
export class ListeCategories implements OnInit {

  categories!: Categorie[];
  updatedCat: Categorie = { "idCat": 0, "nomCat": "" };
  ajout: boolean = true;


  constructor(private produitService: ProduitService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.produitService.listeCategories().subscribe(cats => {
      this.categories = cats;
      console.log(cats);
      this.cdr.detectChanges(); // Forcer le rafraîchissement dès que l'API répond !
    });
  }

  categorieUpdated(cat: Categorie) {
    console.log("Cat updated event", cat);
    this.produitService.ajouterCategorie(cat).subscribe(() => {
      this.chargerCategories()
    });
  }

  chargerCategories() {
    this.produitService.listeCategories().
      subscribe(cats => {
        this.categories = cats;
        console.log(cats);
      });
  }

  updateCat(cat: Categorie) {
    this.updatedCat = cat;
    this.ajout = false;
  }

}
