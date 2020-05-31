var ball,ballImg;
var paddle,paddleImg;
 
function preload() {
  paddleImg=loadImage("paddle.png");
  ballImg=loadImage("ball.png");
}
function setup() {
  createCanvas(400, 400);
  ball=createSprite(200,200,30,30);
  ball.addAnimation("ball",ballImg);
  ball.scale=0.9;
  paddle=createSprite(360,200,20,50);
  paddle.addAnimation("moving paddle",paddleImg);
  paddle.scale=1.2;
}

function draw() {
  background(205,153,0);
  edges=createEdgeSprites();
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]); 
  ball.bounceOff(edges[3]);
  ball.bounceOff(paddle);

  if(mousePressedOver(ball)){
    ball.velocityX=6;
    ball.velocityY=-6;
  }
  
  paddle.collide(edges[0]);
  paddle.collide(edges[3]);
  paddle.y=mouseY;
  
  drawSprites();
  
}

 

