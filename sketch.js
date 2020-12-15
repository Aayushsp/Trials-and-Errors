const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground, ground2;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20,b21,b22,b23,b24,b25;
var catapult;
var launcher;

function preload(){

}

function setup(){
    var canvas = createCanvas(1000,400);

    engine = Engine.create();
    world = engine.world;

    // Bodies go here. 
    ground = new Ground(400,350,200,8);
    ground2 = new Ground(800,200,230,8);

    //Building 1
    //Tier1
    b1 = new Box(340,326,30,40);
    b2 = new Box(370,326,30,40);
    b3 = new Box(400,326,30,40);
    b4 = new Box(430,326,30,40);
    b5 = new Box(460,326,30,40);
    // Tier2
    b6 = new Box(400,286,30,40);
    b7 = new Box(370,286,30,40);
    b8 = new Box(430,286,30,40);
    //Tier3
    b9 = new Box(400,246,30,40);

    //Building 2
    //Tier 1
    b10 = new Box(800,176,30,40);
    b11 = new Box(830,176,30,40);
    b12 = new Box(860,176,30,40);
    b13 = new Box(890,176,30,40);

    b14 = new Box(770,176,30,40);
    b15 = new Box(740,176,30,40);
    b16 = new Box(710,176,30,40);
    //Tier2
    b17 = new Box(800,136,30,40);
    b18 = new Box(830,136,30,40);
    b19 = new Box(860,136,30,40);

    b20 = new Box(770,136,30,40);
    b21 = new Box(740,136,30,40);
    //Tier3
    b22 = new Box(800,96,30,40);
    b23 = new Box(830,96,30,40);
    b24 = new Box(770,96,30,40);
    //Topmost Tier
    b25 = new Box(800,56,30,40);

    
    //Polygon
    catapult= new Polygon(100,250,30);

    //Here goes the LAUNCHER.
    launcher = new SlingShot(catapult.body, {x:100 , y:250});
}
function draw(){
    background("brown");
    Engine.update(engine);

    ground.display();
    ground2.display();
    
    // Build 1
        // Tier 1
         b1.display();
         b2.display();
         b3.display();
         b4.display();
         b5.display();
        // Tier 2
         b6.display();
         b7.display();
         b8.display();
         b9.display();

    // Build 2
        //Tier 1
         b10.display();
         b11.display();
         b12.display();
         b13.display();
         b14.display();
         b15.display();
         b16.display();
        //Tier 2
         b17.display();
         b18.display();
         b19.display();
         b20.display();
         b21.display();
        //Tier 3
         b22.display();
         b23.display();
         b24.display();
        // Topmost Tier
         b25.display();

         // This is the Catapult.
         catapult.display();

         // This is the SlingShot.
         launcher.display();
}
function mouseDragged(){
    Matter.Body.setPosition(catapult.body, {x : mouseX , y : mouseY});
}

function mouseReleased(){
   launcher.fly()
}
function keyPressed(){
    if(keyCode === 32){
        attach(catapult.body);
    }
}
