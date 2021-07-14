 const Engine=Matter.Engine;
 const World=Matter.World;
 const Bodies=Matter.Bodies;

var shiva
var snow =[]
var ground

function preload(){
  snow1 = loadImage("snow1.jpg");
  shivaImage = loadImage("boy.jpg")
  
  }
  

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world; 

  if(frameCount % 50 === 0){
    for(var i=0; i<200; i++){
      snow.push(new createSnow(random(0,800), random(0,800)))
    }
  }
  

  shiva = createSprite(400, 200, 10,10);
  ground = createSprite(400,300,800,10);

   
}



function draw() {
  background(snow1); 
  Engine.update(engine);

  for(var i = 0; i<200; i++){
    snow[i].showDrop();
    snow[i].updateY();

  }
  shiva.addImage(shivaImage);
  shiva.scale = 0.1; 
  shiva.collide(ground);
  if(keyCode === 37){
   shiva.velocityX = -2 ;
   }
  if(keyCode === 39){
  shiva.velocityX = 2 ;
  }
  if(keyDown("space") && shiva.y >= 200 ){
    shiva.velocityY = -10 ;
  } 
  shiva.velocityY = shiva.velocityY + 1 ;
 
  
  drawSprites();

  
}