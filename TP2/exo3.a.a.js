function setup() {
  createCanvas(windowWidth, windowHeight);
}


let angle = 0;


function draw() {
  background(100);
  translate(windowWidth / 2, windowHeight / 2);
  rotate(angle);
  ellipse(0, 0, 160, 20);
  angle += 10; // changer le nb d'intervalle pouyr le faire aller plus vite
  
}