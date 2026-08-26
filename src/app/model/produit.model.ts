
//export => poru que tous les composant du projet puisse utiliser la classe produit 
export class Produit {

    idProduit?: number;  // "?" rend l'attribut optionnel : on peut créer un Produit sans préciser d'id (utile avant l'envoi à l'API, où le backend génère l'id automatiquement)
    nomProduit?: string; 
    prixProduit?: number; 
    dateCreation?: Date;
}