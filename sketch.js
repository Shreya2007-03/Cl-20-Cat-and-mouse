var catAni,catImg, mouseAni, gardenImg, catLastImg, mouseLastImg;

function preload() {
    //load the images here
    catAni = loadAnimation("images/cat2.png","images/cat3.png");
    gardenImg=loadImage("images/garden.png");
    mouse_teasing = loadAnimation("images/mouse1.png","images/mouse2.png","images/mouse3.png","images/mouse4.png");
    catImg = loadImage("images/cat1.png")
    catLastImg = loadAnimation("images/cat4.png")
    mouseLastImg = loadAnimation("images/mouse3.png")
}


function setup(){
  createCanvas(1200,550);
  //create tom and jerry sprites here
  cat = createSprite(1037,431,50,50)
  cat.addImage(catImg)
  cat.scale = 0.1;

  mouse = createSprite(250,460);
  mouse.addAnimation("teasing", mouse_teasing)
  mouse.scale = 0.1;

}

function draw() {

    background(gardenImg);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
      cat.velocityX = 0;
      //cat ani
      cat.addAnimation("catLastImg", catLastImg)
      cat.changeAnimation("catLastImg")
      //mouse ani
      mouse.addAnimation ("mouseLastImg", mouseLastImg)
      mouse.changeAnimation("mouseLastImg")
    }

    stroke("black");
    strokeWeight(1);
    fill("white");
    textFont("Sans Serif")
    textSize(25);
    text("Click the 'Left Arrow Key' to move the cat ", 350,70)

  drawSprites();
}


function keyPressed(){
  if(keyCode===LEFT_ARROW){
    cat.velocityX = -5;
    //For moving and changing animation.
    cat.addAnimation("catRunning", catAni);
    cat.changeAnimation("catRunning");
  }
}
