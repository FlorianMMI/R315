// Fonction pour modifier la luminosité
function changeBrightness(image, x, y, b) {
    let index = (x + y * image.width) * 4;
    image.pixels[index] *= b;
    image.pixels[index + 1] *= b;
    image.pixels[index + 2] *= b;
}

// Fonction pour modifier le contraste
function changeContrast(image, x , y ,p){
    let index = (x + y * image.width) * 4;
    image.pixels[index] += p*(image.pixels[index] - 128);
    image.pixels[index + 1] += p*(image.pixels[index + 1] - 128);
    image.pixels[index + 2] += p*(image.pixels[index+ 2] - 128);
}


let img, imgModif;


function preload() {
 img = loadImage("pebbles.png");
}


function setup() {
 imgModif = createImage(img.width, img.height);
 createCanvas(img.width, img.height);
 img.loadPixels();
}


function draw() {
 imgModif.copy(img, 0, 0, img.width, img.height, 0, 0, img.width, img.height);
 imgModif.loadPixels();

 let modiflum = map(mouseX, 0, width, 0, 2);
 let modifContrast = map(mouseY, 0, height, 0, 1);

 for (var y = 0; y < img.height; y++) {
        for (var x = 0; x < img.width; x++) {
            
            changeBrightness(imgModif, x, y, modiflum);
            changeContrast(imgModif, x , y, modifContrast);
        }
    }
imgModif.updatePixels();
image(imgModif, 0, 0);
}
