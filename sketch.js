const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(600,550,1200,12)
    
    
    //box1 = new Box(650,100,50,50)
    box2 = new Box(650,100,50,50)
    box3 = new Box(650,100,50,50)
    box4 = new Box(650,100,50,50)
    box5 = new Box(650,100,50,50)
    box6 = new Box(650,100,50,50)
    
    
    box7 = new Box(700,100,50,50)
    box8 = new Box(700,100,50,50)
    box9 = new Box(700,100,50,50)
    box10 = new Box(700,100,50,50)

    box11 = new Box(750,100,50,50)
    box12 = new Box(750,100,50,50)
    box13 = new Box(750,100,50,50)

    box14 = new Box(800,100,50,50)
    box15 = new Box(800,100,50,50)

    box16 = new Box(850,100,50,50)

    ///////

    box17 = new Box(600,100,50,50)
    box18 = new Box(600,100,50,50)
    box19 = new Box(600,100,50,50)
    box20 = new Box(600,100,50,50)

    box21 = new Box(550,100,50,50)
    box22 = new Box(550,100,50,50)
    box23 = new Box(550,100,50,50)

    box24 = new Box(500,100,50,50)
    box25 = new Box(500,100,50,50)

    box26 = new Box(450,100,50,50)
    
    

    ball1 = new ball(200,200,150,150)

    chain1 = new chain(ball1.body,{x:200, y:100})
    chain2 = new chain(ball1.body,{x:200,y:100})

  console.log(ground1.x);
  console.log(ground1.y);

}

function draw(){
    background(0);
    Engine.update(engine);
    ground1.display();
    //box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();

    box7.display();
    box8.display();
    box9.display();
    box10.display();

    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();

    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();

    

    ball1.display();
    chain1.display();
    chain2.display();
}
function mouseDragged(){
    Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY})
}

function mouseReleased(){
  chain2.fly();
}