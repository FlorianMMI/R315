/* Rappel : La fonction setup est exécutée
  une seule fois au lancement du programme */
function setup() {
   createCanvas(windowWidth, windowHeight);
   background(100);
}


// fonction qui dessine un rectangle de 100 pixels de large et
// 50 de haut avec le texte label à peu près au centre
function rectWithLabel(label) {
  rect(0, 0, 100, 50);
  text(label, 50, 25);
}
function draw() {
   translate(100, 100);
   scale(0.7);
  circle(0, 0, 30);


  translate(100, 0 );
  scale(1);
 circle(0, 0, 30);

  translate(200, 0);
  scale(3);
  circle(0, 0, 30);

  translate(200, 0);
  scale(3.5);
  circle(0, 0, 30);
}








