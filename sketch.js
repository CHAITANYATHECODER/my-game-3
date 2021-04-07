var bird;
var birdAnimation;
var background;
var bc;
var ugroup;
var lgroup;

function preload(){
bc = loadImage("sprites/bird-animation/background.jpg")
birdAnimation = loadAnimation("sprites/bird-animation/bird1.png","sprites/bird-animation/bird2.png","sprites/bird-animation/bird3.png","sprites/bird-animation/bird4.png","sprites/bird-animation/bird5.png","sprites/bird-animation/bird6.png","sprites/bird-animation/bird7.png","sprites/bird-animation/bird8.png");
upipeImage = loadImage("sprites/pipes/u1.png");
lpipeImage = loadImage("sprites/pipes/l1.png")


}
function setup() {
  createCanvas(windowWidth,windowHeight);

 background = createSprite(width/2,height/2,width,height)
background.addImage(bc);
background.scale=0.8;


bird = createSprite(180,height/2,20,20)
bird.addAnimation("fly", birdAnimation);
bird.scale = 0.3;



ugroup = new Group();
lgroup = new Group();
}



function draw() {
  background.velocityX = -6;
  if (background.x < width/14.5){

    background.x = width+5;
    
  }

  if(keyDown("space")&& bird.y>height/3){
  
  bird.velocityY = -10;
  }
 bird.velocityY = bird.velocityY + 0.5;

  upperPipe();
  lowerPipe();
  drawSprites();

 
}
function upperPipe(){

if(frameCount % 180===0){
var upipe = createSprite(width,50,30,200)
upipe.velocityX = -5;
ugroup.add(upipe);
upipe.lifetime = 1000
upipe.addImage(upipeImage);
upipe.scale = 1.8
}


  
}

function lowerPipe(){

  if(frameCount % 180===0){
  var lpipe = createSprite(width+435,height-50,30,200)
  lpipe.velocityX = -5;
  lgroup.add(lpipe);
  lpipe.lifetime = 1000
  lpipe.addImage(lpipeImage);
  lpipe.scale = 0.8
  }
  
  
    
  }











