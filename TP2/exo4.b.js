
let flakes = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    for (let i = 0; i < 100; i++) {
        flakes.push({ x: random(width), y: random(height) });
    }
}

function draw() {
    background(0);
    for (let i = 0; i < flakes.length; i++) {
        let flake = flakes[i];
        fill(255);
        ellipse(flake.x, flake.y, 1, 10);
        flake.y += 5;
        if (flake.y > height) {
            flake.y = 0;
            flake.x = random(width);
            
        }
    }
}