let hauteurs = [];
let ecart = 10;


function setup() {
   createCanvas(windowWidth, windowHeight);
   for (let i = 0; i < windowWidth; i += ecart)
       hauteurs.push(0.3);
}


function draw() {
   background(100);
   for (let i = 0; i < hauteurs.length; i++) {
       rect((windowWidth - hauteurs[i])/2 , i * ecart , hauteurs[i], ecart );
       hauteurs[i] += random(-ecart, ecart);
   }
}