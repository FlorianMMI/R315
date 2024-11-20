/* Rappel : La fonction setup est exécutée
  une seule fois au lancement du programme */
function setup() {
   createCanvas(windowWidth, windowHeight);
   background(100);
}


/* Rappel : La fonction draw est exécutée en boucle
  tout le temps de l'exécution du programme*/
function draw() {
    translate ( windowWidth / 2, windowHeight / 2)
   rect(0, 0, 30, 30);
   translate ( 35, 10);
   rect(0, 0, 30, 30);
}


// -15/10 --> Il sort du canvas sur la gauche
// 0 50 --> Il va 50 vers le bas (y) et un (x) reste collée (0)



