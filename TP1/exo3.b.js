function setup() {
   createCanvas(windowWidth, windowHeight);
   beginShape();
   vertex(80, 20);
   vertex(110, 75);
   vertex(150, 80);
   vertex(110, 100);
   vertex(150, 140);
   vertex(80, 115);
   vertex(40, 140);
   vertex(66, 98);
   vertex(35, 80);
   vertex(70, 75);
   
   stroke(0,0,255);
   strokeWeight(4);
   fill(255,0,0);
   endShape(CLOSE);
}
function mousePressed() {
   console.log("{x: " + mouseX + ", y:" + mouseY + "}");
}
