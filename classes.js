       
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
//Definition des niveaux
var lvl1 = {
    matBull :  [['b','b','b','b','b','b','b','b'],
                ['v','v','v','v','v','v','v','P'],
                ['0','0','0','0','0','0','r','j'],
                ['0','0','0','0','0','0','0','P'],
                ['0','0','0','0','0','0','0','0'],
                ['0','0','0','0','0','0','0','P'],
                ['0','0','0','0','0','0','0','0'],
                ['0','0','0','0','0','0','0','P'],
                ['0','0','0','0','0','0','0','0'],
                ['0','0','0','0','0','0','0','P'],
                ['0','0','0','0','0','0','0','0'],
                ['r','0','0','0','0','0','0','P']],
    round : 1,
    numEtape : 1
};

var nvActuel = lvl1;



//VARIABLE DE LA MATRICE
const WIDTHMAT = 8;
const HEIGHTMAT = 12; 

//VARIABLES POUR AFFICHAGE DE LA MATRICE
var centerXinit = 60;
var centerYinit = 60;
var radius = 30
const WIDTH = WIDTHMAT*2*radius+centerXinit
const HEIGHT = HEIGHTMAT*2*radius+centerYinit

//VARIABLES POUR AFFICHAGE DU CANON
var canonXinit = WIDTH/2;
var canonYinit = HEIGHT;

 //Variables générales de jeu
let round = 0;
let score = 0;
let timerLaunchB = 0;
let timerRound = 0;
let countFallWall = 0;
let direction = 90;
var bubbleLaunched;

var tabchar = ['b','v','j','r','g','o','p','n'];

// clic sur la zone de jeu (coordonnées relatives au canvas)
let clic = { x: 0, y: 0 };
    
/* Définition d'un canon  */
var canon  = {
    suivant : new Bulle(3,11,getRandBulleColor(tabchar)),
    courant : new Bulle(3,11,getRandBulleColor(tabchar)),
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
    launchBulle(nvActuel.matBull, canon);
}
    
    
/**
 *  Fonction réalisant le rendu de l'état du jeu
 */
function render() {
   // effacement de l'écran
    context.clearRect(0, 0, context.width, context.height);
    affichageMatBulles(nvActuel.matBull)
    affichageCanon(canon)
    afficherLaunchedBulle(canon)
}
    
/**
 *  Fonction appelée lorsqu'une touche du clavier est appuyée
 *  Associée à l'événement "keyDown"
 */
function captureAppuiToucheClavier(event) {
    // pratique pour connaître les keyCode des touches du clavier :
    //  --> http://www.cambiaresearch.com/articles/15/javascript-key-codes
    if (event.code == 'Space'){
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

function affichageMatBulles(matBull){
    //AFFICHAGE TRAIT CANON
    context.beginPath();
    context.moveTo(centerXinit, HEIGHT-radius*3);
    context.lineTo(WIDTH, HEIGHT-radius*3);
    context.stroke();

   
   
    for (let l=0;l<HEIGHTMAT;l++){
        for(let c=0;c<WIDTHMAT;c++){
           if(matBull[l][c] !="0" && matBull[l][c] != "P"){
                if (matBull[l][WIDTHMAT-1] !='P'){
                    context.fillStyle = getHexColor(matBull[l][c]);
                    context.beginPath()
                    context.arc(centerXinit+2*radius*c,centerYinit+2*radius*l,radius,0,2 * Math.PI, false);
                    context.fill();
                    context.lineWidth = 5;
                    context.strokeStyle = '#003300';
                    context.stroke();
                } else {
                    context.fillStyle = getHexColor(matBull[l][c]);
                    context.beginPath()
                    context.arc(radius+centerXinit+2*radius*c,centerYinit+2*radius*l,radius,0,2 * Math.PI, false);
                    context.fill();
                    context.lineWidth = 5;
                    context.strokeStyle = '#003300';
                    context.stroke();
                }
           }
        }
    }
}

function affichageCanon(canon){
    
    //AFFICHAGE TRAIT CANON
    context.beginPath();
    let dir = convertToRadians(canon.angle);
    let vectdiraff = new Position(Math.cos(dir),Math.sin(dir))
    context.moveTo(canonXinit, canonYinit);
    context.lineTo(canonXinit + vectdiraff.x*100, canonYinit - vectdiraff.y*100);
    context.stroke();

    //AFFICHAGE BOULES - COURANT
    context.fillStyle = getHexColor(canon.courant.color);
    context.beginPath()
    context.arc(canonXinit,canonYinit+2*radius,radius,0,2 * Math.PI, false);
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = '#003300';
    context.stroke();

    //AFFICHAGE BOULES - SUIVANT
    context.fillStyle = getHexColor(canon.suivant.color);
    context.beginPath()
    context.arc(canonXinit-2*radius,canonYinit+2*radius,radius,0,2 * Math.PI, false);
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = '#003300';
    context.stroke();
}

function convertToRadians(degree) {
    return degree*(Math.PI/180);
}

function launchBulle(matBull, canon){
    var newbubble = new Position()
    newbubble.x = canon.courant.x;
    newbubble.y = canon.courant.y;
    xmax = WIDTHMAT;
    ymax = 0;
    
    if(bubbleLaunched){
        console.log("launched")
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
        if (matBull[Math.trunc(newbubble.y)][Math.trunc(newbubble.x)] == '0' || matBull[Math.trunc(newbubble.y)][Math.trunc(newbubble.x)]== 'P'){
            canon.courant.x = newbubble.x;
            canon.courant.y = newbubble.y;   
        }
        else{
            bubbleLaunched = false;
            console.log(newbubble.x)
            console.log(newbubble.y)
            console.log(canon.courant.x)
            console.log(canon.courant.y)
            if (matBull[Math.trunc(canon.courant.y)][Math.trunc(canon.courant.x)] != 'P'){
                matBull[Math.trunc(canon.courant.y)][Math.trunc(canon.courant.x)] = canon.courant.color;
            }
            else {
                if (matBull[Math.trunc(canon.courant.y)][Math.trunc(canon.courant.x)-1] == '0') {
                    matBull[Math.trunc(canon.courant.y)][Math.trunc(canon.courant.x)-1] = canon.courant.color;  
                } else {
                    matBull[Math.trunc(canon.courant.y)+1][Math.trunc(canon.courant.x)] = canon.courant.color;  
                }
            }
            canon.courant = canon.suivant;
            canon.suivant = new Bulle(3,11,getRandBulleColor(tabchar));
        }
        
    }
    
}

function afficherLaunchedBulle(canon){
        if (bubbleLaunched){
            context.fillStyle = getHexColor(canon.courant.color);
            context.beginPath()
            context.arc(centerXinit+2*radius*canon.courant.x,centerYinit+2*radius*canon.courant.y,radius,0,2 * Math.PI, false);
            context.fill();
            context.lineWidth = 5;
            context.strokeStyle = '#003300';
            context.stroke();
        }
}

function getHexColor(char){
    let couleurBulle;
    switch(char){
        case 'b': couleurBulle = '#6fa8dc'; break;
        case 'v': couleurBulle = 'green'; break;
        case 'j': couleurBulle = '#ffa900'; break;
        case 'r': couleurBulle = 'red'; break;
        case 'g': couleurBulle = 'grey'; break;
        case 'o': couleurBulle = 'orange'; break;
        case 'n': couleurBulle = 'black'; break;
        case 'p': couleurBulle = 'purple'; break;
    }
    return couleurBulle;
}
/*----------ZONE DE TEST----------*/
console.log(canon.courant.color)


