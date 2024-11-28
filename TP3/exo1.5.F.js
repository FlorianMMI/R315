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
 
 
    for (var x = 0; x < img.width; x++) {
        for (var y = 0; y < img.height; y++) {
            if (x < img.width / 3) {
                writeColor(img, x, y, 0, 0, 255); // Blue
            }
            else if (x < 2 * img.width / 3) {
                writeColor(img, x, y, 255, 255, 255); // White
            }
            else {
                writeColor(img, x, y, 255, 0, 0); // Red
            }
        }
    }
 
    // Que fait cette fonction ?
    img.updatePixels(); // met à jour les pixels de l'image
    image(img, 0, 0);
 }
 