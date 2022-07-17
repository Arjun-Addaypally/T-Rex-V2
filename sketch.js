
var trex ,trex_running;

var ground;

var groundimage;

var invisground;

function preload(){
  
trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");

groundimage = loadImage("ground2.png");

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50, 160, 20, 50);
  trex.addAnimation("running", trex_running)
  trex.scale = 0.5;
  ground = createSprite(10, 180, 600, 20);
  ground.addImage(groundimage);
  ground.velocityX = -3;
  invisground = createSprite(200, 185, 400, 10)
  invisground.visible = false
}

function draw(){
  background("cyan")
  console.log(trex.y);
  if (ground.x < 600) {
    ground.x = ground.width/2
  }
  

if (keyDown("SPACE")&&trex.y>150) {
  trex.velocityY = -10;
  

}
trex.velocityY = trex.velocityY+0.5


trex.collide(invisground);
drawSprites();
}
