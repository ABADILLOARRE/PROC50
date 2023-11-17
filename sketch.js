var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var obstacleTop,obsTop1,obsTop2
var obstacleBottom,obsBottom1,obsBottom2

function preload(){
bgImg = loadImage("assets/bg.png")
balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
obsTop1 =loadImage ("assets"/)
obsTop2 = loadImage ("assets"/)

obs

}

function setup(){

//Imagen de fondo
bg = createSprite(1500,700);
bg.addImage(bgImg);
bg.scale = 1.3

//Crear bases superiores e inferiores
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//Crear globo      
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;



}

function draw() {
  
  background("black");
        
          //Hacer brincar el globo aerostático
          if(keyDown("space")) {
            balloon.velocityX= -6 ;
            
          }

          //Añadir gravedad
           balloon.velocityY = balloon.velocityY+0.5;
   
        drawSprites();

        //llamar a los obstaculos
        spawObstacleTop();
        
}

function spawObstacleTop(){
  //crear cada tantos frames , un sprite obstaculo
if (Word.frameCount % 80 === 0) {

  obstacleTop = createSprite(1300,50,30,40)
  obstacleTop.velocityX = -4;

  //Spawmear de forma aleateoria los obtaculos sobre Y
  obstacleTop.Y = Math.round(random(40,350));

}
}