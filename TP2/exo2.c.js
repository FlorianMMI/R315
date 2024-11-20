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
  push()
  rectWithLabel("R1");
  translate(350, 300);
  translate( 350 , -300);
  rotate(PI/2);
  
  rectWithLabel("R2");

  translate( 350 , 0);
  rotate(PI/2);
  rectWithLabel("R3");

  translate( 700 , 0);
  rotate(PI/2);
  
  rectWithLabel("R4");
}








