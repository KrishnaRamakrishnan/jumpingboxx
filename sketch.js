var canvas;

var box1;
var box2;
var box3;
var box4;
var ball;
function preload(){
    

}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
box1=createSprite(90,600,150,50);
box1.shapeColor="blue";
box2=createSprite(270,600,150,50);
box2.shapeColor="green";
box3=createSprite(440,600,150,50);
box3.shapeColor="orange";
box4=createSprite(600,600,150,50);
box4.shapeColor="pink";
ball=createSprite(random(20,750),100, 50,50);
ball.shapeColor="white";
ball.velocityY=4;



    

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
     createEdgeSprites();
    
     

    //add condition to check if box touching surface and make it box
    if(box1.isTouching(ball) && ball.bounceOff(box1)){
        ball.shapeColor="blue";
        ball.velocityY=0;
        ball.velocityX=0;
        
    }
    if(box2.isTouching(ball)){
        ball.shapeColor="green";
        ball.velocityY=0;
        ball.velocityX=0;
       
    }
    if(box3.isTouching(ball) && ball.bounceOff(box3)){
        ball.shapeColor="orange";
        ball.velocityY=0;
        ball.velocityX=0;
    }
    if(box4.isTouching(ball)){
        ball.shapeColor="pink";
        ball.velocityY=0;
        ball.velocityX=0;
        
    }
    drawSprites();
}
