var boy,boyimg;
var ground,tree,stone,rope1,rope2,rope3,rope4,rope5;
var mango1,mango2,mango3,mango4;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	boyimg = loadImage("boy.png");
}

function setup() {
	createCanvas(1200, 700);

	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boy = createSprite(150,620,10,10);
	boy.addImage("boy",boyimg);
	boy.scale = 0.1
	ground = new Ground(600,690,1200,20);
	tree = new Tree(840,370,30,30);
	stone = new Stone(120,610,30,30)
	rope1 = new Rope(stone.body,{x:100,y:560});
	mango1 = new Mango(600,320,10,10);
	mango2 = new Mango(800,320,10,10);
	mango3 = new Mango(1000,280,10,10);
	mango4 = new Mango(850,150,10,10);
	Engine.run(engine);
	
}

function draw() {
  rectMode(CENTER);
  background("lightblue");
  drawSprites();
  ground.display();
  tree.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    rope1.fly();
}

function detectCollision(lstone,lmango){

	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)

	if (distance <= lmango.diameter/2 + lstone.width/2){
		Matter.Body.setStatic(lmango.body,false);
	}

}

function keyPressed(){
    if(keyCode===32){
        rope1.attach(stone.body);
    }
}