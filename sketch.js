
var canvas;
var veggie, veggie1, veggie2, veggie3, veggie4, veggie5, veggie6, veggie7, veggie8, veggie9, veggie10
var scope;
var img;
var veggie; 
var liner;
var linel;
var edgesl;
var score = 0;
var choco;
var icec;
var lolli;
var cheese;
var bag;
var L2;
var boy;
var mom;
var kbag;
gameState ="note";

function preload() {

  img = loadImage("scope.PNG");
  veggieImg = loadImage("an10.png");
  tomatoImg = loadImage("tomato1.png");
  BroccoImg = loadImage("ANgrBRoccolli.png");
  StrawbImg = loadImage("AnStrawberry.png");
  PearssImg = loadImage("AnPear.png");
  AAppleImg = loadImage("AnApple.png");
  BananaImg = loadImage("AnBanana.png");
  AnPineImg = loadImage("AnPineA.png");
  AMangoImg = loadImage("AnMango.png");
  ACucumImg = loadImage("AnCucumb.png");
  AMushrImg = loadImage("AnMushroom.png");
  ChocooImg = loadImage("Choco.png");
  IceCreImg = loadImage("IceCream.png");
  LollipImg = loadImage("Lollipop.png");
  CheeseImg = loadImage("Cheese.png");
  SadboyImg = loadImage("Introboy.png");
  AngmomImg = loadImage("Intromom.png");
  bag = loadImage("Bag2.jpg");
  kbag = loadImage("Kitchenbg.PNG");
  l2 = loadImage("Lev2.png");
}

function setup() {
canvas = createCanvas(displayWidth-20, displayHeight-20);


liner = createSprite(1900,  800, 50, 1900);
liner.shapeColor= "green"; 

linel = createSprite(-5, 800, 50, 1900);
linel.shapeColor= "green"; 

L2 = createSprite(displayWidth-200, 100, 50,50);
L2.addImage("Ll2", l2);
L2.scale = 1.7;



 }


