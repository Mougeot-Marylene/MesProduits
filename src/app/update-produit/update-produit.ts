import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProduitService } from '../services/produit.services';
import { Produit } from '../model/produit.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  imports: [FormsModule, CommonModule],
  selector: 'app-update-produit',
  styles: ``,
  templateUrl: './update-produit.html',
})
export class UpdateProduit implements OnInit {

  currentProduit = new Produit();

  constructor(private activatedRoute: ActivatedRoute, private produitService: ProduitService, private router :Router,) { }

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.params['id']);
    this.currentProduit = this.produitService.consulterProduit(this.activatedRoute.snapshot.params['id']);
    console.log(this.currentProduit);
  }

  updateProduit() {
    this.produitService.updateProduit(this.currentProduit);
    this.router.navigate(['produits']); // revenir à la page produit
  }


}
