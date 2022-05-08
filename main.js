       
//TYPE AGREGEE POSITION
class Position{
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
};

//TYPE AGREGEE BULLE
class Bulle extends Position{
    constructor(x,y,color){
        super(x,y);
        this.color = color;
    }
};

let context = null;
//Variable de la différence de temps entre deux frames
let dT;
let lastD = 0;
//Fonctions servant a creer les niveaux

function charRdm(tabChar){
    return (tabChar.length-1)*Math.random();
}

function createMatLvl(matBulle, tabChar){

    let isMatGood = false;
    let i = 1;
    let compt = 0;
    let sub;
    let colorRdm = getRandBulleColor(tabChar);

    while(!isMatGood){

        compt = 0;
        for(let l = 0; l<matBulle[0].length; l++){
            for(let c = 0; c<matBulle[1].length; c++){
                if (matBulle[l][c] == i){
                    matBulle[l][c] = colorRdm;
                }
                else {
                    compt ++;
                    if (compt == (matBulle[0].length*matBulle[1].length)){
                        isMatGood = true;
                    }
                    continue;
                }
            }
        }
        i++;

        do {
            sub = getRandBulleColor(tabChar);
        }
        while (sub == colorRdm);
        colorRdm = sub;
    }

    return matBulle;
}
//Definition des niveaux

/* [['0','0','0','0','0','0','0','0'],
    ['0','0','0','0','0','0','0','P'],
    ['0','0','0','0','0','0','0','0'],
    ['0','0','0','0','0','0','0','P'],
    ['0','0','0','0','0','0','0','0'],
    ['0','0','0','0','0','0','0','P'],
    ['0','0','0','0','0','0','0','0'],
    ['0','0','0','0','0','0','0','P'],
    ['0','0','0','0','0','0','0','0'],
    ['0','0','0','0','0','0','0','P'],
    ['0','0','0','0','0','0','0','0'],
    ['0','0','0','0','0','0','0','P']];*/

    let tab4Char = ['b','v','j','r'];
    let tab6Char = ['b','v','j','r','o','p'];
    let tab8Char = ['b','v','j','r','g','o','p','w'];
    
    let matBulle1 = 
        
       [[1,1,2,2,3,3,4,4],
        [1,1,2,2,3,3,4,'P'],
        [5,5,6,6,7,7,8,8],
        [5,6,6,7,7,8,8,'P'],
        ['0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','P'],
        ['0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','P'],
        ['0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','P'],
        ['0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','P']];
    
    let lvl1 = {
        matBulle : createMatLvl(matBulle1, tab4Char),
        round : 1,
        numEtape : 1
    };
    
    let matBulle2 = 
    
       [['0','0','0','g','g','0','0','0'],
        ['0','0','0',1,'0','0','0','P'],
        ['0','0','0',2,'0','0','0','0'],
        ['0','0','0',3,'0','0','0','P'],
        ['0','0','0',4,'0','0','0','0'],
        ['0','0','0',5,'0','0','0','P'],
        ['0','0','0',6,'0','0','0','0'],
        ['0','0','0',7,'0','0','0','P'],
        ['0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','P'],
        ['0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','P']];
        
    let lvl2 = {
        matBulle : createMatLvl(matBulle2, tab8Char),
        round : 1,
        numEtape : 1
    };
    
    let matBulle3 = 
    
       [[1,'0','0','0','0','0','0',1],
        [2,3,4,5,6,7,8,'P'],
        [9,'0','0','0','0','0','0',10],
        [11,12,13,14,15,16,17,'P'],
        ['0','0','0',18,'0','0','0','0'],
        ['0','0','0',19,'0','0','0','P'],
        ['0','0','0',20,'0','0','0','0'],
        ['0','0','0','0','0','0','0','P'],
        ['0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','P'],
        ['0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','P']];
        
    let lvl3 = {
        matBulle : createMatLvl(matBulle3, tab4Char),
        round : 1,
        numEtape : 1
    };
    
    let matBulle4 = 
    
       [['0',1,1,'0','0',2,2,'0'],
        ['0',3,'0','0','0',4,'0','P'],
        ['0',5,'0','0','0',9,'0','0'],
        ['0',5,'0','0','0',9,'0','P'],
        ['0',6,'0','0','0',10,'0','0'],
        ['0',7,'0','0','0',11,'0','P'],
        ['0',8,'0','0','0',12,'0','0'],
        ['0',8,'0','0','0',12,'0','P'],
        ['0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','P'],
        ['0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','P']];
    
    let lvl4 = {
        matBulle : createMatLvl(matBulle4, tab8Char),
        round : 1,
        numEtape : 1
    };
    
    let matBulle5 = 
    
       [['0',1,'0',2,'0',3,'0',4],
        [5,'0',7,'0',12,'0',16,'P'],
        [6,'0',8,'0',13,'0',17,'0'],
        ['0',9,'0',13,'0',17,'0','P'],
        ['0',10,'0',14,'0',18,'0','0'],
        [11,'0',14,'0',18,'0','0','P'],
        ['0','0',15,'0',19,'0','0','0'],
        ['0','0','0',20,'0','0','0','P'],
        ['0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','P'],
        ['0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','P']];
    
    let lvl5 = {
        matBulle : createMatLvl(matBulle5, tab6Char),
        round : 1,
        numEtape : 1
    };
