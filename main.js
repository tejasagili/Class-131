img = "";

function preload() {
img = loadImage('dog_cat.jpg');
}

function setup() {
    canvas = createCanvas(640, 420);  
    canvas.center();
}

function draw() {
    image (img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Dog", 50, 80);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 350);
    text("Cat", 310, 120)
    rect(300, 100, 270, 300);
    text("Bowl", 390, 340)
    rect(270, 325, 150, 80);
    
}








