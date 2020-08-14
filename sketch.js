var ground, invisibleGround, groundImage;
var monkey, monkeyImg;


var bananaGroup, bananaImage,banana;
var stoneGroup,stone,stoneImg;

var score;

//initiate Game STATEs
var PLAY = 1;
var END = 0;
var gameState = PLAY;


function preload(){
  
   groundImage = loadImage("jungle.png"); 
  monkeyImg = loadImage("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
   
 
  
  bananaImage = loadImage("banana.png");
  
 stoneImg = loadImage("stone.png");
  
 
}

function setup() {
  createCanvas(400, 400);
  
  
  ground = createSprite(400,280,0,0);
  ground.addImage(groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
 monkey = createSprite(50,300,20,50);
  monkey.addImage(monkeyImg);
  monkey.scale = 0.1;
  
 
  
  
  
  invisibleGround = createSprite(20,400,400,10);
  invisibleGround.visible = false;
  
 bananaGroup = new Group();
  stoneGroup = new Group();
  
  score = 0;
}

function draw() {
  background(180);
  
  
  text("Score: "+ score, 500,50);
  
  
  if(gameState === PLAY){
    score = score + Math.round(getFrameRate()/60);
    if(keyDown("space") && monkey.y>=129 ) {
      monkey.velocityY = -10;
    }
    }
      


ground.velocityX = -(6 + 3*score/100);
    monkey.velocityY = monkey.velocityY + 0.8

    if (ground.x < 0){
      ground.x = ground.width/2;
    }

   
    spawnBanana();
  spawnObstacles();
     //End the game when trex is touching the obstacle
   if(stoneGroup.isTouching(monkey)){
   
      gameState = END;
     
    
  }
  else if(gameState === END) {
   
    
    //set velcity of each game object to 0
    ground.velocityX = 0;
    
    stoneGroup.setVelocityXEach(0);
    bananaGroup.setVelocityXEach(0);
    
    //change the trex animation
   
    
    //set lifetime of the game objects so that they are never destroyed
    stoneGroup.setLifetimeEach(-1);
    bananaGroup.setLifetimeEach(-1);
    
    
  }
  
  
   monkey.collide(invisibleGround);
  drawSprites();  
}

  


function spawnBanana() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
     banana = createSprite(410,250,20,50);
  banana.addImage(bananaImage);
  banana.scale = 0.05;
   banana.velocityX = -4;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    //adjust the depth
   
    
    //add each cloud to the group
    bananaGroup.add(banana);
  
  }
  
}

function spawnObstacles() {
  if(frameCount % 60 === 0) {
    stone = createSprite(410,380,20,50);
  stone.addImage(stoneImg);
  stone.scale = 0.1;
   stone.velocityX = -4;
    //generate random obstacle
    
    //assign scale and lifetime to the obstacle          
    stone.lifetime = 300;
    //add each obstacle to the group
    stoneGroup.add(stone);
  }
}