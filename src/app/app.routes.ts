import { Routes } from '@angular/router';
import { Produits } from './produit/produits'; 
import { AddProduit } from './add-produit/add-produit';
import { UpdateProduit } from './update-produit/update-produit';

export const routes: Routes = [
    {path: "produits", component: Produits}, // componsant qui vont s'afficher dans la balise <router-outlet><router-outlet /> (app.html)
    {path: "add-produit", component: AddProduit},
    {path: "", redirectTo: "produits", pathMatch: "full"}, //route par défaut
    {path: "updateProduit/:id", component: UpdateProduit}
];