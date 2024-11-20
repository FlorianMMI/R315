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
  translate(50, 100);
  rect(0, 0, 40, 70);
  pop();
  
  push();
  translate(70, 100);
  ellipse(0, 0, 50, 50);
  
  
  translate(20, 70);
  line(0, 0, 30, 30);
  
  translate(-40, 0);
  line(0, 0, -30, 30);
  

  pop();
  
  translate(60 , 100);
  ellipse(0, 0, 10, 35);

  translate(20, 0);
  ellipse(0, 0, 10, 35);
}





