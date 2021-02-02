var balloon,balloonImg;
var backgroundImage;
var database,position;

function preload(){
  backgroundImage = loadImage("Hot Air Balloon-01.png")
  balloonImg = loadAnimation("Hot Air Balloon-02.png","Hot Air Balloon-03.png","Hot Air Balloon-04.png");
}
function setup() {
  createCanvas(900,500);
  balloon = createSprite(80,360,80,80);
  balloon.addAnimation( "moving",balloonImg);
  balloon.scale = 0.5;

  
}

function draw() {
  background(backgroundImage);
  
  textSize(20);
  fill ("black");
  text("Use Arrow Keys To Move",80,100);
  
  if(keyDown(LEFT_ARROW)){
    balloon.x = balloon.x -10;
}
else if(keyDown(RIGHT_ARROW)){
    balloon.x = balloon.x +10;
}
else if(keyDown(UP_ARROW)){
   balloon.y = balloon.y -10;
   updateHeight(0,-10);
   balloon.scale=balloon.scale-0.1;
}
else if(keyDown(DOWN_ARROW)){
    balloon.y = balloon.y +10;
    updateHeight(0,+10);
    balloon.scale=balloon.scale+0.1;
}
  drawSprites();
}
var balloonPosition=database.ref('balloon/height');
balloonPosition.on("value",readPosition,showError);

function updateHeight(x,y){
  database.ref('balloon/height').set({
    'x': height.x + x,
    'y': height.y + y
  })
}

function readHeight(data){
  height = data.val();
  balloon.x = height.x;
  balloon.y = height.y;
}

function showError(){
  console.log("Error in writing to the database")
}
