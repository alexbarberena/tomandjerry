
  
var canvas,bg;
var together;
var cat, catImg1,catImg2,catImg3;
var jerry, jerryImg1,jerryImg2,jerryImg3;

function preload() {
    bg = loadImage("images/garden.png");
    catImg1= loadAnimation("images/tomOne.png");
    catImg2=loadAnimation("images/tomTwo.png","images/tomThree.png");
    catImg3= loadAnimation("images/tomFour.png");
    jerryImg1=loadAnimation("images/jerryOne.png");
    jerryImg2= loadAnimation("images/jerryTwo.png","images/jerryThree.png");
    jerryImg3=loadAnimation("images/jerryFour.png");

}

function setup(){
    canvas = createCanvas(1000,800);

    cat = createSprite(870, 600);
    cat.addAnimation("tomSleeping", catImg1);
    cat.scale = 0.2;
    
    jerry = createSprite(200, 600);
    jerry.addAnimation("jerryStanding", jerryImg1);
    jerry.scale = 0.15;
}

function draw() {

    background(bg);

    if(cat.x - jerry.x < (cat.width - jerry.width)/2)
    { 
      //Cambia la animaciòn cuando los personajes se toquen
      cat.addAnimation("tom feliz",catImg3);
      cat.changeAnimation("tom feliz");
      cat.velocityX=0;
      cat.x=300;
      cat.scale=0.2;
      jerry.addAnimation("jerry feliz",jerryImg3);
      jerry.changeAnimation("jerry feliz");
      jerry.scale=0.2;
    }

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5; 
        cat.addAnimation("tomRunning", catImg2);
        cat.changeAnimation("tomRunning");
        
        jerry.addAnimation("jerryTeasing", jerryImg2);
        jerry.frameDelay = 25;
        jerry.changeAnimation("jerryTeasing");
    }
}