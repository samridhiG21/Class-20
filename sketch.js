var movingRect , fixedRect ;

function setup() {
  createCanvas(800,400);

  fixedRect = createSprite(200, 200, 80, 30);
  movingRect = createSprite(600,200,50,80);
  movingRect.shapeColor = "Green";
  fixedRect.shapeColor = "Green";

  movingRect.velocityX = -5;
  fixedRect.velocityX = 5;
}

function draw() {
  background("black"); 
  
  //movingRect.y = mouseY;
  //movingRect.x = mouseX;
  
 console.log(movingRect.x - fixedRect.x);

 //Collision detection algo
 if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2
  && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2
  && movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2
  && fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2){
  movingRect.shapeColor = "Red";
  fixedRect.shapeColor = "Red";
 }
 else{
  movingRect.shapeColor = "Green";
  fixedRect.shapeColor = "Green";
 }

if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2
  && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2){
  movingRect.velocityX *= (-1);
  fixedRect.velocityX *= (-1);
}

if(movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2
  && fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2){
    movingRect.velocityY *= (-1);
    fixedRect.velocityY *= (-1);
}

  drawSprites();
}