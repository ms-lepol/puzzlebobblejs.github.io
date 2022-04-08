function verifBulles(matBulles, lance){
/*Fonction qui verifie le nombre de voisins de meme couleur que la Bulle lancee
Entrees : matrice de Bulles sur laquelle on joue et la Bulle lancee par le canon
Sortie : nbSame l'entier du nbr de voisins identiques*/

    let tabVoisins = []; // le tableau des Bulles voisines qu'on va retourner
    let voisin; //voisin qu'on va mettre dans le tableau final
    voisin.color = lance.color; // puisque le voisin va etre identique on l'initialise avec la couleur de la Bulle lancee

    indMaxL = longueur(0, matBulles)-1;
    indMaxC = longueur(1, matBulles)-1;
        
    if (matBulles[l][c]){
        /*On regarde si la Bulle est identique à son voisin (spécifié par le commentaire a droite)
        Pour tous les voisins autour de la Bulle.
        
        *faire avec deux boucles**/
        if(matBulles[lance.pos.x][lance.pos.y] == matBulles[lance.pos.x-1][lance.pos.y]){ //Haut Gauche

            voisin.pos.x = lance.pos.x-1; // On donne les coordonnes du voisin identique a voisin
            voisin.pos.y = lance.pos.y;
            tabVoisins.push(voisin); //On met voisin seul a la place nbSame-1 car else on commence a la position 1 
        }
        if(matBulles[lance.pos.x][lance.pos.y].color == matBulles[lance.pos.x-1][lance.pos.y+1].color){ //Haut Droite
            
            voisin.pos.x = lance.pos.x-1;
            voisin.pos.y = lance.pos.y+1;
            tabVoisins.push(voisin);
        }
        if(matBulles[lance.pos.x][lance.pos.y].color == matBulles[lance.pos.x][lance.pos.y-1].color){ //Gauche
            
            voisin.pos.x = lance.pos.x;
            voisin.pos.y = lance.pos.y-1;
            tabVoisins.push(voisin);
        }
        if(matBulles[lance.pos.x][lance.pos.y].color == matBulles[lance.pos.x][lance.pos.y+1].color){ //Droite
            
            voisin.pos.x = lance.pos.x;
            voisin.pos.y = lance.pos.y+1;
            tabVoisins.push(voisin);
        }
        if(matBulles[lance.pos.x][lance.pos.y].color == matBulles[lance.pos.x+1][lance.pos.y].color){ //Bas Gauche
            
            voisin.pos.x = lance.pos.x+1;
            voisin.pos.y = lance.pos.y;
            tabVoisins.push(voisin);
        }
        if(matBulles[indLB][indCB].color == matBulles[lance.pos.x+1][lance.pos.y+1].color){ //Bas Droite
            
            voisin.pos.x = lance.pos.x+1;
            voisin.pos.y = lance.pos.y+1;
            tabVoisins.push(voisin);
        }
    }

    /*On retourne maintenant le tableau de voisin identiques si sa longueur est differente de 1
    car il n'y a pas d'indetermination puisque a 0 il ne se passe rien alors qu'au
    dessus de 2 on fait forcement tomber.*/
    if (tabVoisins.length != 1 ){
        return tabVoisins;
    }
    /*Dans le cas ou la longueur de tabVoisins = 1, cela signifie que la Bulle lancee a autour 
    d'elle un seul voisin de meme couleur. Or ce voisin peut avoir lui un 
    voisin de la meme couleur qui n'est pas autour de la Bulle lancee.
    Donc on ajoute au nbSame le nbSame du voisin moins 1 car on ne 
    compte pas la Bulle deja lancee.*/
    else {
        tabVoisins.push(verifBulles(matBulles, voisin));
        tabVoisins.splice(tabVoisins.indexOff(lance),1);
        return tabVoisins;
    }
}
