function setup() {
   createCanvas(windowWidth, windowHeight);
   beginShape();
   vertex(30, 20);
   vertex(85, 20);
   vertex(85, 75);
   
   stroke(0,0,255);
   strokeWeight(4);
   fill(255,0,0);
   endShape(CLOSE);
}
function mousePressed() {
   console.log("{x: " + mouseX + ", y:" + mouseY + "}");
}
