/* Rappel : La fonction setup est exécutée
  une seule fois au lancement du programme */
function setup() {
   createCanvas(windowWidth, windowHeight);
   background(100);
}


/* Rappel : La fonction draw est exécutée en boucle
  tout le temps de l'exécution du programme*/
// function draw() {
//   push();
//   translate(400, 200);
//   rotate(PI/6);
//   rect(0, 0, 160, 20);
//   pop();
//   translate(400, 200);
//   rotate(PI/3);
//   rect(0, 0, 160, 20);
  
// }

function draw() {


  translate(400, 200);
  rotate(PI/6);
  rect(0, 0, 160, 20);
  translate(0, 0);
  rotate(PI/6);
  rect(0, 0, 160, 20);
}






