let heightMax = 120
function setup() {
   createCanvas(windowWidth, windowHeight);
   background(200);
   stroke(50);
   strokeWeight(2);
   fill(200);
   for (let x = 200; x < 800; x += 40) {
      beginShape()
      for (let i = 25; i < width - 25; i += 25) {
         let r = 0
         if ((i > width / 3) && (i < 2 * width / 3)) {
            r = random(3, heightMax);
         }
         curveVertex(i, x - r)
      }
   endShape()
   }
}
