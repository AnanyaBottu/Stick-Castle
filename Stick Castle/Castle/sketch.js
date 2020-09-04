const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var box1;



function setup() {
  createCanvas(400,400);
  engine = Engine.create();
    world = engine.world;
  //createSprite(200, 200, 100, 50);
  //createSprite(300, 300, 100, 50);
  //createSprite(400, 400, 100, 50);
  //createSprite(500, 500, 100, 50);


  box1 = new Box(200,200,30,60);
  box2 = new Box(400,200,30,60);

}

function draw() {
  Engine.update(engine);
  background(255,255,255);  
  
  box1.display();
  fill("#3cf902");
  box2.display();
  
  //drawSprites();

}