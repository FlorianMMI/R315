// Variables globales (les points de contrôle)
let P0, P1, P2, P3;

function setup() {
   createCanvas(windowWidth, windowHeight);
   P0 = createVector(100, 600);
   P1 = createVector(width / 2.0, 100);
   P2 = createVector(400, 800);
   P3 = createVector(700, 300); // Nouveau point de contrôle
   background(200);
   textSize(15);
}

// fonction qui dessine les points de contrôle P0, P1, P2, P3
function drawControlPoints() {
   stroke(255, 0, 0);
   fill(255, 0, 0);
   circle(P0.x, P0.y, 15);
   circle(P1.x, P1.y, 15);
   circle(P2.x, P2.y, 15);
   circle(P3.x, P3.y, 15); // Dessiner P3
   text("P0", P0.x, P0.y - 20);
   text("P1", P1.x, P1.y - 20);
   text("P2", P2.x, P2.y - 20);
   text("P3", P3.x, P3.y - 20); // Etiquette pour P3
}

// fonction qui dessine les segments [P0P1], [P1P2] et [P2P3]
function drawControlCage() {
   stroke(0, 0, 0);
   line(P0.x, P0.y, P1.x, P1.y);
   line(P1.x, P1.y, P2.x, P2.y);
   line(P2.x, P2.y, P3.x, P3.y); // Dessiner le segment [P2P3]
}

function draw() {
   background(255);
   P3.set(mouseX, mouseY); // Déplacer P3 avec la souris
   drawControlCage();
   drawControlPoints();
   
   // Utiliser la fonction bezier pour dessiner la courbe de Bézier
   stroke(0, 0, 255);
   noFill();
   bezier(P0.x, P0.y, P1.x, P1.y, P2.x, P2.y, P3.x, P3.y);
}
