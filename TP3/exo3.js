function changeContrast(image, x , y ,p){
    let index = (x + y * image.width) * 4;
    image.pixels[index] += p*(image.pixels[index] - 128);
    image.pixels[index + 1] += p*(image.pixels[index + 1] - 128);
    image.pixels[index + 2] += p*(image.pixels[index+ 2] - 128);
}


let img;


function preload() {
 img = loadImage("pebbles.png");
}


function keepRed(img, x , y ) {
    let index = (x + y * img.width) * 4;
    img.pixels[index + 1] = 0;
    img.pixels[index + 2] = 0;
}

function setup() {
 createCanvas(img.width, img.height);
 
 img.loadPixels();

 for(var y = 0; y < img.height; y++) {
     for(var x = 0; x < img.width; x++) {
         changeContrast(img, x , y, 0.5)
     }
 };
 img.updatePixels();
 image(img, 0, 0);
}
