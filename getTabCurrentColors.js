function getTabColorBulles(matBulle){

    let tabColors = [];
    i = 0

    for (l = 0; l<matBulles.length(0); l++){
        for (c = 0; l<matBulle.length(1); c++){
            if (isIn(matBulle[l][c], tabColors)){
                tabColors[i] = matBulle[l][c];
                i++;
            }
        }
    } 

    return tabColors;
}

function isIn(element, tab){

    for (i = 0; i<tab.length; i++){
        if (element == tab[i]){
            return true;
        }
    }
    return false;
}