let tabLVL = [lvl1,lvl2,lvl3,lvl4,lvl5]
let lvlIndex = 0;
let nvActuel = tabLVL[lvlIndex];
 


//VARIABLE DE LA MATRICE
const WIDTHMAT = 8;
const HEIGHTMAT = 12; 

//VARIABLES POUR AFFICHAGE DE LA MATRICE

var centerXinit = 60;
var centerYinit = 60;
var radius = 32
const WIDTH = WIDTHMAT*2*radius+centerXinit
const HEIGHT = HEIGHTMAT*2*radius+centerYinit
let srcY = 0;
//VARIABLES POUR AFFICHAGE DU CANON
let canonW = 110
let canonH = 275
var canonXinit = WIDTH/2-canonW/4;
var canonYinit = HEIGHT;

 //Variables générales de jeu
let round = 0;
let score = 0;
let timerLaunchB = 0;
let timerRound = 0;
let countFallWall = 0;
let direction = 90;
var bubbleLaunched;


var tabchar = ['b','v','j','r','g','o','p','w'];
var cluster = []
// clic sur la zone de jeu (coordonnées relatives au canvas)
let clic = { x: 0, y: 0 };
    
/* Définition d'un canon  */
var canon  = {
    suivant : new Bulle(3.5,11,getRandBulleColor(getCurrentTabColorBulles(nvActuel.matBulle))),
    courant : new Bulle(3.5,11,getRandBulleColor(getCurrentTabColorBulles(nvActuel.matBulle))),
    angle : 90
};

//VARIABLES DE DEPLACEMENT
let speed = 0.5
let dir = convertToRadians(canon.angle);
let vectdir = new Position(Math.cos(dir)*speed,speed*Math.sin(dir));

        
// initialisation (appelée au chargement du corps du document <body onload="init">)    
function init() {
        // instanciation de la variable globale contenant le contexte
    context = document.getElementById("cvs").getContext("2d");
    context.width = document.getElementById("cvs").width;
    context.height = document.getElementById("cvs").height;
    
    
    //Initialisation du background du jeu
    bgimg = document.createElement('img');
    bgimg.src = "assets/bg.png";

    //Initialisation des sprites du jeu
    txtrBulle = document.createElement('img');
    txtrBulle.src = "assets/bulles-export.png";

    txtrCanon = document.createElement('img');
    txtrCanon.src = "assets/canon.png";

    border = document.createElement('img');
    border.src = "assets/border.png";
    
    ceiling = document.createElement('img');
    ceiling.src = "assets/ceiling.png";
    // 2 écouteurs pour le clavier (appui/relâchement d'une touche)
    document.addEventListener("keydown", captureAppuiToucheClavier)
    document.addEventListener("keyup", captureRelacheToucheClavier)
    // on associe au document un écouteur d'événements souris
    //document.addEventListener("click", captureClicSouris)
    // --> ces événements vont appeler les fonctions captureXYZ définies après.
                        
    // lancement de la boucle de jeu
    boucleDeJeu();
}
    
    
function boucleDeJeu() {
        // mise à jour de l'état du jeu
    update(Date.now());    
        // affichage de l'état du jeu
    render();
        // rappel de la boucle de jeu 
        // requestAnimationFrame est une fonction JS servant à pré-calculer le prochain affichage
        //  http://www.html5canvastutorials.com/advanced/html5-canvas-animation-stage/
    requestAnimationFrame(boucleDeJeu);
}
    
    
/**
*  Mise à jour de l'état du jeu
*  @param  d   date courante
*/
function update(d) {
    let dT = d-lastD;
    lastD=d;
    launchBulle(nvActuel.matBulle, canon);
    
}
    
    
/**
 *  Fonction réalisant le rendu de l'état du jeu
 */
