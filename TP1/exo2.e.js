function setup() {
   createCanvas(windowWidth, windowHeight);
   background(240);
   stroke(0);
   strokeWeight(1);
   fill(255);
   rect(90,90,20,50)
   circle(100, 70, 60);
   ellipse(119, 70, 16, 32);
   ellipse(70, 70, 16, 32);
   line(89,139, 83, 150);
   line(111,139, 117, 150);
}
function mousePressed() {
   console.log("{x: " + mouseX + ", y:" + mouseY + "}");
}
