/* Rappel : La fonction setup est exécutée
  une seule fois au lancement du programme */
function setup() {
   createCanvas(windowWidth, windowHeight);
   background(100);
}


/* Rappel : La fonction draw est exécutée en boucle
  tout le temps de l'exécution du programme*/
function draw() {
  push();
  translate(50, 50);
  rect(0, 0, 30, 30);
  pop();
  translate(35, 10);
  rect(0, 0, 15, 15);
}