function draw() {
 background(bag);  
 createEdgeSprites();

if (gameState=== "note") {
  background("kbag");
  kbag = createSprite(500, 500, 600,600);
  kbag.addImage("kitchen",kbag);

mom = createSprite(displayWidth-400, displayHeight-700);
mom.addImage("Inmom",AngmomImg);
mom.scale = 0.6;

boy = createSprite(200, 70);
boy.addImage("Inboy",SadboyImg);

}

if (gameState===1) {

  cheese =  createSprite(random(20, 1000) -10, 20, 20);
  cheese.velocityY = 5;
  cheese.velocityX = Math.round(random(-3, 3));
  cheese.addImage("chdrr",CheeseImg);
  cheese.scale = 0.3;
  
  lolli =  createSprite(random(20, 1000) -10, 20, 20);
  lolli.velocityY = 5;
  lolli.velocityX = Math.round(random(-3, 3));
  lolli.addImage("lolly",LollipImg);
  lolli.scale = 0.6;
  
  choco = createSprite(random(20, 1000) -10, 20, 20);
  choco.velocityY = 5;
  choco.velocityX = Math.round(random(-3, 3));
  choco.addImage("Choco",ChocooImg);
  choco.scale= 0.6;
  
  icec =  createSprite(random(20, 1000) -10, 20, 20);
  icec.velocityY = 5;
  icec.velocityX = Math.round(random(-3, 3));
  icec.addImage("icec",IceCreImg);
  icec.scale = 0.4;
  
  veggie =  createSprite(random(20, 1000) -10, 20, 20);
  veggie.velocityY = 3;
  veggie.velocityX = Math.round(random(-3, 3));
  veggie.addImage("veggie",veggieImg);
  veggie.scale = 0.4;
  
   veggie1 =  createSprite(random(20, 1000));
  veggie1.velocityY = 3;
  veggie1.velocityX = random(-3, 3);
  veggie1.addImage("veggie1",tomatoImg);
  veggie1.scale = 0.4;
  
   veggie2 =  createSprite(random(20, 1000));
  veggie2.velocityY = 3;
  veggie2.velocityX = random(-3, 3);
  veggie2.addImage("veggie2",BroccoImg);
  veggie2.scale = 0.4;
  
   veggie3 =  createSprite(random(20, 1000));
  veggie3.velocityY = 3;
  veggie3.velocityX = random(-3, 3);
  veggie3.addImage("veggie3",StrawbImg);
  
   veggie4 =  createSprite(random(20, 1000));
  veggie4.velocityY = 3;
  veggie4.velocityX = random(-3, 3);
  veggie4.addImage("veggie4",PearssImg);
  
   veggie5 =  createSprite(random(20, 1000));
  veggie5.velocityY = 3;
  veggie5.velocityX = random(-3, 3);
  veggie5.addImage("veggie5",AAppleImg);
  veggie5.scale= 0.3;
  
   veggie6 =  createSprite(random(20, 1000));
  veggie6.velocityY = 3;
  veggie6.velocityX = random(-3, 3);
  veggie6.addImage("veggie6",BananaImg);
  
   veggie7 =  createSprite(random(20, 1000));
  veggie7.velocityY = 3;
  veggie7.velocityX = random(-3, 3);
  veggie7.addImage("veggie7", AnPineImg);
  veggie7.scale = 0.4;
  
   veggie8 =  createSprite(random(20, 1000));
  veggie8.velocityY = 3;
  veggie8.velocityX = random(-3, 3);
  veggie8.addImage("veggie8", AMangoImg);
  veggie8.scale = 0.3;
  
   veggie9 =  createSprite(random(20, 1000));
  veggie9.velocityY = 3;
  veggie9.velocityX = random(-3, 3);
  veggie9.addImage("veggie9", ACucumImg);
  veggie9.scale = 0.5; 
  
   veggie10 =  createSprite(random(20, 1000));
  veggie10.velocityY = 3;
  veggie10.velocityX = random(-3, 3);
  veggie10.addImage("veggie10", AMushrImg);
  veggie10.scale = 0.4;
  
  scope = createSprite(0,0, 20, 20);
  scope.addImage("scope", img);
  
  edges = createEdgeSprites();

  veggie.bounceOff(edges[1]);
  veggie.bounceOff(edges[3]);
  
  veggie1.bounceOff(edges[3]);
  veggie1.bounceOff(edges[1]);
  
  veggie2.bounceOff(edges[1]);
  veggie2.bounceOff(edges[3]);
  
  veggie3.bounceOff(edges[1]);
  veggie3.bounceOff(edges[3]);
  
  veggie4.bounceOff(edges[1]);
  veggie4.bounceOff(edges[3]);
  
  veggie5.bounceOff(edges[1]);
  veggie5.bounceOff(edges[3]);
  
  veggie6.bounceOff(edges[1]);
  veggie6.bounceOff(edges[3]);
  
  veggie7.bounceOff(edges[1]);
  veggie7.bounceOff(edges[3]);
  
  veggie8.bounceOff(edges[1]);
  veggie8.bounceOff(edges[3]);
  
  veggie9.bounceOff(edges[1]);
  veggie9.bounceOff(edges[3]);
  
  veggie10.bounceOff(edges[1]);
  veggie10.bounceOff(edges[3]);
  
  choco.bounceOff(edges[1]);
  choco.bounceOff(edges[3]);
  
  icec.bounceOff(edges[1]);
  icec.bounceOff(edges[3]);
  
  lolli.bounceOff(edges[1]);
  lolli.bounceOff(edges[3]);
  
  cheese.bounceOff(edges[1]);
  cheese.bounceOff(edges[3]);
  
  bag.scale=6;  

 if (veggie.y>displayHeight) {
  veggie.y = -5;
 }
 
 if (veggie1.y>displayHeight) {
  veggie1.y = -5;
 }

 if (veggie2.y>displayHeight) {
  veggie2.y = -5;
 }

 if (veggie3.y>displayHeight) {
  veggie3.y = -5;
 }

 if (veggie4.y>displayHeight) {
  veggie4.y = -5;
 }

 if (veggie5.y>displayHeight) {
  veggie5.y = -5;
 }

 if (veggie6.y>displayHeight) {
  veggie6.y = -5;
 }

 if (veggie7.y>displayHeight) {
  veggie7.y = -5;
 }

 if (veggie8.y>displayHeight) {
  veggie8.y = -5;
 }

 if (veggie9.y>displayHeight) {
  veggie9.y = -5;
 }

 if (veggie10.y>displayHeight) {
  veggie10.y = -5;
 }

 if (choco.y>displayHeight) {
  choco.y = -5;
 }

 if (icec.y>displayHeight) {
  icec.y = -5;
 }

 if (lolli.y>displayHeight) {
  lolli.y = -5;
 }

 if (cheese.y>displayHeight) {
  cheese.y = -5;
 }

scope.x = mouseX;
scope.y = mouseY;

textSize(30);
fill("white");
strokeWeight(3);
text("SCORE: " +score, displayWidth-300, 50);

textSize(70);
fill("white");
strokeWeight(7);
text("CLICK the VEGGIES not the JUNK", displayWidth/5.2, displayHeight/2);

if (mousePressedOver(veggie)) {
  veggie.destroy();
  score = score+1;
}

if (mousePressedOver(veggie1)) {
  veggie1.destroy();
  score = score+1;
}

if (mousePressedOver(veggie2)) {
  veggie2.destroy();
  score = score+1;
}

if (mousePressedOver(veggie3)) {
  veggie3.destroy();
  score = score+1;
}

if (mousePressedOver(veggie4)) {
  veggie4.destroy();
  score = score+1;
}

if (mousePressedOver(veggie5)) {
  veggie5.destroy();
  score = score+1;
}

if (mousePressedOver(veggie6)) {
  veggie6.destroy();
  score = score+1;
}

if (mousePressedOver(veggie7)) {
  veggie7.destroy();
  score = score+1;
}

 if (mousePressedOver(veggie8)) {
   veggie8.destroy();
   score = score+1;
 }

 if (mousePressedOver(veggie9)) {
  veggie9.destroy();
  score = score+1;
 }
 
 if (mousePressedOver(veggie10)) {
  veggie10.destroy();
  score = score+1;
 }

 if (mousePressedOver(choco)) {
  choco.destroy();
  score = score-1;
 }

 if (mousePressedOver(icec)) {
  icec.destroy();
  score = score-1;
 }

 if (mousePressedOver(lolli)) {
  lolli.destroy();
  score = score-1;
 }

 if (mousePressedOver(cheese)) {
  cheese.destroy();
  score = score-1;
 }

veggie.bounceOff(linel);
veggie1.bounceOff(linel);
veggie2.bounceOff(linel);
veggie3.bounceOff(linel);
veggie4.bounceOff(linel);
// veggie5.bounceOff(linel);
veggie6.bounceOff(linel);
veggie7.bounceOff(linel);
veggie8.bounceOff(linel);
veggie9.bounceOff(linel);
veggie10.bounceOff(linel);
choco.bounceOff(linel);
icec.bounceOff(linel);
lolli.bounceOff(linel);
cheese.bounceOff(linel);

veggie.bounceOff(liner);
veggie1.bounceOff(liner);
veggie2.bounceOff(liner);
veggie3.bounceOff(liner);
veggie4.bounceOff(liner);
// veggie5.bounceOff(liner);
veggie6.bounceOff(liner);
veggie7.bounceOff(liner);
veggie8.bounceOff(liner);
veggie9.bounceOff(liner);
veggie10.bounceOff(liner);
choco.bounceOff(liner);
icec.bounceOff(liner);
lolli.bounceOff(liner);
cheese.bounceOff(liner);

// veggie.bounceOff(veggie1);
// veggie.bounceOff(veggie2);

// veggie1.bounceOff(veggie2);



}
  drawSprites();
text("Welcome to MISS", displayWidth/2, displayHeight/2);

}

