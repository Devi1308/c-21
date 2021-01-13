var fixedRect, movingRect;
var o1,o2;
 function setup()
  { 
    createCanvas(1200,800);
    fixedRect = createSprite(400, 200, 50, 50);
    fixedRect.shapeColor = "green"; 
    fixedRect.debug = true;

    movingRect = createSprite(800, 200, 50, 50);
    movingRect.shapeColor = "green";
    movingRect.debug = true;
  
    o1=createSprite(200,400,30,30);
    o1.shapeColour="black";
    o1.velocityX=6;

    o2=createSprite(800,400,30,30);
    o2.shapeColour="black";
    o2.velocityX=-6;

 }
function draw() {
    background("white");
    movingRect.x = World.mouseX;
    movingRect.y = World.mouseY; 
    if(isTouching(fixedRect,movingRect)) {
      fixedRect.shapeColor = "blue";
      movingRect.shapeColor = "blue"; 
    }
    
    else { 
      fixedRect.shapeColor = "green";
      movingRect.shapeColor = "green";
        } 

bounceOff(o1,o2);
drawSprites();
 }
