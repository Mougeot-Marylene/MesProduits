import { Routes } from '@angular/router';
import { Produits } from './produit/produits'; 
import { AddProduit } from './add-produit/add-produit';
import { UpdateProduit } from './update-produit/update-produit';
import { RechercheParCategorie } from './recherche-par-categorie/recherche-par-categorie';
import { RechercheParNom } from './recherche-par-nom/recherche-par-nom';


export const routes: Routes = [
    {path: "produits", component: Produits}, // componsant qui vont s'afficher dans la balise <router-outlet><router-outlet /> (app.html)
    {path: "add-produit", component: AddProduit},
    {path: "rechercheParCategorie", component : RechercheParCategorie},
    {path: "rechercheParNom", component : RechercheParNom},
    {path: "", redirectTo: "produits", pathMatch: "full"}, //route par défaut
    {path: "updateProduit/:id", component: UpdateProduit}
];