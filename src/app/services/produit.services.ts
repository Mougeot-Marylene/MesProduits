import { Injectable, Service } from '@angular/core';
import { Produit } from '../model/produit.model';

@Injectable({
    providedIn: 'root'
})
export class ProduitService {

    produits: Produit[];


    constructor() {
        this.produits = [
            { idProduit: 1, nomProduit: "PC Asus", prixProduit: 3000.600, dateCreation: new Date("01/14/2011") },
            { idProduit: 2, nomProduit: "Imprimante Epson", prixProduit: 450, dateCreation: new Date("12/17/2010") },
            { idProduit: 3, nomProduit: "Tablette Samsung", prixProduit: 900.123, dateCreation: new Date("02/20/2020") }
        ]
    }

    public listeProduit(): Produit[] {
        return this.produits;
    }

    public ajouterProduit(produit: Produit) {
        this.produits.push(produit); // ajouter un nouvel element au tableau
    }

    public supprimerProduit(prod: Produit) {
        //supprimer le produit prod du tableau 
        const index = this.produits.indexOf(prod, 0);
        if (index > -1) {
            this.produits.splice(index, 1);
        }

        //ou Bien

        /* this.produits.forEach((cur, index) => { if(prod.idProduit === cur.idProduit) { this.produits.splice(index, 1); } }); */
    }

    public consulterProduit(id: number): Produit {
        return this.produits.find(p => p.idProduit == id)!; //find => va chercher le premier element

    }

    public updateProduit(prod: Produit) {
        //chercher le produit prod du tableau produits
        const index = this.produits.indexOf(prod, 0);
        if (index > -1) {
            this.produits.splice(index, 1); //supprimer l'ancien éléments
            this.produits.splice(index, 0, prod); // insérer le nouvel élément
        }
    }
}
