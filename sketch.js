var fixedRect,movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200,200,50,80); 
  fixedRect.debug=true;
  movingRect = createSprite(400,200,80,30);
  movingRect.debug=true; 
fixedRect.shapeColor="green";
movingRect.shapeColor="green"; 
}

function draw() {
  background(0);  
  movingRect.y=World.mouseY;
  movingRect.x=World.mouseX; 
  if(movingRect.x-fixedRect.x < fixedRect.width/2+movingRect.width/2 
    && fixedRect.x-movingRect.x < fixedRect.width/2+movingRect.width/2
    && movingRect.y-fixedRect.y < fixedRect.width/2+movingRect.width/2 
    && fixedRect.y-movingRect.y < fixedRect.width/2+movingRect.width/2)
    {
    fixedRect.shapeColor="red"; 
    movingRect.shapeColor="red";
  }
  else{ 
    fixedRect.shapeColor="green"; 
    movingRect.shapeColor="green"; 
  }
  drawSprites();
}