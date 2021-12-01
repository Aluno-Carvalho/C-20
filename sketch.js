
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var plane;
var block1;
var block2;
var block3;

//function preload()
//{
	
//}

function setup() {
	createCanvas(500, 500);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.

	var plane_options = {
		isStatic: true
	};

	var block1_options = {
		restitution: 2,
		friction: 1,
		frictionAir: 0.02
	};

	var block2_options = {
		restitution: 0.2,
		friction: 0.3,
		frictionAir: 0
	};

	var block3_options = {
		restitution: 0.20,
		friction: 0.1,
		frictionAir: 0.2
	};

	block1 = Bodies.circle(250,100,30,block1_options);
    World.add(world,block1);

	block2 = Bodies.rectangle(200,60,100,400,block2_options);
    World.add(world,block2);

	block3 = Bodies.rectangle(300,60,80,80,block3_options);
    World.add(world,block3);

	plane = Bodies.rectangle(250,490,510,20,plane_options);
    World.add(world,plane);

	Engine.run(engine);
	

	rectMode(CENTER);
    ellipseMode(RADIUS);
}


function draw() {
  background(200,0,40);
  Engine.update(engine);

  ellipse(block1.position.x,block1.position.y,30);
  rect(plane.position.x,plane.position.y,510,20);
  rect(block2.position.x,block2.position.y,100,400);
  rect(block3.position.x,block3.position.y,80,80);
  drawSprites();
 
}



