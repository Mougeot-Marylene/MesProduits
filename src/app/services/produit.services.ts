import { Injectable, Service } from '@angular/core';
import { Produit } from '../model/produit.model';
import { Observable } from 'rxjs'; //design pattern
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Categorie } from '../model/categorie.model';
import { environment } from '../../environnements/environment';



//var dire a angular que les données retournées son du JSon
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
    providedIn: 'root'
})
export class ProduitService {

    produits!: Produit[]
    categories!: Categorie[];

    //private http : HttpClient => injection de dépendance PAR CONSRTUCTEUR
    constructor(private http: HttpClient) {

    }

    /*
        Observable<Produit[]> => elle retroune un tableau de produit de type Observable

        * toutes les api retourne des type Observable. c'est comme une promesse d'avoir un résultat plus tard. C'est un objet qui représente "quelque chose qui va arriver", pas encore la donnée elle-même.

        * Comment on "récupère" la vraie donnée : subscribe()
    */
    listeProduit(): Observable<Produit[]> {
        return this.http.get<Produit[]>(environment.apiURL);
    }


    ajouterProduit(prod: Produit): Observable<Produit> {
        return this.http.post<Produit>(environment.apiURL, prod, httpOptions);
    }

    supprimerProduit(id: number) {
        const url = `${environment.apiURL}/${id}`;
        return this.http.delete(url, httpOptions);
    }

    modifierProduit(prod: Produit): Observable<Produit> {
        return this.http.put<Produit>(environment.apiURL, prod, httpOptions);
    }

    consulterProduit(id: number): Observable<Produit> {
        const url = `${environment.apiURL}/${id}`;
        return this.http.get<Produit>(url);

    }

    listeCategories(): Observable<Categorie[]> {
        return this.http.get<Categorie[]>(environment.apiURL + "/cat");
    }

    rechercherParCategorie(idCat: number): Observable<Produit[]> {
        const url = `${environment.apiURL}/produitCat/${idCat}`;
        return this.http.get<Produit[]>(url);
    }

    rechercherParNom(nom: string): Observable<Produit[]> {
        const url = `${environment.apiURL}/prodsByName/${nom}`;
        return this.http.get<Produit[]>(url);
    }

    ajouterCategorie(cat: Categorie): Observable<Categorie> {
        return this.http.post<Categorie>(environment.apiURL, cat, httpOptions);
    }


}
