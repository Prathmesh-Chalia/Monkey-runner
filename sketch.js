var monkey, monkey_running;
var banana, bananaImg;
var obstacle, obstacleImg;
var bananaGroup;
var obstacleGroup;
var score = 0;
var ground;
var banana,obstacle



function preload() {
  jungleImg = loadImage("jungle.jpg");
  player_running = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");



  bananaImg = loadImage("banana.png");
  obstacleImg = loadImage("stone.png");

  }


function setup() {
  createCanvas(800, 400);

  jungle = createSprite(0, 0, 800, 400);
  jungle.addImage(jungleImg);
  jungle.scale = 1.5;
  jungle.x = jungle.width / 2;
  jungle.velocityX = -4;

  monkey = createSprite(100, 340, 20, 50);
  monkey.addAnimation("running", player_running);
  monkey.scale = 0.1;
  
  
  ground = createSprite(400, 350, 800, 10);
  ground.x = ground.width/2;
  ground.velocityX = -4;
  ground.visible = false;

  bananaGroup = new Group();
  obstaclesGroup = new Group();



  }


function draw() {

  background(255);
  
  

  if (jungle.x < 0) {
      jungle.x = jungle.width / 2;
      }

  if (ground.x < 0) {
      ground.x = ground.width/2;
      }
  
      monkey.collide(ground);

  if (keyDown("space")) {
    if (monkey.y > 315){
      monkey.velocityY = -15;
    }
  }
  
  console.log(monkey.y);

      monkey.velocityY = monkey.velocityY + 0.8;
  
      
  if (bananaGroup.isTouching(monkey)){
      score = score +2;
      bananaGroup.destroyEach();
      }
  
  if (obstaclesGroup.isTouching(monkey)){ 
      monkey.scale=monkey.scale-0.0002;
      }
  
      switch(score){
      case 10: monkey.scale=0.12;
               break;
      case 20: monkey.scale=0.14;
               break;
      case 30: monkey.scale=0.16;
               break;
      case 40: monkey.scale=0.18;
               break;
      default: break;
      }
  
    
      spawnBananas();
      spawnObstacles();
  
      drawSprites();
  
      stroke("white");
      textSize(20);
      fill("white");
      text("Score: "+ score, 500,50);
  
    
}

function spawnBananas() {

  if (frameCount % 80 === 0) {
      banana = createSprite(600, 250, 40, 10);
      banana.y = random(120, 200);
      banana.addImage(bananaImg);
      banana.scale = 0.05;
      banana.velocityX = -4;
      banana.lifetime = 200;
      monkey.depth = banana.depth +1;

      bananaGroup.add(banana);

  }
}


function spawnObstacles() {

  if (frameCount % 300 === 0) {
       obstacle = createSprite(800, 310, 10, 40);
      obstacle.velocityX = -4;
      obstacle.addImage(obstacleImg);
      obstacle.scale = 0.2;
      obstacle.lifetime = 230;

      obstaclesGroup.add(obstacle);
  }
}