let video, imgModif;



function setup() {
    createCanvas(640, 480);
    video = createCapture(VIDEO);
    video.size(640, 480);
    video.hide();
    imgModif = createImage(video.width, video.height);
}

function getPixel(img, x, y) {
    let index = (x + y * img.width) * 4;
    return [
        img.pixels[index],     // red
        img.pixels[index + 1], // green
        img.pixels[index + 2], // blue
        img.pixels[index + 3]  // alpha
    ];
}

function setPixel(img, x, y, color) {
    let index = (x + y * img.width) * 4;
    img.pixels[index] = color[0];     // red
    img.pixels[index + 1] = color[1]; // green
    img.pixels[index + 2] = color[2]; // blue
    img.pixels[index + 3] = color[3]; // alpha
}

function mirrorImage() {
    imgModif.loadPixels();
    for (let y = 0; y < imgModif.height / 2; y++) {
        for (let x = 0; x < imgModif.width; x++) {
            let topColor = getPixel(imgModif, x, y);
            let bottomColor = getPixel(imgModif, x, imgModif.height - 1 - y);
            setPixel(imgModif, x, y, bottomColor);
            setPixel(imgModif, x, imgModif.height - 1 - y, topColor);
        }
    }
    imgModif.updatePixels();
}

function draw() {
    imgModif.copy(video, 0, 0, video.width, video.height, 0, 0, video.width, video.height);
    imgModif.loadPixels();


    imgModif.updatePixels();
    image(imgModif, 0, 0);
}



