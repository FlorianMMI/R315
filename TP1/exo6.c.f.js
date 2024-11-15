let heightMax = 140;
let lines = [];
let lineSpacing = 20;
let x = 152;
let y = 251;
let z = 152;
function setup() {
   createCanvas(windowWidth, windowHeight);
   background(200);
   stroke(x , y , z);
   strokeWeight(2);
   fill(0);

   // Initialize lines
   for (let y = 0; y < height; y += lineSpacing) {

      lines.push(createLine(y));
   }
}

function draw() {
   background(0);

   
   for (let i = 0; i < lines.length; i++) {
      lines[i].y += 2;
   }

   
   if (lines[lines.length - 1].y > height) {
      lines.pop();
   }

   
   if (lines[0].y > lineSpacing) {
      lines.unshift(createLine(0));
   }

  
   for (let i = 0; i < lines.length; i++) {
      drawLine(lines[i]);
   }
}

function createLine(y) {
   let line = { y: y, points: [] };
   for (let i = 25; i < width - 25; i += 25) {
      let r = 0;
      if ((i > width / 3) && (i < 2 * width / 3)) {
         r = random(3, heightMax);
      }
      line.points.push({ x: i, offset: r });
   }
   return line;
}

function drawLine(line) {
   beginShape();
   for (let i = 0; i < line.points.length; i++) {
      let p = line.points[i];
      curveVertex(p.x, line.y - p.offset);
   }
   endShape();
}
