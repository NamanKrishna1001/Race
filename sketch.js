var car, carImg;
var traffic, trafficImg;
var gameState=1;
var track, trackImg;
function preload(){
carImg = loadImage("playerCar.png");
trafficImg = loadImage("opponentCar.png");
trackImg = loadImage("track.png")
}
function setup(){
    createCanvas(400,500);

    track = createSprite(200,250,50,50);
    track.addImage("t",trackImg);
    track.velocityY=18;
    traffic = createSprite(380, -200, 50, 50);
    traffic.addImage("b",trafficImg);
    car = createSprite(200, 400, 50, 50);
    car.addImage("c",carImg);
    traffic.velocityY=17;
}
function draw(){
    background(225);
    if(gameState===1){
        if(track.y>1000){
            track.y=track.width/2
        }
        if(keyDown(LEFT_ARROW)){
            car.x=car.x-5;
        }
        if(keyDown(RIGHT_ARROW)){
            car.x=car.x+5;
        }
        if(traffic.y>500){
            traffic.x=random(20, 380);
            traffic.y=-50;
          }
          if(car.isTouching(traffic) || car.isTouching(traffic) && gameState === 1){
            gameState = 0;
          }
          if(gameState===0){
            traffic.velocityY=0;
            car.velocityY=0;
        
            track.velocityY=0;
        text("Game Over",200,200);
    }
}
drawSprites();
}