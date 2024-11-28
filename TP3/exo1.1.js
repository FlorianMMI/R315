// Que fait cette fonction ?
function writeColor(image, x, y, red, green, blue) {    //crée le tableau de pixels de l'image
    let index = (x + y * image.width) * 4;
    image.pixels[index] = red;
    image.pixels[index + 1] = green;
    image.pixels[index + 2] = blue;
    image.pixels[index + 3] = 255;
 }
 
 
 function setup() {
    let img = createImage(100, 100);
    // Que fait cette fonction ?
    img.loadPixels(); // charge les pixels de l'image
    createCanvas(100, 100);
 
 
    for (var y = 0; y < img.height; y++) { // parcours de l'image (tableau de colonne par ligne)
        for (var x = 0; x < img.width; x++) {
            writeColor(img, x, y, 255, 0, 0);
        }
    }
    // Que fait cette fonction ?
    img.updatePixels(); // met à jour les pixels de l'image
    image(img, 0, 0);
 }
 