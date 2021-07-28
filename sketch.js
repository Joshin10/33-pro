
const Engine=Matter.Engine
const World=Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var bgIMG,snow,platform;
//BgIMG="snow1.jpg"

function preload(){
  BgIMG=loadImage("snow1.jpg");
 // getBgIMG();
 }

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  engine=Engine.create();
  world=World.create();
//platform=new createSprite(0,390,800,10);
  snow=new Snow(600,350,20,20);
}


function draw() {
  background(BgIMG);
  drawSprites();
  //snow.display();
 // platform.display();
}