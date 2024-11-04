

 /**
 * Exercice 2.1 : b
 * 
 */

function setup() {
    

   // Crée un canvas de la taille de la fenêtre
   createCanvas(windowWidth, windowHeight);


   // Met la valeur de fond à 100
   background(125,125,0);
   
}


function draw() {
   // Crée un cercle de la taille 20 à la position de la souris
   stroke(0, 0, 200); // Couleur de la bordure
   strokeWeight(4); // Largeur de la bordure
   fill(255,20,0); // Couleur de remplissage
   // Nofill(); // Pas de remplissage ni de bordure
   circle(windowWidth/2, windowHeight/2, 100);
}