function verifBulles(matBulles, lance){
/*Fonction qui verifie le nombre de voisins de meme couleur que la Bulle lancee
Entrees : matrice de Bulles sur laquelle on joue et la Bulle lancee par le canon
Sortie : nbSame l'entier du nbr de voisins identiques*/

    let tabSameVoisins = []; // le tableau des Bulles voisines qu'on va retourner
    let voisin; //voisin qu'on va mettre dans le tableau final
    voisin.color = lance.color; // puisque le voisin va etre identique on l'initialise avec la couleur de la Bulle lancee

    tabVoisins = voisins(matBulles, lance);

    for (i = 0; i<tabVoisins.length; i++){
        if (lance.color = matBulles[tabVoisins.pos.x][tabVoisins.pos.y]){
            tabSameVoisins.push(matBulles[tabVoisins.pos.x][tabVoisins.pos.y]);
        }
    } 

    /*On retourne maintenant le tableau de voisin identiques si sa longueur est differente de 1
    car il n'y a pas d'indetermination puisque a 0 il ne se passe rien alors qu'au
    dessus de 2 on fait forcement tomber.*/
    if (tabSameVoisins.length != 1 ){
        return tabSameVoisins;
    }
    /*Dans le cas ou la longueur de tabVoisins = 1, cela signifie que la Bulle lancee a autour 
    d'elle un seul voisin de meme couleur. Or ce voisin peut avoir lui un 
    voisin de la meme couleur qui n'est pas autour de la Bulle lancee.
    Donc on ajoute au nbSame le nbSame du voisin moins 1 car on ne 
    compte pas la Bulle deja lancee.*/
    else {
        tabSameVoisins.push(verifBulles(matBulles, tabSameVoisins[0]));
        tabSameVoisins.splice(tabVoisins.indexOff(lance),1);
        return tabVoisins;
    }
}

function voisins(matBulles, bulle){

    let tabVoisins = [];
    let voisin;
    let tab = [
        {
            x : -1,
            y : 0
        },
        {
            x :-1,
            y : 1
        },
        {
            x : 0,
            y : -1
        },
        {  
            x : 1,
            y : 0
        },
        {
            x : 1,
            y : 1
        }
        ];

    if (matBulles[l][c] == true){

        for (i = 0; i<tab.length; i++){

            voisin.pos.x = lance.pos.x + tab[i].x; // x+1 : y et y-1 ; x-1 : y et y+1 ; x : y-1
            voisin.pos.y = lance.pos.y + tab[i].y; // y : x-1 et x+1; y+1 : x-1 et x ; y-1 : x 
            tabVoisins.push(voisin);
        }
    }

    return tabVoisins;
}
