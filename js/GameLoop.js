var canvas, context, ball, player, timer, interval = 1000/60;
var frictionX = 1;
var frictionY = 1;
var gravity = 0.3;

var Score = 0;

var d = false;
var a = false;
var w = false;

canvas = document.getElementById("canvas")
context = canvas.getContext("2d")

context.font = "bold 40px Arial"
context.fillstyle = "black"


ball = new GameObject(canvas.width/2,canvas.height/2,80,80,"#ff0000")
player = new GameObject( 0, 600, 190, 40,"#000000")
player2 = new GameObject( 900, 600, 190, 40,"#000000")
player3 = new GameObject( canvas.width/2, 300, 190, 40,"#000000")
ball.vx = 10;
ball.vy = 0;




timer = setInterval(animate, interval);

function animate()
{
    context.clearRect(0, 0, canvas.width, canvas.height);

    doHandleAcceleration();
    doApplyFriction();
    doHandleGravity();
    doUpdatePosition();
    doCheckBottomBounds();

if (a == true)
{
    player.color = "#00ff00";
    player.angle = 10;
} 
if (a == false)
{
    player.color = "#000000";
    player.angle = 80;
} 


if (d == true)
{
    player2.color = "#00ff00";
    player2.angle = 170;
} 
if (d == false)
{
    player2.color = "#000000";
    player2.angle = 110;
} 

    ball.move();
    if(ball.x > canvas.width + ball.width/2 - 100)
    {
         ball.vx *= -1;
    }
     if (ball.x < 0 + ball.width/2)
     {
         ball.vx *= -1;
         ball.x ++;
     }
     if(ball.y > canvas.height + ball.height/2 - 100)
     {
ball.vy *= -1;  
     }


    player.move();

    if (player.x < canvas.width/2 -400)
    {
        player.x = canvas.width/2 - 400
        if (player.vx < 0) player.vx = 0;
    }
    if (player.x > canvas.width/2 + 400)
    {
        player.x = canvas.width/2 + 400
        if (player.vx > 0) player.vx = 0;
    }
    
    function doHandleAcceleration () 
    {

    }

    if (ball.collisionCheck(player)) {
        if (a == true) 
        {
            ball.vy = -11;
            ball.vx = 9; 
        } 
        //  else 
        //  {
        //      ball.vy = -10;
        //      ball.vx = 6;
        // }
    }

    if (ball.collisionCheck(player2)) {
        if (d == true) 
        {
            ball.vy = -11;
            ball.vx = -9; 
        } 
        // else 
        // {
        //      ball.vy = -10;
        //      ball.vx = -6;
        // }
    }

    function doHandleGravity () {
        ball.vy += gravity;
    }

    function doUpdatePosition () {
        ball.x += ball.vx;
        ball.y += ball.vy;
    }

    function doCheckBottomBounds() {
        if (ball.y > canvas.height - ball.height/2) 
        {
            ball.y = canvas.height - ball.height/2;
            
        }
    }

    function doApplyFriction()
    {
        player.vx *= 0.93;
    }


        ball.drawCircle();
        player.drawRect();
        player.drawDebug();
        player2.drawRect();
        player2.drawDebug();
        player3.drawRect();
        player3.drawDebug();



}
 