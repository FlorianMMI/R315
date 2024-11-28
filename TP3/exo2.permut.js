let img;

function preload() {
 img = loadImage("pebbles.png");
}

function permuteColors(img, x, y) {
    let index = (x + y * img.width) * 4;
    let r = img.pixels[index];
    let g = img.pixels[index + 1];
    let b = img.pixels[index + 2];
    
    // Permute RGB to GBR
    img.pixels[index] = g;
    img.pixels[index + 1] = b;
    img.pixels[index + 2] = r;
}

function setup() {
 createCanvas(img.width, img.height);
 
 img.loadPixels();

 for (var y = 0; y < img.height; y++) {
     for (var x = 0; x < img.width; x++) {
         permuteColors(img, x, y);
     }
 }
 img.updatePixels();
 image(img, 0, 0);
}
