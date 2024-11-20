function setup() {
  createCanvas(windowWidth, windowHeight);
}

let angle = 0;
let grandeur = 1;

function draw() {
  background(100);
  
  translate(mouseX, mouseY);
  
  rotate(angle);
  scale(grandeur);
  
  ellipse(0, 0, 160, 20);
  
  grandeur = 1 + 0.5 * (1 + sin(frameCount * 0.05)); // Oscillate between 1 and 2
  console.log(grandeur);
  angle += 0.09; // Change the interval to make it go faster
}
