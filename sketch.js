var ball, database, position, abc;

function setup(){
    createCanvas(500,500);
    database = firebase.database();
    abc = database.ref("Ball/position");
    abc.on("value",readOperation, showError);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        write(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        write(1,0);
    }
    else if(keyDown(UP_ARROW)){
        write(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        write(0,+1);
    }
    drawSprites();
}

function write(x,y){
    database.ref("Ball/position").set({
        x: ball.x + x, 
        y: ball.y + y
    })
}
function readOperation(data){
    position = data.val();
    ball.x = position.x;
    ball.y = position.y;
}
function showError(){
    console.log(error)
}