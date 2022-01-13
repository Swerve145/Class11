
var trex ,trex_running, ground, groundimg;
function preload(){
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png")
  groundimg = loadImage("ground2.png")

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,160,20, 50);
  trex.addAnimation("running", trex_running)
  trex.scale = 0.5
  trex.x = 30

  ground = createSprite(200,180,400,20)
  ground.addImage("ground", groundimg)
}

function draw(){
  background("white")
  
if (keyDown("space") && trex.y>= 150){
  trex.velocityY = -5

}

trex.velocityY = trex.velocityY+0.2

trex.collide(ground)
  drawSprites();

}
