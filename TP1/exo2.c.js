

 /**
 * Exercice 2.1 : c
 * 
 */

function setup() {
    

   // Crée un canvas de la taille de la fenêtre
   createCanvas(400, 400);


   // Met la valeur de fond à 100
   background(125,125,0);
   
}


function draw() {

   stroke(255, 0, 0); // Couleur de la bordure
   line(0, 200 , 400 , 200 );
   line(200, 0 , 200 , 400 );
   
   
   stroke(0, 0, 200); // Couleur de la bordure
   strokeWeight(4); // Largeur de la bordure
   noFill(); // Pas de remplissage ni de 
   circle(200 , 200, 100);
   
}