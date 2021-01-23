//var canvas;
var ball;
var spriteBlue1,spriteGreen2,spritePurple3,spriteOrange4;
var createEdgeSprite;
//createEdgeSprites();
var edges;
//edges = createEdgeSprite();
var leftEdge,rightEdge,upEdge;
function preload(){
   music = loadSound("music.mp3");
}


function setup(){
     createCanvas(600,600);

//create box sprite and give velocity
    ball = createSprite(random(20,750));
    ball.shapeColor = "red";
    ball.scale = 0.2;
    ball.velocityY = 4;
    ball.velocityX = 1;
        music.loop();
    //spriteGroup = new Group();
    edgeGroup   = new Group();

    //create 4 different surfaces
    spriteBlue1 = createSprite(80,585,150,20);
    spriteBlue1.shapeColor = "blue";
    spriteGreen2 = createSprite(235,585,150,20);
    spriteGreen2.shapeColor = "green";
    spritePurple3 = createSprite(390,585,150,20);
    spritePurple3.shapeColor = "purple";
    spriteOrange4 = createSprite(545,585,150,20);
    spriteOrange4.shapeColor = "orange";
    /*
    spriteGroup.add(spriteBlue1);
    spriteGroup.add(spriteGreen2);
    spriteGroup.add(spritePurple3);
    spriteGroup.add(spriteOrange4);
    */
    leftEdge = createSprite(1,100,10,950);
    leftEdge.shapeColor = "orange";

    rightEdge = createSprite(599,100,10,950);
    rightEdge.shapeColor = "orange";

    upEdge = createSprite(1,1,1200,10);
    upEdge.shapeColor = "green";

    edgeGroup.add(leftEdge);
    edgeGroup.add(rightEdge);
    edgeGroup.add(upEdge);
}

function draw() {
    background("black");
    
  //  ball.bounceOff(spriteGroup);
    ball.bounceOff(edgeGroup);

//    console.log('before color');
colour();

drawSprites();
//createEdgeSprite();
    //add condition to check if box touching surface and make it box
}

function colour(){

  //  console.log('In color');
    if(spriteBlue1.isTouching(ball) && ball.bounceOff(spriteBlue1)){
        ball.shapeColor = "blue";
    //    console.log('Blue');
    }
    if(spriteGreen2.isTouching(ball) && ball.bounceOff(spriteGreen2)){
        ball.shapeColor = "green";
      //  console.log('Green');
    }
    if(spritePurple3.isTouching(ball) && ball.bounceOff(spritePurple3)){
        ball.shapeColor = "purple";
        //console.log('Purple');
    }
    if(spriteOrange4.isTouching(ball) && ball.bounceOff(spriteOrange4)){
        ball.shapeColor = "orange";
        //console.log('Orange');
    }

} 
