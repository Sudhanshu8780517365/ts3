const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var di;
var engine, world;
var box1, pig1;
var backgroundImg, platform;
var bird, slingshot;
var dIMG;
var cn;
function preload() {
  backgroundImg = loadImage("bg.png");
}

function setup() {
  var canvas = createCanvas(1200, 400);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(600, height, 1200, 20);
  bird = new Bird(200, 380);
  box4 = new Box(805, 300, 100, 100);
  slingshot = new SlingShot(bird.body, { x: 200, y: 200 });
}

function draw() {
  background(255);

  //text(mouseX + ","+ mouseY, 30,45 )
  Engine.update(engine);

  bird.display();
  //platform.display();
  //log6.display();
  slingshot.display();
  box4.display();
}

function mousePressed() {
  Matter.Body.setPosition(bird.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
  SlingShot.bodyA=null
}
