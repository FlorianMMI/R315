// variable globale slider
let slider;
function setup() {
  createCanvas(windowWidth, windowHeight);
  // slider avec une valeur initiale de 50
  // et qui peut varier entre 0 et 100
  slider = createSlider(0, 100, 0);
  sliderB = createSlider(0, 100, 0);
  sliderC = createSlider(0, 100, 0);
  // positionnement du slider au centre de l'écran
  slider.position(100, 100);
  sliderB.position(100, 150);
  sliderC.position(100, 200);
  // taille de texte par défaut (pour l'affichage)
  textSize(20);
}
function draw() {
  // lecture de la valeur du slider et conversion en pourcentage (entre 0 et 1)
  let pourcentage = slider.value() /  100;
  let pourcentageB = sliderB.value() /  100;
  let pourcentageG = sliderC.value() /  100;
  let min = 0;
  let max = 255;
  let red = lerp(min, max, pourcentage);
  let blue = lerp(min, max, pourcentageB);
  let green = lerp(min, max, pourcentageG);

  background(red, green, blue);
  text(min, slider.x, slider.y)
  text(max, slider.x + slider.width, slider.y);
  text("Rouge", slider.x - 75, slider.y );
  text(min, sliderB.x, sliderB.y)
  text(max, sliderB.x + sliderB.width, sliderB.y);
  text("Bleu", sliderB.x - 75, sliderB.y);
  text(min, sliderC.x, sliderC.y)
  text(max, sliderC.x + sliderC.width, sliderC.y);
  text("vert", sliderC.x - 75 , sliderC.y );

}
