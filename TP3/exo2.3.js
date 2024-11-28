let img;

function preload() {
 img = loadImage("pebbles.png");
}

function keepRed(img, x, y) {
 let index = (x + y * img.width) * 4;
 img.pixels[index + 1] = 0;
 img.pixels[index + 2] = 0;
}

function keepGreen(img, x, y) {
 let index = (x + y * img.width) * 4;
 img.pixels[index] = 0;
 img.pixels[index + 2] = 0;
}

function keepBlue(img, x, y) {
    let index = (x + y * img.width) * 4;
    img.pixels[index] = 0;
    img.pixels[index + 1] = 0;
}


function setup() {
 createCanvas(img.width, img.height);
 
 img.loadPixels();

 for (var y = 0; y < img.height; y++) {
     for (var x = 0; x < img.width; x++) {
         if (x < img.width / 3) {
            keepRed(img, x, y);
         } else if (x < 2 * img.width / 3) {
             keepGreen(img, x, y);
         } else {
             keepBlue(img, x, y);
         }
     }
 }
 img.updatePixels();
 image(img, 0, 0);
}
