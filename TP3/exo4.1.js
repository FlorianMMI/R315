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

// Fonction pour convertir en niveaux de gris
function greyLevel(image, x , y ){
    let index = (x + y * image.width) * 4;
    let r = image.pixels[index];
    let g = image.pixels[index + 1];
    let b = image.pixels[index + 2];

    image.pixels[index] = r*0.393 + g*0.769 + b*0.189;
    image.pixels[index + 1] = r*0.349 + g*0.686 + b*0.168;
    image.pixels[index + 2] =  r*0.272 + g*0.534 + b*0.131;
}

// Fonction pour appliquer un seuillage simple
function threshold(image, x, y) {
    let index = (x + y * image.width) * 4;
    let r = image.pixels[index];
    let g = image.pixels[index + 1];
    let b = image.pixels[index + 2];
    let grey = 0.3 * r + 0.59 * g + 0.11 * b;

    if (grey < 128) {
        image.pixels[index] = 0;
        image.pixels[index + 1] = 0;
        image.pixels[index + 2] = 0;
    } else {
        image.pixels[index] = 255;
        image.pixels[index + 1] = 255;
        image.pixels[index + 2] = 255;
    }
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
            threshold(imgModif, x, y);
        }
    }
    imgModif.updatePixels();
    image(imgModif, 0, 0);
}
