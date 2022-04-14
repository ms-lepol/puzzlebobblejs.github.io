function verifBulles(matBulles, lance){
    /*Fonction qui verifie le nombre de voisins de meme couleur que la Bulle lancee
    Entrees : matrice de Bulles sur laquelle on joue et la Bulle lancee par le canon
    Sortie : nbSame l'entier du nbr de voisins identiques*/
    
    let tabSameVoisins = []; // le tableau des Bulles voisines qu'on va retourner
    
    tabVoisins = voisins(matBulles, lance);
    
    for (i = 0; i<tabVoisins.length; i++){
        if (lance.color = matBulles[tabVoisins[i].y][tabVoisins[i].x]){
            tabSameVoisins.push(new Bulle(tabVoisins[i].x,tabVoisins[i].y,tabVoisins[i].color));
        }
    } 
    
    /*On retourne maintenant le tableau de voisin identiques si sa longueur est differente de 1
    car il n'y a pas d'indetermination puisque a 0 il ne se passe rien alors qu'au
    dessus de 2 on fait forcement tomber.*/
    if (tabSameVoisins.length == 0 ){
        return tabSameVoisins;
    }
    else if (tabSameVoisins == 1 && 
        verifBulles(matBulles, tabSameVoisins[0]).length == 1) {

        return tabSameVoisins;
    }
    /*Dans le cas ou la longueur de tabVoisins = 1, cela signifie que la Bulle lancee a autour 
    d'elle un seul voisin de meme couleur. Or ce voisin peut avoir lui un 
    voisin de la meme couleur qui n'est pas autour de la Bulle lancee.
    Donc on ajoute au nbSame le nbSame du voisin moins 1 car on ne 
    compte pas la Bulle deja lancee.*/
    else {
        for (i = 0; i < tabSameVoisins.length; i++){
            nvTabSameVoisins = verifBulles(matBulles, tabSameVoisins[i]);
                for (j = 0; j < nvTabSameVoisins.length; j++){
                    tabSameVoisins.push(nvTabSameVoisins[j]);
                    tabSameVoisins.splice(tabVoisins.indexOff(lance),1);
                }
        }
        return tabSameVoisins;
    }
}

function voisins(matBulles, lance){
    
    let tabVoisins = []; // Tableau de voisins retourné a la fin
    let voisin = new Bulle(); // voisin de Type Bulle
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
        },
        {
            x : 1,
            y : -1
        }
        ]; // Tableau permettant de regarder chaques voisins d'une bulle
    
    for (i = 0; i<tab.length; i++){
    
        if (matBulles[Math.trunc(lance.y) + tab[i].y][Math.trunc(lance.x) + tab[i].x]){
            
            voisin.x = lance.x + tab[i].x; // x+1 : y et y-1 ; x-1 : y et y+1 ; x : y-1
            voisin.y = lance.y + tab[i].y; // y : x-1 et x+1; y+1 : x-1 et x ; y-1 : x 
            tabVoisins.push(voisin);
        }
    }
    console.log("Trouvé!")
    return tabVoisins;
}
    
