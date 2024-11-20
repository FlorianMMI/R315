let N = 4000;   // nombre de bugs
let bugs = []; // tableaux des bugs
let speed = 1; // vitesse des bugs
let isStatic = false; // statique ou non


/* Fonction createOneBug
  Fabrique et retourne un objet "bug" en tout point identique aux   objets Jitter de l'exemple de la documentation de P5.js.
  Note : cette fonction est appelée dans la fonction setup
*/
let createOneBug = function () {


   // déclaration d'un objet bug
   let bug = {
       // PROPRIETES (données caractéristiques de l'objet bug)
       x: random(windowWidth), // abscisse
       y: random(windowHeight), // ordonnée
       diameter: random(10, 30), // diamètre aléatoire entre 10 et 30
       isStatic: isStatic, // statique ou non


       // METHODES (fonctions qui s'appliquent à l'objet bug)
       // méthode move : déplace aléatoirement les coordonnées du bug
       move: function () {
           // modification aléatoire de l'abscisse en fct de speed
           if (!this.isStatic){
            bug.x += random(-speed, speed);
           // modification aléatoire de l'ordonnée en fct de speed
           bug.y += random(-speed, speed);
           }
           for (let i = 0; i < bugs.length; i++) {
            let static = bugs[i];
            if (static.isStatic){
                let d = dist(this.x, this.y, static.x, static.y) 
                if (d < (this.diameter + static.diameter) / 2){
                    this.isStatic = true;
                    break;
                    
                
            }
           
            }
            }
        },


       // méthode display : affiche un bug
       display: function () {
           // représentation graphique du bug par un disque
           if (!this.isStatic){
            fill(255, 0, 0);
            circle(bug.x, bug.y, bug.diameter);
           }
           else {
            fill(0, 255, 0);
            circle(bug.x, bug.y, bug.diameter);
           }
           
        }
    }; // fin de la déclaration d'un objet bug
 
 
    return bug; // la fonction renvoie l’objet bug créé
 }
 
 
 function setup() {
    createCanvas(windowWidth, windowHeight);

    let first = createOneBug();
    first.x = windowWidth / 2;
    first.y = windowHeight / 2;
    first.isStatic = true;
    bugs.push(first);

    // Créations des objets (les  bugs). 50 par défaut
    for (let i = 0; i < N; i++) {
        // on fabrique un bug
        let bug = createOneBug();
        // ajout de l'objet bug dans le tableau global bugs
        bugs.push(bug);
    }
 }
 
 
 function draw() {
    background(50, 89, 100);
    for (let i = 0; i < bugs.length; i++) {
        let iemeBug = bugs[i];
        iemeBug.move(); // modification de la position
        iemeBug.display(); // affichage
    }
 }
 
