import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProduitService } from '../services/produit.services';
import { Produit } from '../model/produit.model';

@Component({
  imports: [FormsModule],
  selector: 'app-add-produit',
  templateUrl: './add-produit.html',
})
export class AddProduit  {

  newProduit = new Produit();
  message? :string;

  constructor(private produitService : ProduitService) { }

  public addProduit() {    
    //console.log(this.newProduit);
    this.produitService.ajouterProduit(this.newProduit);
    this.message = "produit " + this.newProduit.nomProduit + " ajouté avec succes";
  }

}
