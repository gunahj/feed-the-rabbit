var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleimg  =  loadImage("apple.png");
  leavesimg = loadImage("leaves.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  rabbit.x = World.mouseX;
  edges= createEdgeSprites();
  rabbit.collide(edges);
 
  spawnAplle()
  spawnLeaves()
  drawSprites();
}

function spawnAplle(){
  if(frameCount%80===0){
    apple=createSprite(100,100,50,10)
    apple.addImage("a",appleimg);
    apple.scale=0.1
    apple.velocityY=3
    apple.y=Math.round(random(10,100))
    apple.lifetime=200
    apple.depth=rabbit.depth; 
    rabbit.depth=rabbit.depth+1
    apple.x=rabbit.x
   }
  
}

function spawnLeaves(){
  if(frameCount%80===0){
    leaves=createSprite(200,100,50,10)
    leaves.addImage("l",leavesimg);
    leaves.scale=0.1
    leaves.velocityY=5
    leaves.y=Math.round(random(20,100))
    leaves.lifetime=200
    leaves.depth=rabbit.depth; 
    rabbit.depth=rabbit.depth+1
    leaves.x=rabbit.x
   }
  
}