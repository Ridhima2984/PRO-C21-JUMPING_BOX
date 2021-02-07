var canvas;
var music;
var movingBall, greenRect, pinkRect, orangeRect, blueRect;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,1000);

    //create 4 different surfaces
greenRect = createSprite(710,620,160,30);
greenRect.shapeColor = "green";

pinkRect = createSprite(500,620,160,30);
pinkRect.shapeColor = "pink";

orangeRect = createSprite(290,620,160,30);
orangeRect.shapeColor = "orange";

blueRect = createSprite(90,620,160,30);
blueRect.shapeColor = "blue";

    //create box sprite and give velocity
movingBall = createSprite(250,180,20,20);
movingBall.shapeColor = "black";
//movingBall.velocityY= 3;
}

function draw() {
    background(rgb(169,169,169));
    
    //create edgeSprite


    drawSprites();
    //add condition to check if box touching surface and make it box
}
