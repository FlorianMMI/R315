function setup() {
  createCanvas(windowWidth, windowHeight);
}

let angle = 0;
let angleMoons = 0;
let colors = 0;
let colorDirection = 1;

function draw() {
  background(colors);
  
  translate(windowWidth / 2, windowHeight / 2);

  fill(255, 200, 0)
  circle(0, 0, 100);
  
  push();
  rotate(angle);
  translate(150, 0);
  fill(0,0,255);
  
  circle(0, 0, 25);
  
  rotate(angleMoons);
  translate(50, 0);
  fill(255,0,0);
  circle(0, 0, 10);

  angle += 0.020;
  angleMoons += 0.1;
  
  colors += colorDirection;
  if (colors >= 255 || colors <= 0) {
    colorDirection *= -1;
  }
}
