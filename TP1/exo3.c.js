function setup() {
   createCanvas(windowWidth, windowHeight);
   beginShape();
   
   
   endShape(CLOSE);
}
function mousePressed() {
   console.log("{x: " + mouseX + ", y:" + mouseY + "}");
}




function draw() {
   background(230);
   stroke(0); noFill();
   beginShape();
   let precision = map(mouseX, 0, mouseY, 1, 10);

   let y = mouseY;

   for (let x = 0; x <= width + precision; x += precision) {
       y = height - y;
       vertex(x, y);
   }
   endShape(); // Attention à ne pas utiliser CLOSE ici
}
