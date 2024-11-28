function greyLevel(image, x , y ){
    let index = (x + y * image.width) * 4;
    let r = image.pixels[index];
    let g = image.pixels[index + 1];
    let b = image.pixels[index + 2];

    image.pixels[index] = r*0.393 + g*0.769 + b*0.189;
    image.pixels[index + 1] = r*0.349 + g*0.686 + b*0.168;
    image.pixels[index + 2] =  r*0.272 + g*0.534 + b*0.131;
}


let img;


function preload() {
 img = loadImage("london.png");
}




function setup() {
 createCanvas(img.width, img.height);
 
 img.loadPixels();

 for(var y = 0; y < img.height; y++) {
     for(var x = 0; x < img.width; x++) {
         greyLevel(img, x , y)
     }
 };
 img.updatePixels();
 image(img, 0, 0);
}
