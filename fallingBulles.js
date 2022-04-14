/*Fonction qui fait tomber les voisins identiques de la boule lancée
Entrés : matBoule la matrice de boules sur laquelle on joue
		 tabVoisins le tableau des voisins identiques de la boule lancee
Sortie : la matrice de boules avec les voisins tombés*/
function breakBulles(matBulles, lance){
    tabSameVoisins = verifBulle(matBulles, lance)
	
	for (i = 0; i < tabSameVoisins.length; i++) {
		matBulles[tabSameVoisins.pos.x][tabSameVoisins.pos.y] = '0';
		//Ici on parcourt la table des voisins identiques et on les fait tomber
    }
    matBulles[lance.x][lance.y] = 0;
	return matBulles;
}

/*Fonction qui fait tomber les boules qui n'ont aucunes attaches 
Entrées : matBoules la matrice de boules sur laquelle on joue
Sortie : la matrice avec les boules sans voisins tombés.*/
function fallBulles(matBulles){
	
	for (let l = 0; l < matBoules[0].length; c++){
		for (let c = 0; c < matBoules[1].length; c++){
            tabVoisins = voisins(matBoules, matBoules[l][c])
			if (tabVoisins.length == 0 ){
				matBoules[l][c] = 0;
				//Ici on va regarder si une boule n'a pas de voisin, dans ce cas, on la fait tomber.
            }
        }
	}
	return matBoules;
}			
