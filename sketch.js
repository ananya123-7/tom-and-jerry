var bgImage
var cat1, cat2, cat3, mouse1, mouse2, mouse3
var cat,mouse
function preload() {
    //load the images here
    bgImage = loadImage("images/garden.png");
    cat1 = loadAnimation ("images/cat1.png");
    mouse1 = loadAnimation ("images/mouse1.png");
    cat2 = loadAnimation ("images/cat2.png","images/cat3.png");
    mouse2 = loadAnimation ("images/mouse2.png","images/mouse3.png");
    cat3 = loadImage("images/cat4.png")
    mouse3 = loadImage("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat = createSprite(800,700);
cat.addAnimation("cat",cat1);
cat.scale=0.15;

mouse = createSprite(200,700);
mouse.addAnimation("mouse",mouse1);
mouse.scale=0.15;
}

function draw() {

    background(bgImage);

    //Write condition here to evalute if tom and jerry collide
if (cat.x - mouse.x < (cat.width - mouse.width)/2){
    cat.velocityX=0;
    cat.addImage("happyCat",cat3);
    cat.x=300;
    cat.scale=0.15;
    cat.changeImage("happyCat");
    mouse.addImage("happyMouse",mouse3);
    mouse.changeImage("happyMouse");
    mouse.scale=0.15;
}
    drawSprites();
}


function keyPressed(){
//For moving and changing animation write code here
if (keyCode === LEFT_ARROW) {
    cat.velocityX=-5
    cat.addAnimation("catRunning",cat2);
    cat.changeAnimation("catRunning");

    mouse.addAnimation("mouseTeasing",mouse2);
    mouse.frameDelay = 25;
    mouse.changeAnimation("mouseTeasing");
}


}