function render() {
   // effacement de l'écran
    context.clearRect(0, 0, context.width, context.height);
    drawBackground();
    affichageMatBulles(nvActuel.matBulle)
    affichageCanon(canon)
    afficherLaunchedBulle(canon)
    afficherScore()
    
}
    
/**
 *  Fonction appelée lorsqu'une touche du clavier est appuyée
 *  Associée à l'événement "keyDown"
 */
function captureAppuiToucheClavier(event) {
    // pratique pour connaître les keyCode des touches du clavier :
    //  --> http://www.cambiaresearch.com/articles/15/javascript-key-codes
    if (event.code == 'Space' && !bubbleLaunched){
        speed = 0.3
        dir = convertToRadians(canon.angle);
        vectdir = new Position(Math.cos(dir)*speed,speed*Math.sin(dir));
        bubbleLaunched = true;
        
    }
    if (event.code == 'ArrowLeft' && canon.angle <170){
        canon.angle+=1;
    }

    if (event.code == 'ArrowRight' && canon.angle > 10 ){
        canon.angle-=1;
    }
    if (event.code == 'PageUp' && srcY < 2560){
        srcY += 160;
    }
    if (event.code == 'PageDown' && srcY > 0){
        srcY -= 160;
    }

}
    
/**
 *  Fonction appelée lorsqu'une touche du clavier est relâchée
 *  Associée à l'événement "keyUp"
 */
function captureRelacheToucheClavier(event) {
    if (event.code == 'ArrowLeft' || event.code == 'ArrowRight'){
        canon.angle+=0;
    }
} 


//ENTREE : tableau de caractère qui définit la couleur que peux prendre la boule
//Fonction qui renvoie un caractère aléatoire dans d'un tableau de caractère pour définir la couleur
function getRandBulleColor(charac){
    pos = Math.trunc(charac.length*Math.random());
    return charac[pos];
}

function affichageMatBulles(matBulle){
    //AFFICHAGE TRAIT CANON
    context.beginPath();
    context.moveTo(centerXinit, HEIGHT-radius*3);
    context.lineTo(WIDTH, HEIGHT-radius*3);
    context.stroke();

   
   
    for (let l=0;l<HEIGHTMAT;l++){
        for(let c=0;c<WIDTHMAT;c++){
           if(matBulle[l][c] !="0" && matBulle[l][c] != "P"){
                if (matBulle[l][WIDTHMAT-1] !='P'){
                    context.drawImage(txtrBulle, // img src
                                    getBulleImg(matBulle[l][c]), //x pour récupérer la txt dans la source
                                    srcY,64,64, //Zone de "crop" de l'image de la source
                                    centerXinit+radius*0.5+2*radius*c,centerYinit+2*radius*l, //position d'affichage sur le canvas
                                    radius*2,radius*2) //width et height sur le canvas
                } else {
                    context.drawImage(txtrBulle, // img src
                                    getBulleImg(matBulle[l][c]), //x pour récupérer la txt dans la source
                                    srcY,64,64, //Zone de "crop" de l'image de la source
                                    radius*1.5+centerXinit+2*radius*c,centerYinit+2*radius*l, //position d'affichage sur le canvas
                                    radius*2,radius*2) //width et height sur le canvas
                    }
           }
        }
    }
}

