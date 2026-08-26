import { Component, OnInit } from '@angular/core';
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

  constructor(private produitService: ProduitService, private router: Router) { }

  ngOnInit(): void {

    this.categories = this.produitService.listeCategorie();
  }

  public addProduit() {
    this.newCategorie =
    this.produitService.consulterCategorie(this.newIdCat);
    this.newProduit.categorie = this.newCategorie;

    this.produitService.ajouterProduit(this.newProduit);
    this.message = "produit " + this.newProduit.nomProduit + " ajouté avec succes";
    this.router.navigate(['produits']);
  }

}
