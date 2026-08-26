import { Injectable, Service } from '@angular/core';
import { Produit } from '../model/produit.model';
import { Categorie } from '../model/categorie.model';

@Injectable({
    providedIn: 'root'
})
export class ProduitService {
   
    produits: Produit[];
    categories : Categorie[];

    constructor() {
        this.categories = [
            {idCat : 1, nomCat : "PC"},
            {idCat : 1, nomCat : "Imprimante"}
        ];
        
        this.produits = [
            { idProduit: 1, nomProduit: "PC Asus", prixProduit: 3000.600, dateCreation: new Date("01/14/2011"), categorie : {idCat : 1, nomCat : "PC"}},
            { idProduit: 2, nomProduit: "Imprimante Epson", prixProduit: 450, dateCreation: new Date("12/17/2010"), categorie : {idCat : 2, nomCat : "Imprimante"} },
            { idProduit: 3, nomProduit: "Tablette Samsung", prixProduit: 900.123, dateCreation: new Date("02/20/2020"), categorie : {idCat : 1, nomCat : "PC"} }
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

    public listeCategorie(): Categorie[]{
        return this.categories;
    }

    
    public consulterCategorie(id:number): Categorie{
        return this.categories.find(c => c.idCat == id)!;
    }
}
