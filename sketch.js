const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var thread1,thread2,thread3,thread4,thread5
var ball1,ball2,ball3,ball4,ball5;
var ground;
function preload()
{
	
}

function setup() {
var canvas = createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ball1 =new Ball(400,700,100);
	ball2 =new Ball(500,600,100);
	ball3 =new Ball(600,600,100);
	ball4 =new Ball(700,600,100);
	ball5 =new Ball(800,600,100);
	
ground  = new Ground();
thread1= new Thread(ball1.body,{x:400,y:100});
thread2= new Thread(ball2.body,{x:500,y:100})
thread3= new Thread(ball3.body,{x:600,y:100})
thread4= new Thread(ball4.body,{x:700,y:100})
thread5= new Thread(ball5.body,{x:800,y:100})


	Engine.run(engine);
  
}


function draw() {
  background(150);
  strokeWeight(4);

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  ground . display();

  thread1.display();
  thread2.display();
  thread3.display();
  thread4.display();
  thread5.display();
  /*ball1.body.position.x=400;
ball1.body.position.y=700;*/
  drawSprites();
}

/*function mouseDragged(){
	Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY})
}*/
function keyPressed(){
	if(keyCode === UP_ARROW){
		Body.applyForce(ball1.body,ball1.body.position,{x:-5,y:0});
	}
	else if(keyCode === RIGHT_ARROW){
		Body.applyForce(ball1.body,ball1.body.position,{x:-5,y:0});
		Body.applyForce(ball2.body,ball2.body.position,{x:-5,y:0});
	}
	else if(keyCode === DOWN_ARROW){
		Body.applyForce(ball1.body,ball1.body.position,{x:-5,y:0});
		Body.applyForce(ball2.body,ball2.body.position,{x:-5,y:0});
		Body.applyForce(ball3.body,ball3.body.position,{x:-5,y:0});
	}
	else if(keyCode === LEFT_ARROW){
		Body.applyForce(ball1.body,ball1.body.position,{x:-4,y:0});
		Body.applyForce(ball2.body,ball2.body.position,{x:-4,y:0});
		Body.applyForce(ball3.body,ball3.body.position,{x:4,y:0});
		Body.applyForce(ball4.body,ball4.body.position,{x:4,y:0});
		Body.applyForce(ball5.body,ball5.body.position,{x:4,y:0});
	}

}