function affichageCanon(canon){
    
    //AFFICHAGE TRAIT CANON
    //context.drawImage(txtrCanon, canonXinit, canonYinit-radius,63,162);
    context.save();
    
    context.translate(canonXinit+canonW/2, canonYinit+canonH/2);
    context.rotate(-convertToRadians(canon.angle+90));
    
    context.drawImage(txtrCanon, -canonW/2,-canonH/2,canonW,canonH);
    
    context.restore();
    //AFFICHAGE BOULES - COURANT
    context.drawImage(txtrBulle,
        getBulleImg(canon.courant.color),
        srcY,64,64,
        canonXinit,canonYinit+2*radius,
        radius*2,radius*2)


    //AFFICHAGE BOULES - SUIVANT
    
    context.drawImage(txtrBulle, // img src
        getBulleImg(canon.suivant.color), //x pour récupérer la txt dans la source
        srcY,64,64, //Zone de "crop" de l'image de la source
        canonXinit-2*radius,canonYinit+2*radius, //position d'affichage sur le canvas
        radius*2,radius*2) //width et height sur le canvas

}

function convertToRadians(degree) {
    return degree*(Math.PI/180);
}

function launchBulle(matBulle, canon){
    var newbubble = new Position()
    let matPos = new Position()
    newbubble.x = canon.courant.x;
    newbubble.y = canon.courant.y;
    xmax = WIDTHMAT;
    ymax = 0;
    
    if(bubbleLaunched){
        console.log("launched")
        speed = speed*speed;
        //Déplacement en X : vérification du mur - pas de rebond
        if (0 < canon.courant.x + vectdir.x && canon.courant.x + vectdir.x < xmax){
            newbubble.x = canon.courant.x + vectdir.x;
        }
        else{
            //Rebond sur le mur de droite
            if (canon.courant.x + vectdir.x > xmax){
                vectdir.x = -vectdir.x;
                newbubble.x = canon.courant.x + vectdir.x;
            }
            //Rebond sur le mur de gauche
            else if (canon.courant.x + vectdir.x <= 0 ){
                newbubble.x = 1 - canon.courant.x;
                vectdir.x = - vectdir.x;
            }
        }
        if (ymax <= canon.courant.y - vectdir.y){
            newbubble.y = canon.courant.y - vectdir.y;
        }

        //Définition de la position de la matrice de la nouvelle position de la bulle
        matPos.x = Math.trunc(newbubble.x);
        matPos.y = Math.trunc(newbubble.y);
        
        //Si la nouvelle position de la bulle est libre, on effectue le mouvement
        
        if ((matBulle[matPos.y][matPos.x] == '0' || matBulle[matPos.y][matPos.x]== 'P') && (canon.courant.y>=ymax+1) ){
            canon.courant.x = newbubble.x;
            canon.courant.y = newbubble.y;   
        }
        //Sinon on garde la position de la bulle et on place cette dernière
        else{
            
            matPos.x = Math.trunc(canon.courant.x);
            canon.courant.x = matPos.x;
            matPos.y = Math.trunc(canon.courant.y);
            canon.courant.y = matPos.y;
            bubbleLaunched = false;
            /*
            console.log(newbubble.x)
            console.log(newbubble.y)
            console.log(canon.courant.x)
            console.log(canon.courant.y)
            */
            if (matPos.y == ymax){
                matBulle[matPos.y][matPos.x] = canon.courant.color;
            }
            if (matBulle[matPos.y][matPos.x] != 'P'){
                matBulle[matPos.y][matPos.x] = canon.courant.color;
            }
            else {
                if (matBulle[matPos.y][matPos.x-1] == '0') {
                    matBulle[matPos.y][matPos.x-1] = canon.courant.color; 
                    canon.courant.x -= 1;

                } else {
                    matBulle[matPos.y+1][matPos.x] = canon.courant.color;  
                    canon.courant.y +=1;
                }
            }
            gameOver(matBulle)
            
            cluster = trouveCluster(matBulle,canon.courant,true)
            
            if (cluster.length>=3){
                //breakingBulle = true;
                score+= cluster.length*10
                breakBulle(matBulle,cluster);
                
            }
            //sameVoisins(matBulle,canon.courant)
            var clusterFlottant = findBullesFlottante(matBulle);
            console.log("nombre de bulles volantes : ", clusterFlottant.length)
            console.log(clusterFlottant)
           if (clusterFlottant != -1){ 
                score+= clusterFlottant.length*20
                breakBulle(matBulle,clusterFlottant);
            }
            if(checkVictory(matBulle)){
                if (lvlIndex != tabLVL.length-1){
                    lvlIndex += 1;
                    nvActuel = tabLVL[lvlIndex];
                    canon.courant = new Bulle(3.5,11,getRandBulleColor(getCurrentTabColorBulles(matBulle)));
                    canon.suivant = new Bulle(3.5,11,getRandBulleColor(getCurrentTabColorBulles(matBulle)));
                }    
            }
            else{
                //Chargement du canon
                canon.courant = canon.suivant;
                canon.suivant = new Bulle(3.5,11,getRandBulleColor(getCurrentTabColorBulles(matBulle)));
            }
        }
        
    }
    
}
function breakBulle(matBulles, cluster){
    for (let i = 0; i < cluster.length; i++){
        //console.log(cluster[0].y)
        matBulles[cluster[i].y][cluster[i].x] = '0';
    }
}

