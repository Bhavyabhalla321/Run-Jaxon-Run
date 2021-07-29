var pathImg , path;
var jake, jakeImg;
var bomb, bombImg;
var coin, coinImg;
var power, powerImg;
var left_boundary;
var right_boundary;



function preload(){
pathImg = loadImage("path.png");
jakeImg = loadAnimation("Runner-1.png","Runner-2.png")
bombImg = loadImage("bomb.png");
coinImg = loadImage("coin.png");
  //pre-load images
}

function setup(){
  createCanvas(400,400);

  left_boundary = createSprite(0,300,100,600);
  right_boundary = createSprite(390,300,80,600);
  left_boundary.visible = false
  right_boundary.visible = false

  coin = createSprite();
  coin.addImage(coinImg);

  path = createSprite(200,200)
  path.addImage(pathImg);
  path.velocityY = 5;
  path.scale = 1.2;

  jake = createSprite(180,340,50,170);
  jake.addAnimation("running","jackImg")
  
  bomb = createSprite()
  bomb.addImage(bombImg);

  //create sprites here
}

function draw() {
  background("white");

  jake.X = World.mouseX;

  if(path.y > 400){
    path.y = height/2
  }

  jake.collide(left_boundary);
  jake.collide(right_boundary);
  edges = createEdgeSprites();
  jake.collide(edges[3])

drawSprites()
}
