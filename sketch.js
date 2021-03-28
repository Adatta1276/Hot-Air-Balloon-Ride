
var balloon;
var backG;
var hotair;
var canvas;
var database,position;
var balloonPosition;


function preload() {
backG = loadImage("assets/scenery.png");
hotair = loadAnimation("assets/ha1.png","assets/ha2.png","assets/ha3.png");
}

function setup() {
canvas = createCanvas(1932.5,1087.5);//change size
balloon = createSprite(950,410,10,10);
balloon.addAnimation("hotair",hotair);
balloon.scale = 1;
database = firebase.database();

balloonPosition = database.ref('x');
//balloonPosition.on("value",readPosition,showError);
}

function draw() {
  background(backG);
  
textSize(20);
fill("red");
  text("x : "+mouseX,40,1065);
  text("y : "+mouseY,140,1065);

  if(keyDown(UP_ARROW) || keyDown("w")) {
balloon.y = balloon.y-10;
balloon.scale = balloon.scale-0.003;
  }

  if(keyDown(DOWN_ARROW) || keyDown("s")){
    balloon.y = balloon.y+10;
    balloon.scale = balloon.scale+0.003;
  }

  if(keyDown(RIGHT_ARROW) || keyDown("d")) {
    balloon.x = balloon.x+10;
  }

  if(keyDown(LEFT_ARROW) || keyDown("a")){
    balloon.x = balloon.x-10;
  }

 

  fill(0);
  textSize(20);
  stroke("blue");
  strokeWeight(0.2);
  text("***Set the zoom % of the window to 75 % using CTRL and MINUS or COMMAND and MINUS, and then click anywhere on the screen to enter fullscreen mode !!",20,35);
  textSize(30);
fill(255,0,0);
stroke("lightblue")
strokeWeight(3.7)
  text("Use the arrow / WASD keys to move the balloon !!",20,85)
 
  console.log("WARNING !! ");
  console.log("This feature is intended for DEVELOPERS ONLY. Please do not copy and paste any code that you do not understand.");
  drawSprites();
  
}


function mouseReleased() {
    if (mouseX > 0  && mouseX < 1932.5 && mouseY > 0 && mouseY < 1087.5) {
      
      
    let fs = fullscreen();
    fullscreen(!fs);
  
      //how to zoom in p5 - research !!!!!!!!!!!!!!!!!!!!!!!!!!!.+ : DONE
      
    }
  }
  
  function showError() {
    console.log("Error in writing to the database. Please refresh the page and try again !!");
  }

  