function afficherLaunchedBulle(canon){
        if (bubbleLaunched){
            context.drawImage(txtrBulle,
                              getBulleImg(canon.courant.color),
                              srcY,64,64,
                              centerXinit+2*radius*canon.courant.x,
                              centerYinit+2*radius*canon.courant.y,
                              radius*2,radius*2)
            /*
            context.fillStyle = getBulleImg(canon.courant.color);
            context.beginPath()
            context.arc(centerXinit+2*radius*canon.courant.x,centerYinit+2*radius*canon.courant.y,radius,0,2 * Math.PI, false);
            context.fill();
            context.lineWidth = 5;
            context.strokeStyle = '#003300';
            context.stroke();
            */
        }
}

// Find floating clusters
function findBullesFlottante(matBulles) {

    let clusterTrouves = [];
    let currentCluster = [];
    let processed = [];
    // On vérifie toutes les bulles
    for (let i=0; i<HEIGHTMAT; i++) {
        for (let j=0; j<WIDTHMAT; j++) {
            let bulle = new Bulle(j,i,matBulles[i][j]);
                // Find all attached bulles
            if (!findBulle(processed,bulle) && bulle.color!='0' && bulle.color!='P'){
                currentCluster = trouveCluster(matBulles, bulle, false);


                for (let p = 0; p < currentCluster.length;p++){
                    processed.push(currentCluster[p]);
                }
                
                //On vérifie si le cluster vole
                let floating = true;
                for (let k=0; k<currentCluster.length; k++) {
                    if (currentCluster[k].y == 0) {
                        // bulle is attached to the roof
                        floating = false;
                        break;
                    }
                }
                
                if (floating) {
                    // Found a floating cluster
                    for (let f = 0; f < currentCluster.length;f++){
                        clusterTrouves.push(currentCluster[f]);
                    }
                }
                
            }
        }
    }
    if (clusterTrouves.length>0){
        
        return clusterTrouves;
    } else {
        return -1;
    }
}
// Find cluster at the specified tile location
function trouveCluster(matBulles, lance, sameColor){
 
    // Initialize the toprocess array with the specified tile
    let toProcess = [lance];
    
    let clusterTrouve = [];
    
    let tabVoisins;

    while (toProcess.length > 0) {
        // Pop the last element from the array
        let currentBulle = toProcess.pop();
        
        // Skip processed and empty tiles
        if (currentBulle.color == '0') {
            continue;
        }
        // Check if current tile has the right type, if matchtype is true
        if (!sameColor || (currentBulle.color == lance.color)) {
            // Add current tile to the cluster
            clusterTrouve.push(currentBulle);
 
            tabVoisins = voisins(matBulles,currentBulle);
            for (let i = 0;i<tabVoisins.length;i++){
                if (!findBulle(clusterTrouve,tabVoisins[i]) && !findBulle(toProcess,tabVoisins[i])){
                    toProcess.push(tabVoisins[i]);
                }
            } 
        }
    }
 
    // Return the found cluster
    return clusterTrouve;
}

function findBulle(tabBulle,bulle){
    if (tabBulle.length > 0) {
        for (let i = 0; i <tabBulle.length;i++){
            if (tabBulle[i].x == bulle.x && tabBulle[i].y ==bulle.y && tabBulle[i].color == bulle.color){
                return true;
            }
        }
    }
    return false;
}


// Neighbor offset table
var voisinsPairsImpairs = [[[1, 0], [0, 1], [-1, 1], [-1, 0], [-1, -1], [0, -1]], // Impairs row tiles
                        [[-1, 0], [0, 1], [0, -1], [1, 0], [1, 1], [1, -1]]];  // pairs row tiles
 
// Get the neighbors of the specified tile
function voisins(matBulle, bulle) {
    let rangeeBulle;
    if (matBulle[bulle.y][WIDTHMAT-1] == 'P'){ 
        rangeeBulle = 1; 
    }
    else {
        rangeeBulle = 0; 
    } // Even or odd row
    let tabVoisins = [];
    
    // Get the neighbor offsets for the specified tile
    let n = voisinsPairsImpairs[rangeeBulle];
 
    // Get the neighbors
    for (let i=0; i<n.length; i++) {
        // Neighbor coordinate
        let nx = bulle.x + n[i][0];
        let ny = bulle.y + n[i][1];
 
        // Make sure the tile is valid
        if (nx >= 0 && nx < WIDTHMAT && ny >= 0 && ny < HEIGHTMAT) {
            if(matBulle[ny][nx]!='0' && matBulle[ny][nx]!='P'){
                tabVoisins.push(new Bulle(nx,ny,matBulle[ny][nx]));
            }
            
        }
    }
    
    return tabVoisins;
}
function drawBackground(){
    context.drawImage(bgimg,0,0,context.width,context.height)
    context.drawImage(border,centerXinit-radius,0,WIDTH+radius,context.height)
}
function getRGBColor(char,alpha){
    let couleurBulle;
    switch(char){
        case 'b': couleurBulle = 'rgb(0, 128, 255,'; break;
        case 'v': couleurBulle = 'rgb(0, 204, 0,'; break;
        case 'j': couleurBulle = 'rgb(255, 255, 0,'; break;
        case 'r': couleurBulle = 'rgb(255, 51, 51,'; break;
        case 'g': couleurBulle = 'rgb(192, 192, 192,'; break;
        case 'o': couleurBulle = 'rgb(255, 153, 51,'; break;
        case 'n': couleurBulle = 'rgb(32, 32, 32,'; break;
        case 'p': couleurBulle = 'rgb(178, 102, 255,'; break;
    }
    return couleurBulle + alpha +')';
    
}
function getCurrentTabColorBulles(matBulle){

    let tabColors = [];
    for (let l = 0; l<matBulle.length; l++){
        for (let c = 0; c<matBulle[0].length; c++){
            if (!isIn(matBulle[l][c],tabColors)&&(matBulle[l][c] != '0' && matBulle[l][c] != 'P')){
                tabColors.push(matBulle[l][c]);
            }
        }
    } 

    return tabColors;
}
function isIn(element, tab){
    if (tab.length>0){
        for (let i = 0; i<tab.length; i++){
            if (element == tab[i]){
                return true;
            }
        }
    }
    return false;
}
function getBulleImg(char){
    let sxBulle;
    switch(char){
        case 'b': sxBulle = 272*4; break;
        case 'v': sxBulle = 204*4; break;
        case 'j': sxBulle = 136*4; break;
        case 'r': sxBulle = 0; break;
        case 'g': sxBulle = 408*4; break;
        case 'o': sxBulle = 68*4; break;
        case 'w': sxBulle = 476*4; break;
        case 'p': sxBulle = 340*4; break;
    }
    return sxBulle
}

function gameOver(matBulle){
    for (let i = 0;i<matBulle[0].length;i++){
        if ((matBulle[HEIGHTMAT-1][i] != '0') && (matBulle[HEIGHTMAT-1][i] != 'P')){
            console.log("perdu!")
        }
    }
}
function checkVictory(matBulle){
    for (let l = 0; l<matBulle.length; l++){
        for (let c = 0; c<matBulle[0].length; c++){
            if (matBulle[l][c] != '0' && matBulle[l][c] != 'P'){
                return false;
            }
        }
    return true;
    } 
}
function afficherScore(){
    context.fillStyle = 'white'
    context.font = '30px Helvetica';
    context.textAlign = "center";
    context.fillText('SCORE : ' + score,centerXinit,centerYinit)
    context.fillStyle = 'black';
    context.lineWidth = 5;
    context.strokeStyle = '#003300';
    context.stroke()
}
